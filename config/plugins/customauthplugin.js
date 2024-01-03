const jswonwebtoken = require("jsonwebtoken");
class Customauthplugin {
  constructor(config) {
    this.config = config;
  }
  async access(kong) {
    // ...
    console.log(kong)
  }
}
module.exports = {
  Plugin: Customauthplugin,
  Schema: [{ message: { type: "string" } }],
  Version: "0.1.0",
  Priority: 0,
};