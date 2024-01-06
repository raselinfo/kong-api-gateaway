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
      const token = authHeader && authHeader.split(" ")[1];

      if (!token) {
        return await kong.response.exit(
          401,
          JSON.stringify({
            message: "Unauthorized",
            headers,
            token_place,
            authHeader,
            token,
            validation_endpoint: this.config.validation_endpoint,
          })
        );
      }

      const data = await axios.get(this.config.validation_endpoint);

      if (data.status !== 200) {
        return await kong.response.exit(
          401,
          JSON.stringify({
            message: "Unauthorized",
            headers,
            token_place,
            authHeader,
            token,
            validation_endpoint: this.config.validation_endpoint,
          })
        );
      }
      
      return;
    } catch (error) {
      const status = error.status || 401;
      const message = error.message || "Unauthorized";
      await kong.response.exit(status, JSON.stringify({message,status}));
    }
  }
}

module.exports = {
  Plugin: CustomAuth,
  Schema: [
    { validation_endpoint: { type: "string", required: true } },
    { token_place: { type: "string", required: false } },
  ],
  Version: "1.0.0",
  Priority: 0,
};
