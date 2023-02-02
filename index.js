const express = require('express');
const mongoose = require('mongoose');
const ResturantRouter = require('./ResturantRoutes.js');

const app = express();
app.use(express.json());


mongoose
.connect(
    'mongodb+srv://maoe1:google123@cluster0.mtvhcjr.mongodb.net/lab03?retryWrites=true&w=majority',
    {
        useNewUrlParser : true,
        useUnifiedTopology: true
    }
)
.then((success) =>{
    console.log("Success MongoDdb connection");
})
.catch((err) =>
{
    console.log('Error Mongodb connection');
});

app.use(ResturantRouter);

app.listen(8081, ()=> {
    console.log('Server is running');
});
