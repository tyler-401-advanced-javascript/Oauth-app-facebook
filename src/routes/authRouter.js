const express = require('express');

const authRouter = express.Router()
const superagent = require('superagent')

authRouter.get('/', (req, res, next) => {
  console.log('im alive!');
  res.send('This is the Kremlin, go ahead comrade.')
})

const handleOauth = require('../middleware/handleOauth')

authRouter.get('/oauth', handleOauth, (req, res, next) => {

  // console.log(req.query, req.params, req.body, 'in route');
  console.log('facebook got here.');
  res.status(200).json({message: 'You logged in with facebook. Congratulations.'})
})
module.exports = authRouter;

