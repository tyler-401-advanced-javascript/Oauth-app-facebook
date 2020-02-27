const queryString = require('querystring')
function handleOauth (req, res, next) {
  /*
  
  https://localhost:3000/oauth?#access_token=EAACzcwOEkbgBABp4URdm3oEBTTPVOAEDGp3kagBaVX1imLwi6BCWrboIG0f4jZCrg02RTgIZAoNBcI1VjEwYxO2awSppqt0zh7RkgO767ghK2o5uz4yirvTMSgZAWoZAVfqZB52LoZC0ZC2gbNZBu9ZAAZCP978wb9q71iZAEZAjMSoWXK6L3Rk9Hq0m7FWLegQtswEZD&data_access_expiration_time=1590542303&expires_in=6097&state=dumbledoredies
  */
  //todo: parse the query and relay to front end... maybe store the token.. MAybe check the db for an existing user ! 

  //const areaa
  const TOKEN_SERVER_URL = ''
async function exchangeCodeForToken(code) {
  //return super agent call to: 
  /*
  GET https://graph.facebook.com/v6.0/oauth/access_token?
   client_id={app-id}
   &redirect_uri={redirect-uri}
   &client_secret={app-secret}
   &code={code-parameter}

   */
}
  console.log(req.query);
  next()
}

module.exports = handleOauth