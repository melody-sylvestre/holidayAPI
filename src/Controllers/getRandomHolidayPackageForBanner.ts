import {Request, Response} from 'express' 
import { bannerItem } from '../interfaces'
import { UNSPLASH_ACCESS_KEY } from '../accessKey'
import { getHolidayPackagesCollection } from '../db'
import { validateHolidayPackage } from '../Validators/validateHolidayPackage'

const getRandomHolidayPackageForBanner = async (request:Request, response:Response) => {
    const holidayPackagesCollection = await getHolidayPackagesCollection()
    const allHolidayPackages = await holidayPackagesCollection.find({}).toArray()
    
    let holidayPackageIsValid :boolean = false 
    const maxNumberOfAttempts :number = 10

    let index:number = 0
    let randomHolidayPackage = null

    for (let i = 1; i <= maxNumberOfAttempts; i++ ) {
        index = Math.floor(Math.random() * allHolidayPackages.length)
        randomHolidayPackage = allHolidayPackages[index]

        if (validateHolidayPackage(randomHolidayPackage)) {
            break
        } else if (i === maxNumberOfAttempts) {
            const APIResponse = {
                message: "Could not find a valid object in the database.",
                data: {}
            }
            
            response.status(400).json(APIResponse)
            return 
        }
    }    
    
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