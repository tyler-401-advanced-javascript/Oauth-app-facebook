require('dotenv').config()
const app = require('./src/app')
const { PORT, MONGODB_URI } = process.env

const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(MONGODB_URI, mongooseOptions, () => {
  console.log('DB up')
  app.start(PORT);
});

