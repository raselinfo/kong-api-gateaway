# Steps for gatting started with the project

## Prerequisites

- [Docker should instelled in you pc](https://docs.docker.com/install/)
- [Docker-compose should instelled in you pc](https://docs.docker.com/compose/install/)
- [Git should instelled in you pc](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Installation

### Kong

- Clone the repo
  ```sh
  git clone -b kong-with-keycloak https://github.com/raselinfo/kong-api-gateaway/tree/kong-with-keycloak
  ```
- Run the docker-compose file and wait for the containers to be up
  ```sh
  docker-compose up -d
  ```
- Open the browser and hit the url for checking the kong proxy port. it will respond to you `no route matched with those values`
  ```sh
  http://localhost:8000
  ```
- Open the browser and hit the url for checking the kong admin api. it will respond to you a json.
  ```sh
  http://localhost:8001
  ```

### Keycloak

- Open the browser and hit the url for checking the keycloak admin api. it will redirect you to the keycloak home page. from there you will click on `Administration Console` and login with the username and password. Username and Password is `admin`. then you will see the keycloak admin panel.
  ```sh
  http://localhost:8081
  ```

### Konga

- Open the browser and hit the url for checking the Konga admin panel. it will redirect you to the Konga home page. From there you will create a Admin account and login with your cradentials. Then create a connection with kong admin api. Give any connection name and kong admin api url. kong admin api url is `http://kong:8001`. Then click on `Create Connection` button. Ensure the connection is successfull or not. To check the successfull connection click on the `CONNECTIONS` menu from the left side bar. Toggle the Active / Deactive button for twice. if the connection is not success you will notice an error message. For change the connection details you can click on the connection name. You can choose several connection policy like `Default`, `Key Auth`, `JWT Auth`, `Basic Auth`. For simplicity you can choose either `Default` or `Basic Auth`
  ```sh
  http://localhost:1337
  ```

## Configuration Part 🍳

> We are done with the installation. Now we will create a services for our inventory and auth.

### 🍟 Create Inventory Service and Route from Konga dashboard

**To create a service we will follow the following steps.**

1. Click on `SERVICES` menu from the left side bar.
2. Click on `ADD SERVICE` button.
3. Give a name for the service. For example `inventory-service`.
4. Give a protocol for the service. For example `http`.
5. Give a host for the service. For example `inventory`.
6. Give a port for the service. For example `4001`.
7. Give a path for the service. For example `/api/v1/products`. if you want to allow all the routes of your api then keep it default.
8. Click on `SAVE` button.

**To create a route we will follow the following steps.**

> Whenever you will create a service you will see a `Routes` button under the `Service Details` section. You can click on the `Routes` section and create a route for the service.

1. Click on `Routes` section.
2. Click on `ADD ROUTE` button.
3. Give a name for the route. For example `inventory-route`.
4. Give a path for the route. For example `/inventory`.
5. Choose the method for the route. For example `GET`, `POST` if you want to allow all method then keep it default.
6. Click on `SAVE` button.

> Hurrah! You have successfully created a service and route for the Inventory Service. Now you can check the service by hit the url `http://localhost:8000/inventory`. You will see a json data.

### 🔒 Create Auth Service and Route from Konga dashboard

> We will use the keycloak for the auth service. So we will create a service and route for the keycloak first.

**To create a service we will follow the following steps.**

1. Click on `SERVICES` menu from the left side bar.
2. Click on `ADD SERVICE` button.
3. Give a name for the service. For example `auth-service`.
4. Give a protocol for the service. For example `http`.
5. Give a host for the service. For example `host.docker.internal`. if you auth service is running in the same network then you can give the service name. For example `keycloak`.
6. Give a port for the service. For example `8081`.
7. Click on `SAVE` button.

**To create a route we will follow the following steps.**

> Whenever you will create a service you will see a `Routes` button under the `Service Details` section. You can click on the `Routes` section and create a route for the service.

1. Click on `Routes` section.
2. Click on `ADD ROUTE` button.
3. Give a name for the route. For example `auth-route`.
4. Give a path for the route. For example `/auth`.
5. Choose the method for the route. For example `GET`, `POST` if you want to allow all method then keep it default.
6. Click on `SAVE` button.

> Hurrah! You have successfully created a service and route for the Auth Service. Now you can check the service by hit the url `http://localhost:8000/auth`. You will see a keycloak home page.

## OIDC Plugin Configuration Part 🍳

Before configure the OIDC plugin for the `inventory-service` we have to configure the Keycloak to get the `client_id`, `client_secret`, `keycloak introspection url`. To configure the Keycloak we will follow the following steps.

1. Go to the Keycloak admin panel.
2. Create a new realm. For example `stack-inventory`.
3. Create a new client. From the left side bar click on the `Clients` menu. Then click on the `Create Client` button. Give a `Client ID` for the client. For example `inventory-client`. This is your client_id that you will use later. Then click on the `Next` button.
4. Switch on the `Client authentication` button. Then select `Standard flow` and `Direct access grants` from the `Authorization flow` section. Then click on the `Next` button.
5. Give a `Valid redirect URIs` for the client. For example `https://oauth.pstmn.io/v1/callback`. You can configure it later as well. Then click on the `Save` button.
6. Click on the `Credentials` tab from your 'inventory-client' client. Then copy the `Client Secret` value. This is your `client_secret` that you will use later.
7. To create a user click on the `Users` menu from the left side bar. Then click on the `Add user` button. Give a `Username`, `Email` for the user. For example `inventory-user` and `user@example.com`. Then click on the `Create` button.
8. Set the `Password` for the user. Click on the `Credentails` form you `inventory-user`. Click on `Set Password` Button. Give you passowrd. Switch off the `Temporary` button. Then click on the `Save` button.

**Note :** you will find your `OpenID Endpoint Configuration` url from the `Realm Settings` menu. From the left side bar click on the `Realm Settings` menu. Then click on the `General` tab. You will find the `OpenID Endpoint Configuration` url from there. From the `OpenID Endpoint Configuration` url you will find the `introspection_endpoint` url. You will use this url as your `keycloak introspection url` later.

> We have done all the necessary configuration for the inventory and auth service. Now we will protect our `inventory-service` by configure the OIDC plugin for the Inventory service.

To configure the OIDC plugin for the `inventory-service` we will follow the following steps.

1. Click on `SERVICES` menu from the left side bar.
2. Click on the `inventory-service` service.
3. Click on the `Plugins` section.
4. Click on the `ADD PLUGIN` button.
5. Choose the plugin from `Other > Oidc`.
6. Give a config for the plugin. For example

```js
 consumer: "0a0b0c0d0e0f-0a0b0c0d0e0f", // you can give your consumer id. if you have no consumer then keep it blank. it will apply for all consumer.

 keycloak introspection url: "http://host.docker.internal:8081/realms/stack-inventory/protocol/openid-connect/token/introspect"

client id: "inventory-client",

client secret: "2vlCXES0jmfbiOSiLDGx8GmXVE0zkgUk",
```

You can get the `client_id`, `client_secret`, `keycloak introspection url` from the keycloak admin panel. 

7. Click on the `ADD PLUGIN` button.

Now try to hit the inventory service url `http://localhost:8000/inventory`. You will get an error message `{"message":"Unauthorized. Invalid Token!"}`. Because you have not pass the `Bearar` token in the request header as `Authorization`. To pass the `Bearar` token in the request header as `Authorization` you have to follow the following steps.

First of all you have to login a user to the keycloak to get the `access_token`. As you remember we have created our `inventory-client` and gave `Stander flow` and `Direct access grants` from the `Authorization flow` section. To get the `access_token` you can choose either `password` or `authorization_code` grant flow. For simplicity we will use the `password` grant flow. But you can also mimic the `authorization_code` flow from the postman. We will talk about it later. Now we will use the `password` flow. To get the `access_token` we will follow the following steps. 

1. Open the postman and send a `POST` request to the auth service url `http://localhost:8000/auth/realms/stack-inventory/protocol/openid-connect/token`. 
2. Set the `Content-Type` header as `application/x-www-form-urlencoded`.
3. Set the `Body` as `x-www-form-urlencoded`.
4. Send the following data in the body. as `x-www-form-urlencoded`.

```js
grant_type: "password",
client_id: "inventory-client",
client_secret: "2vlCXES0jmfbiOSiLDGx8GmXVE0zkgUk",
username: "inventory-user",
password: "your-user-password",
```
5. Send the request and you will get the `access_token` in the response body. Copy the `access_token` value.
6. Now send a `GET` request to the inventory service url `http://localhost:8000/inventory`. With the `Authorization` header as `Bearar` token. 
7. Now you will get the response from the inventory service 😍.


### 👨‍🌾 Mimic the `authorization_code` flow from the postman
Now we will mimic the `authorization_code` flow from the postman. To mimic the `authorization_code` flow we will follow the following steps.

1. Open the postman and go to the `Authorization` tab from your collection settings.
2. Choose the `OAuth 2.0` from the `Type` dropdown.
3. Click on `Authorization using browser` button from the `Callback URL` section. and copy the `https://oauth.pstmn.io/v1/callback` url and go to the `inventory-client` from the keycloak admin panel. Then paste the `https://oauth.pstmn.io/v1/callback` url to the `Valid redirect URIs` section. Then click on the `Save` button.
4. Now come back to the postman and set 
 - Grant Type as `Authorization Code`

 - Auth URL as `http://host.docker.internal:8081/realms/stack-inventory/protocol/openid-connect/auth`

 - Access Token URL as `http://host.docker.internal:8081/realms/stack-inventory/protocol/openid-connect/token`

 - Client ID as `inventory-client`
 
 - Client Secret as `2vlCXES0jmfbiOSiLDGx8GmXVE0zkgUk`,

5. Click on `Get New Access Token` button. Then you will see a keycloak login page. Login with your user cradentials. Then you will see a popup window with the `access_token`. Copy the `access_token` value.