// const fs = require('fs');
const mongoose = require('mongoose');

// const countryDetails = fs.readFileSync(`./data/data.json`, 'utf-8');
// // console.log(countryDetails);
const countrySchema = new mongoose.Schema({
         name: {
             type: String,
             required: [true, 'Country must have a name'],
             unique: true
         },
         continent:{
             type: String,
             required: [true, 'Country must have a continent!']
         },
         flag:{
             type: String,
             required: [true, 'A Country must have a flag']
         },
         rank:{
             type: Number,
             required: [true, 'A country must have a rank'],
         }
})

const CountryDetail = mongoose.model('CountryDetail', countrySchema);



module.exports = CountryDetail;