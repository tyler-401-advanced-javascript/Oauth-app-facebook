module.exports = function handle505 (err, req, res, next) {
  next(new Error('500 mothafucka!'))
}