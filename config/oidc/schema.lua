local typedefs = require "kong.db.schema.typedefs"

return {
  name = "keycloak-introspection",
  fields = {
    { consumer = typedefs.no_consumer },
    { protocols = typedefs.protocols_http },
    {
      config = {
        type = "record",
        fields = {
          { keycloak_introspection_url = { type = "string", required = true, match = "https?://.+" } },
          { client_id = { type = "string", required = true, default = "check" } },
          { client_secret = { type = "string", required = true } },
        },
      },
    },
  },
}