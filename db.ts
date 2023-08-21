import { MongoClient } from 'mongodb'

const mongoURL = "mongodb://root:password@localhost:27017"

export const getHolidayPackagesCollection = async () => {
    const connection = await MongoClient.connect(mongoURL)
    return connection.db('holidayDreamsDB').collection('holidayPackages')
}

