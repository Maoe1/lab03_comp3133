const mongoose = require('mongoose');

const RestaurantSchema  = new mongoose.Schema({
    name: {
        type : String,
        required : [true, 'provide restaurant name'],
        lowercase : true
    },
    cuisines : [String],
    city: {
        type : String, 
        required : [true, 'provide city name'],
        lowercase : true
    }

})


const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant;