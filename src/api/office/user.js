const express = require('express')
const router = express.Router()
const { prisma } = require('../../generated/prisma-client')

module.exports = router

router.get('/', async (req, res) => {
  let users = await prisma.users({})
  res.json(users)
})

router.post(`/`, async (req, res) => {
  const result = await prisma.createUser({
    ...req.body
  })
  res.json(result)
})
