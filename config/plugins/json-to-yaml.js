const axios = require("axios");
const yaml = require("js-yaml");

class JsonToYaml {
  async response(kong) {
    try {
      const source = await kong.response.getSource();
      // Check if the source is a service or a route

      if (source === "service") {
        let body = await kong.service.response.getRawBody();
        body = yaml.dump({ ...JSON.parse(body),id:"wetwet3467347",combo:"nill" });

     

        // Capture the HTTP response code
        const code = await kong.response.getStatus();

        // send back the response
        await kong.response.exit(code, body);
      }
    } catch (e) {
      await kong.response.exit(500, JSON.stringify({message:e.message,status:e.status,name:"Rabina"}));
    }
  }
}

module.exports = {
  Plugin: JsonToYaml,
  Schema: [],
  Version: "0.1.0",
  Priority: 0,
};
