const { Location} = require("../models/location.model")

// CRUD Operations for location Document

// Get All locations: READ
module.exports.findAllLocations = (request, response) => {
    Location.find()
        .then(allLocations => {
            response.json({Locations: allLocations})
            
        })
        .catch(err => response.json({ message: "Something went wrong", error: err}))
};

// Get a Single Location: READ
module.exports.findOneSingleLocation = (request, response) => {
    Location.find({_id: request.params.id})
        .then(oneSingleLocation => response.json({ Location: oneSingleLocation}))
        .catch(err => response.json({ message: "Something went wrong", error: err}));
};

// Create a Location: CREATE
module.exports.createLocation = (request, response) => {

    const {
        location,
        populationEstimatesJuly12019,
        populationEstimatesBaseApril12010,
        populationPercentChangeApril12010toJuly12019,
        populationCensusApril12010,
        personsUnder5Years,
        personsUnder18Years,
        persons65YearsAndOver,
        femalePersons,
        whiteAlone,
        blackOrAfricanAmericanAlone,
        americanIndianAndAlaskaNativeAlone,
        asianAlone,
        nativeHawaiianAndOtherPacificIslanderAlone,
        twoOrMoreRaces,
        hispanicOrLatino,
        whiteAloneNotHispanicOrLatino,
        veterans2014To2018,
        foreignBornPersons2014To2018,
        housingUnitsJuly12019,
        ownerOccupiedHousingUnitRate2014To2018,
        medianValueOfOwnerOccupiedHousingUnits2014To2018,
        medianSelectedMonthlyOwnerCostsWithAMortgage2014to2018,
        medianSelectedMonthlyOwnerCostsWithoutAMortgage2014to2018,
        medianGrossRent2014To2018,
        buildingPermits2019,
        households2014To2018,
        personsPerHousehold2014To2018,
        livingInTheSameHouse1YearAgoPercentOfPersonsAge1AndOver,
        languageOtherThanEnglishSpokenAtHomePercentOfPersonsAge5AndOver2014To2018,
        householdsWithAComputer2014To2018,
        householdsWithABroadbandInternetSubscription,
        highSchoolGraduateOrHigherPercentOfPersonsAge25AndOver2014To2018,
        bachelorsDegreeOrHigherPercentOfPersonsAge25YearsAndOver2014To2018,
        withADisabilityUnderAge65Years2014To2018,
        personsWithoutHealthInsuranceUnder65Years,
        inCivilianLaborForceTotalPercentOfPopulationAge16YearsAndOver2014To2018,
        inCivilianLaborForceFemalePercentOfPopulationAge16YearsAndOver2014To2018,
        totalAccomodationAndFoodServicesSales2012InThousands,
        totalHealthCareAndSocialAssistanceReceiptsAndRevenue2012InThousands,
        totalManufacturersShipments2012InThousands,
        totalMerchantWholesalerSales2012InThousands,
        totalRetailSales2012InThousands,
        totalRetailSalesPerCapita2012,
        meanTravelTimeToWorkInMinutesWorkersAge16AndOver2014To2018,
        medianHouseholdIncomeIn2018Dollars2014To2018,
        perCapitaIncomeInPast12MonthsIn2018Dollars2014To2018,
        personsInPoverty,
        totalEmployerEstablishments2017,
        totalEmployment2017,
        totalAnnualPayroll2017InThousands,
        totalEmploymentPercentChange2016To2017,
        totalNonEmployerEstablishments2018,
        allFirms2012,
        menOwnedFirms2012,
        womenOwnedFirms2012,
        minorityOwnedFirms2012,
        nonMinorityOwnedFirms2012,
        veteranOwnedFirms2012,
        nonVeteranOwnedFirms2012,
        populationPerSquareMile2010,
        landAreaInSquareMiles2010,
        fipsCode,
    } = request.body;
    
    Location.create({
        location,
        populationEstimatesJuly12019,
        populationEstimatesBaseApril12010,
        populationPercentChangeApril12010toJuly12019,
        populationCensusApril12010,
        personsUnder5Years,
        personsUnder18Years,
        persons65YearsAndOver,
        femalePersons,
        whiteAlone,
        blackOrAfricanAmericanAlone,
        americanIndianAndAlaskaNativeAlone,
        asianAlone,
        nativeHawaiianAndOtherPacificIslanderAlone,
        twoOrMoreRaces,
        hispanicOrLatino,
        whiteAloneNotHispanicOrLatino,
        veterans2014To2018,
        foreignBornPersons2014To2018,
        housingUnitsJuly12019,
        ownerOccupiedHousingUnitRate2014To2018,
        medianValueOfOwnerOccupiedHousingUnits2014To2018,
        medianSelectedMonthlyOwnerCostsWithAMortgage2014to2018,
        medianSelectedMonthlyOwnerCostsWithoutAMortgage2014to2018,
        medianGrossRent2014To2018,
        buildingPermits2019,
        households2014To2018,
        personsPerHousehold2014To2018,
        livingInTheSameHouse1YearAgoPercentOfPersonsAge1AndOver,
        languageOtherThanEnglishSpokenAtHomePercentOfPersonsAge5AndOver2014To2018,
        householdsWithAComputer2014To2018,
        householdsWithABroadbandInternetSubscription,
        highSchoolGraduateOrHigherPercentOfPersonsAge25AndOver2014To2018,
        bachelorsDegreeOrHigherPercentOfPersonsAge25YearsAndOver2014To2018,
        withADisabilityUnderAge65Years2014To2018,
        personsWithoutHealthInsuranceUnder65Years,
        inCivilianLaborForceTotalPercentOfPopulationAge16YearsAndOver2014To2018,
        inCivilianLaborForceFemalePercentOfPopulationAge16YearsAndOver2014To2018,
        totalAccomodationAndFoodServicesSales2012InThousands,
        totalHealthCareAndSocialAssistanceReceiptsAndRevenue2012InThousands,
        totalManufacturersShipments2012InThousands,
        totalMerchantWholesalerSales2012InThousands,
        totalRetailSales2012InThousands,
        totalRetailSalesPerCapita2012,
        meanTravelTimeToWorkInMinutesWorkersAge16AndOver2014To2018,
        medianHouseholdIncomeIn2018Dollars2014To2018,
        perCapitaIncomeInPast12MonthsIn2018Dollars2014To2018,
        personsInPoverty,
        totalEmployerEstablishments2017,
        totalEmployment2017,
        totalAnnualPayroll2017InThousands,
        totalEmploymentPercentChange2016To2017,
        totalNonEmployerEstablishments2018,
        allFirms2012,
        menOwnedFirms2012,
        womenOwnedFirms2012,
        minorityOwnedFirms2012,
        nonMinorityOwnedFirms2012,
        veteranOwnedFirms2012,
        nonVeteranOwnedFirms2012,
        populationPerSquareMile2010,
        landAreaInSquareMiles2010,
        fipsCode,

    })
        .then(Location => response.json(Location))
        .catch(err => response.status(400).json(err))
};

// Update a Location: UPDATE
module.exports.updateLocation = (request, response) => {
    Location.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedLocation => response.json(updatedLocation))
        .catch(error => response.status(400).json(error))
}

// Delete a Location: DELETE
module.exports.deleteLocation = (request, response) => {
    Location.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(error => response.json(error))
}
