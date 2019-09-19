const bcrypt = require('bcrypt')
const saltRounds = 1

function generateHashPassword(password) {
  const h = bcrypt.hashSync(password, saltRounds)
  return h
}

module.exports = {
  generateHashPassword
}
