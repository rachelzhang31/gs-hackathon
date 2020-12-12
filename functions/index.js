const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const got = require("got");

const credentials = {
  client: {
    id: "7bed2a82e4524b27a3fdbe793a43717a",
    secret: "bbd67af0ed231d86ba3a5fa45746efb5f9828755ea7fd791f6a9e3509ba8343d",
  },
  auth: {
    tokenHost: "https://idfs.gs.com",
    authorizePath: "/as/authorization.oauth2",
    tokenPath: "/as/token.oauth2?scope=read_product_data",
  },
};

const oauth2 = require("simple-oauth2");


const callApi = async (t) => {
  const opts = {
    headers: {
      Authorization: "Bearer " + t.token.access_token,
      "Content-Type": "application/json",
    },
  };
    // const args = {
    //     "headers": {
    //         "Authorization": "Bearer " + t.token.access_token,
    //         "Content-Type": "application/json",
    //     },
    //     // "body": {
    //     //         "where": {
    //     //             "countryId": ["US"]
    //     //         },
    //     //         "startDate": "2020-01-21",
    //     //         "limit": 50
    //     //    },
    //     // // "json": true
    // };

    // try {
    //   const response  = await got.post("https://api.marquee.gs.com/v1/data/COVID19_US_DAILY_CDC/query", args);
    //   functions.logger.log('response', response);
    // }
    // catch (error) {
    //   functions.logger.error('API Call Error', error);
    // }

    return got('https://api.marquee.gs.com/v1/users/self', opts)
        .then(r => r.body)
    ;
        // .then(response => functions.logger.log(response.body), console.error.bind(console)).catch(err => functions.logger.error(err))
};


exports.getAPIData = functions.https.onRequest( async (req, res) => {
  const client  = new oauth2.ClientCredentials(credentials);

  try {
    const accessToken = await client.getToken(credentials);
    functions.logger.log('accessToken', accessToken);

    const apiResponse = await callApi(accessToken);
    functions.logger.log('apiResponse', apiResponse);
  } catch (error) {
    functions.logger.error('Access Token error', error.message);
  }
  return;
  // client.getToken({})
  //   .then((r) => client.accessToken.create(r))
  //   .then(callApi)
  //   .then(console.log, console.error)
  //   .catch((err) => functions.logger.error(err));
 });