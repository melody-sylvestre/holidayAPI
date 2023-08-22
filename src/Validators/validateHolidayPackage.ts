const validateHolidayPackage = (holidayPackage:any): boolean => {

   let holidayPackageIsValid = true
    const requiredFields = [
        "Title", 
        "Location", 
        "Description", 
        "PriceInGBPPerPerson", 
        "Duration", 
        "BannerImageUnsplashID"
    ]

    for(let i = 0; i < requiredFields.length; i++) {
        if(!holidayPackage.hasOwnProperty(requiredFields[i]) ||  holidayPackage[requiredFields[i]].toString().trim() ==""){
            holidayPackageIsValid = false
            break
        }  
    }
    return holidayPackageIsValid
}
export { validateHolidayPackage }