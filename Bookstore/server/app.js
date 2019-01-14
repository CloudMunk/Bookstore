const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Alow Cross-Origin-Requests    
app.use(cors());


//Connect to the Mlab Database
mongoose.connect('mongodb://Cloud:test123@ds149138.mlab.com:49138/bookstore');
mongoose.connection.once('open', ()=>{
    console.log('connected to database')
})


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});