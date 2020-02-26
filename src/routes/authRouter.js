const express = require('express');
const authRouter = express.Router()

authRouter.get('/', (req, res, next) => {
  console.log('im alive!');
})

module.exports = authRouter;

