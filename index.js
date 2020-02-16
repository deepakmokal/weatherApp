const express = require('express');
const dataStore = require('nedb');
const app  = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.json());
app.listen(port, ()=>{console.log(`Application has been started on ${port}`)});

const database = new dataStore('database.db');


database.loadDatabase();

app.post('/weather', (request, response)=>{
   
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);

});