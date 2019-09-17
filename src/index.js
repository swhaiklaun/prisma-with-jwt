require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const compression = require('compression')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const routeApiV1 = require('./api/v1')
const routeApiOffice = require('./api/office')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

// SETUP ENVIROMNENTS CONFIGURATIONS
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'))
  console.log('Morgan enabled...')
}

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.header('Access-Control-Allow-Origin', '*')

  // Request methods you wish to allow
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )

  // Request headers you wish to allow
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, Origin, X-Requested-With, Content-Type, Accept'
  )

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.header('Access-Control-Allow-Credentials', true)

  console.log('header')
  // Pass to next layer of middleware
  next()
})

// Public/Private API for front-end
app.use('/api/v1', routeApiV1)

// Private API for back-office
app.use('/api/office', routeApiOffice)

app.use(
  compression({
    filter: (req, res) =>
      (!req.headers['x-no-compression'] && compression.filter(req, res)) ||
      false
  })
)

app.listen(process.env.PORT, () => {
  console.log('ready', process.env.PORT)
})

const swaggerDocument = YAML.load('./swagger.yaml')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
