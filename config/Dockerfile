FROM alpine:latest as builder
RUN apk add --no-cache git openssl-dev


COPY ./plugins ./customauthplugin

FROM kong:latest
USER root

RUN apt-get update && apt-get install -y nodejs npm && npm install -g kong-pdk

# RUN mkdir -p /usr/local/share/lua/5.1/kong/plugins/customauthplugin
# COPY --from=builder  /customauthplugin/. /usr/local/share/lua/5.1/kong/plugins/customauthplugin

RUN mkdir -p /usr/local/kong/js-plugins
COPY --from=builder ./customauthplugin/. /usr/local/kong/js-plugins
RUN cd /usr/local/kong/js-plugins && npm install

USER kong
