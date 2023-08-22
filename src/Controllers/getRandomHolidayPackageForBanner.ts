import {Request, Response} from 'express' 
import { bannerItem } from '../interfaces'
import { UNSPLASH_ACCESS_KEY } from '../accessKey'
import { getHolidayPackagesCollection } from '../db'

const getRandomHolidayPackageForBanner = async (request:Request, response:Response) => {
    const holidayPackagesCollection = await getHolidayPackagesCollection()
    const holidayPackageDataFromDB = await holidayPackagesCollection.aggregate([ { $sample: { size: 1 } } ]).toArray()
    const randomHolidayPackage = holidayPackageDataFromDB[0]

    // validate randomHolidayPackage -> should have a BannerImageUnsplashID + some other stuff
 
   // should be in a try catch in order to catch potential issues with API
    const unsplashData = await fetch(`https://api.unsplash.com/photos/${randomHolidayPackage.BannerImageUnsplashID}`, {
        method: 'GET',
        headers: {
            "Authorization": `Client-ID ${UNSPLASH_ACCESS_KEY}`
        }
    })
    const photoDetails = await unsplashData.json()

    const holidayPackageforBanner: bannerItem = {
        Title: randomHolidayPackage.Title, 
        PriceInGBPPerPerson: randomHolidayPackage.PriceInGBPPerPerson,
        BannerImageUrl: photoDetails.urls.regular,
        Username: photoDetails.user.name, 
        BannerPortfolioUrl: photoDetails.user.links.html
    }
    //validate bannerItem
    
    const APIResponse = {
        message: "Success",
        data: holidayPackageforBanner
    }
    
    response.status(200).json(APIResponse)
}

export { getRandomHolidayPackageForBanner }