const test = require('./test')
const question = require('./question')
const user = require('./user')
const stat = require('./stat')

module.exports = [
  ...test,
  ...question,
  ...user,
  ...stat
]

