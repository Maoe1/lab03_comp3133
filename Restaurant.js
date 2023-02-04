const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  restaurant_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    building: {
      type: String,
    },
    street: {
      type: String,
    
    },
    zipcode: {
      type: String,
    },
  },
});


const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant;