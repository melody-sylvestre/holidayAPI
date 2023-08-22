// const { describe } = require('node:test')
import {validateHolidayPackage } from '../../src/Validators/validateHolidayPackage'

describe('Testing validateHolidayPackage', () => {
    test('All required fields are present', () => {
        const holidayPackage = {
            Title: "Dream holiday", 
            Location: "Maldives",  
            Description: "Come enjoy sunny Maldives!", 
            PriceInGBPPerPerson: 1000, 
            Duration: "7 nights", 
            BannerImageUnsplashID: "ABCDEFGH"   
        }
        expect(validateHolidayPackage(holidayPackage)).toBe(true)
    })

    test('Missing Title', () => {
        const holidayPackage = { 
            Location: "Maldives",  
            Description: "Come enjoy sunny Maldives!", 
            PriceInGBPPerPerson: 1000, 
            Duration: "7 nights", 
            BannerImageUnsplashID: "ABCDEFGH"   
        }
        expect(validateHolidayPackage(holidayPackage)).toBe(false)
    })  
    
    test('Empty Title', () => {
        const holidayPackage = { 
            Title: "",
            Location: "Maldives",  
            Description: "Come enjoy sunny Maldives!", 
            PriceInGBPPerPerson: 1000, 
            Duration: "7 nights", 
            BannerImageUnsplashID: "ABCDEFGH"   
        }
        expect(validateHolidayPackage(holidayPackage)).toBe(false)
    })

    test('Missing Location', () => {
        const holidayPackage = { 
            Title: "Dream holiday",
            Description: "Come enjoy sunny Maldives!", 
            PriceInGBPPerPerson: 1000, 
            Duration: "7 nights", 
            BannerImageUnsplashID: "ABCDEFGH"   
        }
        expect(validateHolidayPackage(holidayPackage)).toBe(false)
    })  
    
    test('Empty Location', () => {
        const holidayPackage = { 
            Title: "Dream Holiday",
            Location: " ",  
            Description: "Come enjoy sunny Maldives!", 
            PriceInGBPPerPerson: 1000, 
            Duration: "7 nights", 
            BannerImageUnsplashID: "ABCDEFGH"   
        }
        expect(validateHolidayPackage(holidayPackage)).toBe(false)
    })

    test('Missing Description', () => {
        const holidayPackage = {
            Title: "Dream holiday", 
            Location: "Maldives",   
            PriceInGBPPerPerson: 1000, 
            Duration: "7 nights", 
            BannerImageUnsplashID: "ABCDEFGH"   
        }
        expect(validateHolidayPackage(holidayPackage)).toBe(false)
    })  
    
    test('Empty Description', () => {
        const holidayPackage = {
            Title: "Dream holiday", 
            Location: "Maldives",  
            Description: " ", 
            PriceInGBPPerPerson: 1000, 
            Duration: "7 nights", 
            BannerImageUnsplashID: "ABCDEFGH"   
        }
        expect(validateHolidayPackage(holidayPackage)).toBe(false)
    })

    test('Missing Price', () => {
        const holidayPackage = {
            Title: "Dream holiday", 
            Location: "Maldives",  
            Description: "Come enjoy sunny Maldives!",  
            Duration: "7 nights", 
            BannerImageUnsplashID: "ABCDEFGH"   
        }
        expect(validateHolidayPackage(holidayPackage)).toBe(false)
    })  
    
    test('Empty Price', () => {
        const holidayPackage = {
            Title: "Dream holiday", 
            Location: "Maldives",  
            Description: "Come enjoy sunny Maldives!", 
            PriceInGBPPerPerson: "", 
            Duration: "7 nights", 
            BannerImageUnsplashID: "ABCDEFGH"   
        }
        expect(validateHolidayPackage(holidayPackage)).toBe(false)
    })

    test('Missing Duration', () => {
        const holidayPackage = {
            Title: "Dream holiday", 
            Location: "Maldives",  
            Description: "Come enjoy sunny Maldives!", 
            PriceInGBPPerPerson: 1000,  
            BannerImageUnsplashID: "ABCDEFGH"   
        }
        expect(validateHolidayPackage(holidayPackage)).toBe(false)
    })  
    
    test('Empty Duration', () => {
        const holidayPackage = {
            Title: "Dream holiday", 
            Location: "Maldives",  
            Description:"Come enjoy sunny Maldives!", 
            PriceInGBPPerPerson: 1000, 
            Duration: "", 
            BannerImageUnsplashID: "ABCDEFGH"   
        }
        expect(validateHolidayPackage(holidayPackage)).toBe(false)
    })


    test('Missing BannerImageUnsplashID', () => {
        const holidayPackage = {
            Title: "Dream holiday", 
            Location: "Maldives",  
            Description: "Come enjoy sunny Maldives!", 
            PriceInGBPPerPerson: 1000, 
            Duration: "7 nights",    
        }
        expect(validateHolidayPackage(holidayPackage)).toBe(false)
    })  
    
    test('Empty BannerImageUnsplashID', () => {
       const holidayPackage = {
                Title: "Dream holiday", 
                Location: "Maldives",  
                Description: "Come enjoy sunny Maldives!", 
                PriceInGBPPerPerson: 1000, 
                Duration: "7 nights", 
                BannerImageUnsplashID: " "   
            }   
        
        expect(validateHolidayPackage(holidayPackage)).toBe(false)
    })

})