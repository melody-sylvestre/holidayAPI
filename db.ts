const MongoClient = require('mongodb')
const mongoURL = "mongodb://root:password@localhost;27017"

const getHolidayPackagesCollection = async () => {
    const connection = await MongoClient.connect(mongoURL)
    const holidayPackagesCollection = connection.db('holidayDreamsDB').collection('holidayPackages')
    
    return holidayPackagesCollection
}

module.exports = getHolidayPackagesCollection