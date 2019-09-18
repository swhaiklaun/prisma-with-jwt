const express = require('express')
const router = express.Router({ mergeParams: true })
const { verifyAuthenticated } = require('../../middleware/')

module.exports = router

router.get('/', (req, res) => {
  res.send('<h1>Home API</h1>')
})

// Public routes
router.use('/auth', require('../../middleware/authentication'))

// Protected routes
router.use('/user', verifyAuthenticated, require('./user'))
