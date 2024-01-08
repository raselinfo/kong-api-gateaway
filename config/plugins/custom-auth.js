const axios = require("axios");
class CustomAuth {
  constructor(config) {
    this.config = config;
  }

  async access(kong) {
    try {
      const headers = await kong.request.get_headers();
      const token_place = this.config.token_place || "Authorization";
      const authHeader =
        headers[token_place.toLowerCase()] &&
        headers[token_place.toLowerCase()][0];
      const token = authHeader ? authHeader.split(" ")[1] : null;

      if (!token) {
        return await kong.response.exit(
          401,
          JSON.stringify({
            message: "Unauthorized",
          })
        );
      }

      const data = await axios.post(
        this.config.validation_endpoint, // http://auth:4005/api/v1/checkpoint
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.status !== 200) {
        return await kong.response.exit(
          401,
          JSON.stringify({
            message: "Unauthorized",
          })
        );
      }

      return;
    } catch (error) {
      const message = error.message || "Unauthorized";

      return await kong.response.exit(500, JSON.stringify({ message }));
    }
  }
}

module.exports = {
  Plugin: CustomAuth,
  Schema: [
    {
      validation_endpoint: {
        type: "string",
        required: true,
        description:
          "The URL of the external authentication server's validation endpoint.",
      },
    },
    {
      token_place: {
        type: "string",
        required: false,
        default: "Authorization",
      },
    },
  ],
  Version: "1.0.0",
  Priority: 0,
};
