const express = require('express');
const restaurantModel = require('./Restaurant');
const app = express();

http://localhost:3000/restaurants
app.get('/restaurants', async (req , res) => {
   
 
    if(req.query.sortBy != null){
        var restaurants = await restaurantModel.find({}).sort({"restaurant_id" : req.query.sortBy}).select("restaurant_id name cuisine city");
      }
      else{
        var restaurants = await restaurantModel.find({});
      }
  

    try {
        res.status(200).send(restaurants);
    } catch (err){
        res.status(500).send(err);
    }
});

//http://localhost:3000/restaurants/Japanese
app.get('/restaurants/cuisine/:name', async (req , res) => {

    const name = req.params.name;
    const restaurants = await restaurantModel.find({cuisine: name});

    try {
        res.status(200).send(restaurants);
    } catch (err){
        res.status(500).send(err);
    }
});

//http://localhost:3000/restaurants/Delicatessen
app.get('/restaurants/:name', async (req , res) => {

  const cuisine = req.params.name;
  const restaurants = await restaurantModel.find({cuisine: cuisine}).where({city :{ $ne: 'Brooklyn'}}).sort({name : 'ASC'});

  try {
      res.status(200).send(restaurants);
  } catch (err){
      res.status(500).send(err);
  }
});







module.exports = app;



   const data =  [{
      address: {
        building: "1008",
        street: "Morris Park Ave",
        zipcode: "10462"
     },
     city: "Bronx",
     cuisine: "Bakery",
     name: "Morris Park Bake Shop",
     restaurant_id: "30075445"
    },
    {
      address: {
      street: "Thai Son Street",
      zipcode: null
     },
     city: "Manhattan",
     cuisine: "Vietnamese",
     name: "Pho Me Long Time",
     restaurant_id: "30075455"
    },
    {
      address: {
        building: "253",
        street: "East 167 Street",
        zipcode: null
     },
     city: "Bronx",
     cuisine: "Chicken",
     name: "Mom's Fried Chicken",
     restaurant_id: "40382900"
    },
    {
      address: {
        building: "120",
        street: "East 56 Street",
        zipcode: "19800"
     },
     city: "Mahattan",
     cuisine: "Italian",
     name: "Montebello Restaurant",
     restaurant_id: "40397082"
    },
    {
      address: {
        building: "195",
        street: "Soprano Street",
        zipcode: "17500"
     },
     city: "Staten Island",
     cuisine: "Hamburgers",
     name: "Joeys Burgers",
     restaurant_id: "40397555"
    },
    {
      address: {
        building: "200",
        street: "Queens Boulevard",
        zipcode: "19700"
     },
     city: "Queens",
     cuisine: "American",
     name: "Brunos on the Boulevard",
     restaurant_id: "40397678"
    },
    {
      address: {
        building: "555",
        street: "Sushi Street",
        zipcode: "17700"
     },
     city: "Brooklyn",
     cuisine: "Japanese",
     name: "Iron Chef House",
     restaurant_id: "40397699"
    },
    {
      address: {
        building: "555",
        street: "Fontana Street",
        zipcode: null
     },
     city: "Brooklyn",
     cuisine: "Japanese",
     name: "Wasabi Sushi",
     restaurant_id: "40398000"
    },
    {
      address: {
        building: "900",
        street: "Goodfellas Street",
        zipcode: "17788"
     },
     city: "Brooklyn",
     cuisine: "Delicatessen",
     name: "Sal's Deli",
     restaurant_id: "40898000"
    },
    {
      address: {
        building: "909",
        street: "44 Gangster Way",
        zipcode: "17988"
     },
     city: "Queens",
     cuisine: "Delicatessen",
     name: "Big Tony's Sandwich Buffet",
     restaurant_id: "40898554"
    },
    {
      aaddress: {
        building: "1201",
        street: "121 Canolli Way",
        zipcode: "17989"
     },
     city: "Queens",
     cuisine: "Delicatessen",
     name: "The Godfather Panini Express",
     restaurant_id: "40898554"
    }]
    

    restaurantModel.findOne({restaurant_id: data[0].restaurant_id}, (err, res) => {
      if (!res) {
        restaurantModel.create(data, (error) => {
          if (error) {
            console.error(error);
          } else {
            console.log("Data was inserted successfully");
          }
        });
      } else {
        console.log("Data already exists");
      }
    });
    

    




