const functions = require('firebase-functions');
const got = require("got");
const oauth2 = require("simple-oauth2");

const credentials = {
  client: {
    id: "7bed2a82e4524b27a3fdbe793a43717a",
    secret: "fcf7fed771383eda66cc4b3bb1411e61f4e23921b3571c36a6aa6cfa2a14a5ad",
  },
  auth: {
    tokenHost: "https://idfs.gs.com",
    authorizePath: "/as/authorization.oauth2",
    tokenPath: "/as/token.oauth2?scope=read_product_data",
  },
};


const callApi = async (t) => {
  const opts = {
    headers: {
      Authorization: "Bearer " + t.token.access_token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      where: {
        countryId: ["US"],
      },
      startDate: "2020-01-21",
      limit: 50,
    }),
  };

    try {
      const {body} = await got.post("https://api.marquee.gs.com/v1/data/COVID19_US_DAILY_CDC/query", opts)
      functions.logger.log('body', body);

      return body;

    }
    catch (error) {
      functions.logger.error('API Call Error', error);
      return error;
    }
};


exports.getCovidData = functions.https.onCall( async (req, res) => {
  const client = new oauth2.ClientCredentials(credentials);

  try {
    const token = await client.getToken(credentials);
    const apiResponse = await callApi(token);

    functions.logger.log("apiResponse", apiResponse);
    return apiResponse;
  } catch (error) {
    functions.logger.error("API Error", error.message);


  }
});