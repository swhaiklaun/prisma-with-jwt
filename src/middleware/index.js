const jwt = require('jsonwebtoken')

function verifyAuthenticated(req, res, next) {
  console.log('Authneticating...')
  let token = req.headers['authorization']
  if (token) {
    token = token.replace('Bearer ', '')
    // verifies secret and checks if the token is expired
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        console.log('Verify failed')
        return res.json({ message: 'Invalid token' })
      } else {
        // if everything is good, save to request for use in other routes
        console.log('Verified')
        req.decoded = decoded
        next()
      }
    })
  } else {
    console.log('No token provided')
    // if there is no token
    res.send({
      message: 'No token provided.'
    })
  }
}

module.exports = {
  verifyAuthenticated
}
