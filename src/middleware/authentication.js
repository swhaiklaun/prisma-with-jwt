const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const { prisma } = require('../generated/prisma-client')
const { compare } = require('bcrypt')

module.exports = router

router.post('/', async (req, res) => {
  let user = await prisma.user({ email: req.body.email })
  // let posts = await prisma.posts({ where: { author: { id: user.id } } })
  // console.log(user)
  // console.log(posts)
  if (!user) {
    res.json({ message: `No user found for email: ${req.body.email}` })
    return
  }
  const passwordValid = await compare(req.body.password, user.password)
  if (!passwordValid) {
    res.json({ message: 'please check your password !' })
    return
  }
  const payload = {
    sub: req.body.email,
    iat: new Date().getTime(),
    check: true
  }

  var accessToken = jwt.sign(payload, process.env.SECRET, {
    expiresIn: 1440 // expires in 24 hours
  })

  res.json({
    message: 'Authentication done',
    user: user,
    token: accessToken
  })
})
