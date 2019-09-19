const express = require('express')
const router = express.Router()
const { prisma } = require('../../generated/prisma-client')
const Joi = require('@hapi/joi')
const { generateHashPassword } = require('../../_helper/passwordHelper')

module.exports = router

router.get('/', async (req, res) => {
  let users = await prisma.users({})
  res.json(users)
})

router.get('/:id', async (req, res) => {
  const fragment = `fragment RoleOnUser on User {
                      id,
                      name,
                      email,
                      password,
                      status,
                      role {
                        id,
                        name
                      }
                    }`
  let obj = await prisma.user({ id: req.params.id }).$fragment(fragment)
  if (!obj)
    return res.status(404).send('The genre with the given ID was not found.')
  res.json(obj)
})

router.post(`/`, async (req, res) => {
  let user = req.body.user
  // console.log(user)
  user.password = generateHashPassword(user.password)
  const result = await prisma.createUser({
    id: null,
    email: user.email,
    name: user.name,
    password: user.password,
    status: user.status,
    role: {
      connect: {
        id: user.role.id
      }
    }
  })
  res.json(result)
})

router.put('/:id', async (req, res) => {
  let user = req.body.user
  let obj = await prisma.user({ id: user.id })
  if (!obj)
    return res.status(404).send('The user with the given ID was not found.')

  // let { error } = validateObject(req.body.user)
  // if (error) return res.status(400).send(error.details[0].message)
  user.password = generateHashPassword(user.password)
  let result = await prisma.updateUser({
    data: {
      email: user.email,
      name: user.name,
      password: user.password,
      status: user.status,
      role: {
        connect: {
          id: user.role.id
        }
      }
    },
    where: { id: user.id }
  })
  res.json(result)
})

router.delete('/:id', async (req, res) => {
  let obj = await prisma.user({ id: req.params.id })
  if (!obj)
    return res.status(404).send('The genre with the given ID was not found.')
  const deleteObj = await prisma.deleteUser({ id: req.params.id })
  res.json(deleteObj)
})

function validateObject(valObj) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  }

  return Joi.validate(valObj, schema)
}
