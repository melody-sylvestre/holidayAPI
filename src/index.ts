const express = require('express')
import { getRandomHolidayPackageForBanner } from './Controllers/getRandomHolidayPackageForBanner'

const app = express()
const port = 4000

app.use(express.json())

app.get('/randomHolidayPackageForBanner', getRandomHolidayPackageForBanner)

app.listen(port)
