const mongoose = require('mongoose')
const jwt = require('jwt')
const bcrypt = require('bcrypt')
const SECRET = process.env.SECRET;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, default: 'default' },

})

userSchemam.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 5)
  }

})

userSchema.methods.generateToken = function () {
  const tokenData = {
    id: this._id,
    username: this.username
  }

  return jwt.sign(tokenData, SECRET);

}

userSchema.statics.authenticateBasic = function (username, password) {
  return this.findOne({ username })
    .then(result => result && result.comparePassword(password))
    .catch(console.log)


}

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : nul)
    .catch(console.log)
}



module.exports = mongoose.model('users', userSchema);
