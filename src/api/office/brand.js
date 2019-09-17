const express = require('express')
const router = express.Router()
const { prisma } = require('../../generated/prisma-client')
const Joi = require('@hapi/joi')

module.exports = router

router.get(`/`, async (req, res) => {
  let ret = await prisma.brands({})
  res.json(ret)
})

router.get('/:id', async (req, res) => {
  const fragment = `fragment BrandWithProducts on Brand {
                      id,
                      name,
                      products {
                        name
                      }
                    }`
  let obj = await prisma.brand({ id: req.params.id }).$fragment(fragment)
  if (!obj)
    return res.status(404).send('The genre with the given ID was not found.')
  res.json(obj)
})

router.post(`/`, async (req, res) => {
  let { error } = validateObject(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  let result = await prisma.createBrand({
    ...req.body
  })
  res.json(result)
})

router.put('/:id', async (req, res) => {
  let obj = await prisma.brand({ id: req.params.id })
  if (!obj)
    return res.status(404).send('The genre with the given ID was not found.')

  let { error } = validateObject(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  let result = await prisma.updateBrand({
    data: req.body,
    where: { id: req.params.id }
  })
  res.json(result)
})

router.delete('/:id', async (req, res) => {
  let obj = await prisma.brand({ id: req.params.id })
  if (!obj)
    return res.status(404).send('The genre with the given ID was not found.')
  const deleteObj = await prisma.deleteBrand({ id: req.params.id })
  res.json(deleteObj)
})

function validateObject(genre) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  }

  return Joi.validate(genre, schema)
}

module.exports = router
