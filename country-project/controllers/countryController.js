const CountryDetail = require('../models/countryModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const express = require("express");
// countryData = JSON.parse(countryDetails);


exports.getCountries = catchAsync(async(req, res, next)=>{
    
    const country = await CountryDetail.find({});

    res.status(200).json({
        status: 'success',
        result : country.length,
        data: {
            data: country
        }
    })
     
});


exports.createCountry = catchAsync(async(req, res, next)=>{
    
     const country = await CountryDetail.create(req.body); 
    if(!country){
        return new AppError('Could not able to find document of that id', 404)
    }

    res.status(201).json({
        status: 'success',
        data: {
            data: country
        }
    })
})

exports.geCountry = catchAsync(async(req, res, next)=>{
    let query = CountryDetail.findById(req.params.id);
    //    console.log(popOptions);
      
       const country = await query;
    
        if(!country){
            return new AppError('Could not able to find doc of that id', 404)
        }
    res.status(200).json({
        status: 'success',
        data: {
            data: country,
        }

    });
});