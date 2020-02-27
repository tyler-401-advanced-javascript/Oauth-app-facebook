const queryString = require('querystring')


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

function handleOauth(req, res, next) {
  /*
  https://localhost:3000/oauth?#access_token=EAACzcwOEkbgBABp4URdm3oEBTTPVOAEDGp3kagBaVX1imLwi6BCWrboIG0f4jZCrg02RTgIZAoNBcI1VjEwYxO2awSppqt0zh7RkgO767ghK2o5uz4yirvTMSgZAWoZAVfqZB52LoZC0ZC2gbNZBu9ZAAZCP978wb9q71iZAEZAjMSoWXK6L3Rk9Hq0m7FWLegQtswEZD&data_access_expiration_time=1590542303&expires_in=6097&state=dumbledoredies
  */
  //todo: parse the query and relay to front end... maybe store the token.. MAybe check the db for an existing user ! 
  //const areaa
  const TOKEN_SERVER_URL = 'http://graph.facebook.com/v6.0/oauth/access_token?'
  const APP_SECRET = process.env.FACEBOOK_APP_SECRET;
  const CALLBACK_URI = 'https://localhost:3000/oauth'

  //what do we need to do? 
  //1. use the code to get an access token from FB.
  //2. then use the access token to get the username of the user who authorized it (from FB). 
  //3. then check to see if that user has an account with us.
  //4. if not, create that user and log them in. If so, log them in. 
  next();
}

module.exports = handleOauth