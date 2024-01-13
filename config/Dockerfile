FROM kong:latest
USER root

RUN apt-get update && apt-get install -y nodejs npm && npm install -g kong-pdk

# custom auth plugin for custom auth server
RUN mkdir -p /usr/local/kong/js-plugins
COPY ./plugins /usr/local/kong/js-plugins
RUN cd /usr/local/kong/js-plugins && npm install


# Oidc plugin for keycloak introspection
RUN mkdir -p /usr/local/share/lua/5.1/kong/plugins/keycloak-introspection
COPY ./oidc /usr/local/share/lua/5.1/kong/plugins/keycloak-introspection

USER kong