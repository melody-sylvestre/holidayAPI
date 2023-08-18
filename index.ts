const express = require('express')
const getRandomHolidayPackageForBanner = require('../Routes/getRandomHolidayPackages')

const app = express()
const port = 3000

app.use(express.json())

app.get('/randomHolidayPackageForBanner', getRandomHolidayPackageForBanner)

app.listen(port)
