const express = require('express');
const cors = require('cors')
const https = require('https')
const fs = require('fs')
const path = require('path')

// const app = require('https-localhost')();

const app = express()

//configure our app
app.use(express.static('public'))
app.use(cors());
app.use(express.json());

//require and use the Router.
const authRouter = require('./routes/authRouter.js')
app.use(authRouter);



//catch alls
const notFoundHandler = require('./middleware/404')
app.use(notFoundHandler);

const serverErrorHandler = require('./middleware/500')
app.use(serverErrorHandler);

module.exports = {
  app: app,
  start: (port) => {
    const PORT = port || 3001;
    https.createServer({
      key: fs.readFileSync(path.join(__dirname, '..', 'server.key')),
      cert: fs.readFileSync(path.join(__dirname, '..', 'server.cert'))
    }, app).listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
  }
}






