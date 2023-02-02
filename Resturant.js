const mongoose = require('mongoose');

const ResturantSchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true, 'provide resturant name'],
        lowercase : true
    },
    cuisines : [String],
    city: {
        type : String, 
        required : [true, 'provide city name'],
        lowercase : true
    }

})