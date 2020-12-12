const express = require('express')
const app = express()
const got = require("got");
const oauth2 = require("simple-oauth2");

const port = 5000

const credentials = {
    client: {
        id: "7bed2a82e4524b27a3fdbe793a43717a",
        secret: "fcf7fed771383eda66cc4b3bb1411e61f4e23921b3571c36a6aa6cfa2a14a5ad"
    },
    auth: {
        tokenHost: "https://idfs.gs.com",
        authorizePath: "/as/authorization.oauth2",
        tokenPath: "/as/token.oauth2?scope=read_product_data"
    }
};

const callApi = (t) => {
    const args = {
        "headers": {
            "Authorization": "Bearer " + t.token.access_token,
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
                "where": {
                    "countryId": ["US"]
                },
                "startDate": "2020-01-21",
                "limit": 50
           }),
        // "json": true
    };


    got.post("https://api.marquee.gs.com/v1/data/COVID19_US_DAILY_CDC/query", args)
        .then(response => console.log(response.body), console.error.bind(console))
};




app.get('/covid', async (req, res) => {
  const client  = new oauth2.ClientCredentials(credentials);
  try {
    const token = await client.getToken(credentials);
    console.log('accessToken', token);

    const apiResponse = await callApi(token);
    console.log('apiResponse', apiResponse);
  } catch (error) {
    console.error('Access Token error', error.message);
  }
  return;

  oauth.clientCredentials
      .getToken({})
      .then(r => oauth.accessToken.create(r))
      .then(callApi)
      .then(console.log, console.error);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})