const axios = require("axios")
const csvtojson = require("csvtojson")

csvtojson()
    .fromFile("wa_census_data.csv")
    .then(csvData => {
        let data = csvData
        for (const entry of data){
            // console.log(entry)
            // console.log(entry.Location)
            // console.log(entry['Population estimates, July 1, 2019,  (V2019)'])
            axios.post("http://localhost:8000/api/location", {
                location: entry.Location,
                populationEstimatesJuly12019: entry['Population estimates, July 1, 2019,  (V2019)'],
                populationEstimatesBaseApril12010: entry['Population estimates base, April 1, 2010,  (V2019)'],
                populationPercentChangeApril12010toJuly12019: entry['Population, percent change - April 1, 2010 (estimates base) to July 1, 2019,  (V2019)'],
                populationCensusApril12010: entry['Population, Census, April 1, 2010'],
                personsUnder5Years: entry['Persons under 5 years, percent'],
                personsUnder18Years: entry['Persons under 18 years, percent'],
                persons65YearsAndOver: entry['Persons 65 years and over, percent'],
                femalePersons: entry['Female persons, percent'],
                whiteAlone: entry['White alone, percent'],
                blackOrAfricanAmericanAlone: entry['Black or African American alone, percent'],
                americanIndianAndAlaskaNativeAlone: entry['American Indian and Alaska Native alone, percent'],
                asianAlone: entry['Asian alone, percent'],
                nativeHawaiianAndOtherPacificIslanderAlone: entry['Native Hawaiian and Other Pacific Islander alone, percent'],
                twoOrMoreRaces: entry['Two or More Races, percent'],
                hispanicOrLatino: entry['Hispanic or Latino, percent'],
                whiteAloneNotHispanicOrLatino: entry['White alone, not Hispanic or Latino, percent'],
                veterans2014To2018: entry['Veterans, 2014-2018'],
                foreignBornPersons2014To2018: entry['Foreign born persons, percent, 2014-2018'],
                housingUnitsJuly12019: entry['Housing units,  July 1, 2019,  (V2019)'],
                ownerOccupiedHousingUnitRate2014To2018: entry['Owner-occupied housing unit rate, 2014-2018'],
                medianValueOfOwnerOccupiedHousingUnits2014To2018: entry['Median value of owner-occupied housing units, 2014-2018'],
                medianSelectedMonthlyOwnerCostsWithAMortgage2014to2018: entry['Median selected monthly owner costs -with a mortgage, 2014-2018'],
                medianSelectedMonthlyOwnerCostsWithoutAMortgage2014to2018: entry['Median selected monthly owner costs -without a mortgage, 2014-2018'],
                medianGrossRent2014To2018: entry['Median gross rent, 2014-2018'],
                buildingPermits2019: entry['Building permits, 2019'],
                households2014To2018: entry['Households, 2014-2018'],
                personsPerHousehold2014To2018: entry['Persons per household, 2014-2018'],
                livingInTheSameHouse1YearAgoPercentOfPersonsAge1AndOver: entry['Living in same house 1 year ago, percent of persons age 1 year+, 2014-2018'],
                languageOtherThanEnglishSpokenAtHomePercentOfPersonsAge5AndOver2014To2018: entry['Language other than English spoken at home, percent of persons age 5 years+, 2014-2018'],
                householdsWithAComputer2014To2018: entry['Households with a computer, percent, 2014-2018'],
                householdsWithABroadbandInternetSubscription: entry['Households with a broadband Internet subscription, percent, 2014-2018'],
                highSchoolGraduateOrHigherPercentOfPersonsAge25AndOver2014To2018: entry['High school graduate or higher, percent of persons age 25 years+, 2014-2018'],
                bachelorsDegreeOrHigherPercentOfPersonsAge25YearsAndOver2014To2018: entry["Bachelor's degree or higher, percent of persons age 25 years+, 2014-2018"],
                withADisabilityUnderAge65Years2014To2018: entry['With a disability, under age 65 years, percent, 2014-2018'],
                personsWithoutHealthInsuranceUnder65Years: entry['Persons  without health insurance, under age 65 years, percent'],
                inCivilianLaborForceTotalPercentOfPopulationAge16YearsAndOver2014To2018: entry['In civilian labor force, total, percent of population age 16 years+, 2014-2018'],
                inCivilianLaborForceFemalePercentOfPopulationAge16YearsAndOver2014To2018: entry['In civilian labor force, female, percent of population age 16 years+, 2014-2018'],
                totalAccomodationAndFoodServicesSales2012InThousands: entry['Total accommodation and food services sales, 2012 ($1,000)'],
                totalHealthCareAndSocialAssistanceReceiptsAndRevenue2012InThousands: entry['Total health care and social assistance receipts/revenue, 2012 ($1,000)'],
                totalManufacturersShipments2012InThousands: entry['Total manufacturers shipments, 2012 ($1,000)'],
                totalMerchantWholesalerSales2012InThousands: entry['Total merchant wholesaler sales, 2012 ($1,000)'],
                totalRetailSales2012InThousands: entry['Total retail sales, 2012 ($1,000)'],
                totalRetailSalesPerCapita2012: entry['Total retail sales per capita, 2012'],
                meanTravelTimeToWorkInMinutesWorkersAge16AndOver2014To2018: entry['Mean travel time to work (minutes), workers age 16 years+, 2014-2018'],
                medianHouseholdIncomeIn2018Dollars2014To2018: entry['Median household income (in 2018 dollars), 2014-2018'],
                perCapitaIncomeInPast12MonthsIn2018Dollars2014To2018: entry['Per capita income in past 12 months (in 2018 dollars), 2014-2018'],
                personsInPoverty: entry['Persons in poverty, percent'],
                totalEmployerEstablishments2017: entry['Total employer establishments, 2017'],
                totalEmployment2017: entry['Total employment, 2017'],
                totalAnnualPayroll2017InThousands: entry['Total annual payroll, 2017 ($1,000)'],
                totalEmploymentPercentChange2016To2017: entry['Total employment, percent change, 2016-2017'],
                totalNonEmployerEstablishments2018: entry['Total nonemployer establishments, 2018'],
                allFirms2012: entry['All firms, 2012'],
                menOwnedFirms2012: entry['Men-owned firms, 2012'],
                womenOwnedFirms2012: entry['Women-owned firms, 2012'],
                minorityOwnedFirms2012: entry['Minority-owned firms, 2012'],
                nonMinorityOwnedFirms2012: entry['Nonminority-owned firms, 2012'],
                veteranOwnedFirms2012: entry['Veteran-owned firms, 2012'],
                nonVeteranOwnedFirms2012: entry['Nonveteran-owned firms, 2012'],
                populationPerSquareMile2010: entry['Population per square mile, 2010'],
                landAreaInSquareMiles2010: entry['Land area in square miles, 2010'],
                fipsCode: entry['FIPS Code'],
            })
                .then()
                .catch(err => console.log("There was an error: ", err))
    }
})