# kong-api-getaway

- [Keycloak Docs Distribution 21.0.1 API](https://www.keycloak.org/docs-api/21.0.1/javadocs/index.html)

- [Vie All Free Service of Kong 🦍](https://docs.konghq.com/hub/?tier=free)

![image](https://github.com/raselinfo/kong-api-geteaway/assets/76788961/dab8a376-21c5-4520-8ccd-45a188097a23)

## Create a ssl certificate with letsencrypt

> it will create localhostcrt.pem and localhostkey.pem for a ssl certificate for localhost

- [Lets Encrypt for fake cert and key file](https://letsencrypt.org/docs/certificates-for-localhost/)

- [keycloak tls](https://www.keycloak.org/server/enabletls)

```bash
openssl req -x509 -out localhostcrt.pem -keyout localhostkey.pem \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```
- [http keycloak on 8081 port](http://localhost:8081/)

- [https keycloak on 8445](https://localhost:8445/)



# [Oauth Grant Types](https://oauth.net/2/grant-types/)
![image](./docs-image/image.png)