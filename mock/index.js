const test = require('./test')
const question = require('./question')
const user = require('./user')
const stat = require('./stat')
const answer = require('./answer')

module.exports = [
  ...test,
  ...question,
  ...user,
  ...stat,
  ...answer
]

