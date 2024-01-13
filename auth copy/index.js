
const axios=require("axios")
const qs=require("qs")




const keycloak_introspection_url = "http://host.docker.internal:8081/realms/demo/protocol/openid-connect/token/introspect"
// const keycloak_introspection_url = "http://localhost:8000/auth/realms/demo/protocol/openid-connect/token/introspect"

const client_id = "demo-client"
const client_secret = "PUjIoVsKmXGZQzkl91lVhOI4MyRCIJgV"
const token=`eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJrTUtxdDJzVGg4M05sdlpsdFI1RmtpaV83ZFVpemxYWXo5RUNZZDhIam5NIn0.eyJleHAiOjE3MDUxNDExMTksImlhdCI6MTcwNTE0MDgxOSwianRpIjoiMzQ2OGMyYmItNjFjNC00ZTVmLThjMDYtYzFmNTlkMmQ3NmI2IiwiaXNzIjoiaHR0cDovL2hvc3QuZG9ja2VyLmludGVybmFsOjgwODEvcmVhbG1zL2RlbW8iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiY2UyNWY2MmMtZmJmNi00NjFlLWJjYWYtNGU4Y2Q1MTEwMzEwIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZGVtby1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiMzYwMGIzMTEtNTJiZS00MGI1LTk2NWUtYjYwN2ZjODdhOTU4IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIvKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRlZmF1bHQtcm9sZXMtZGVtbyJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiIzNjAwYjMxMS01MmJlLTQwYjUtOTY1ZS1iNjA3ZmM4N2E5NTgiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InJhc2VsIiwiZW1haWwiOiJyYXNlbEBnbWFpbC5jb20ifQ.VBPnTVih2jr5MQeexBz2meEbCuA6H0MQb1vfNw8GygGujyc_b03Ac4BaP7Y2MY6YPXzj4GWHulTi0hZC3yNW4Oc4TIy8_2TxS0tsq3xSK4YO40pTI0ZmpQNehf8PIjWloZf9DCx5Pt9ReCNMIYxxaBDQ7XXjMSEimyEjXqXiCjfXrwzQUuBksLSupudPB-KTL5bvrC2NoBTy2dLHnA871pJa8KT-LwlTaG0DHczVJkIZHsc2wohrhOdNF6MdZku7OM-p8h5EUFTQavY0ocSynvqtM-2YzgUNtP_7l-jU0xNTg4Jcm8lE_qWLDnfOcbmw6MWA79YYzh1gDzZdkY7ptw`


// const data = new URLSearchParams();
// data.append("client_id", client_id);
// data.append("client_secret", client_secret);
// data.append("token", token);

const data=qs.stringify({
  client_id,
  client_secret,
  token
})

console.log(data);

const run=async()=>{
  try{
    const response = await axios.post(
      keycloak_introspection_url,
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    console.log(response.data);
  }catch(e){
    console.log(e)
  }
}


run()