const express = require('express');
const restaurantModel = require('./Restaurant');
const app = express();


app.get('/restaurants', async (req , res) => {
    const restaurants = await restaurantModelel.find({});

    try {
        console.log(restaurants[0])
        res.status(200).send(restaurants);
    } catch (err){
        res.status(500).send(err);
    }
});

//http://localhost:3000/restaurants/cuisine/Japanese
app.get('/restaurants', async (req , res) => {
    const restaurants = await restaurantModel.find({});

    try {
        console.log(restaurants[0])
        res.status(200).send(restaurants);
    } catch (err){
        res.status(500).send(err);
    }
});



module.exports = app;

restaurantModel.create([
    {name: 'panda', cuisines:['japanese', 'italian'], city: 'sauga'}
]);




