const express = require('express'); 
const app = express(); 
const path = require('path');
const public = path.join(__dirname, 'public'); 
const router = require('./routes/activityplannerRoutes'); 
const mustache = require('mustache-express');


app.use(express.static(public));
app.use('/', router); 

app.engine('mustache', mustache()); 
app.set('view engine', 'mustache');


app.use(function(req, res) { 
    res.status(404); 
    res.send('Oops! We didn\'t find what you are looking for.'); 
  }) 

  router.use(function(err, req, res, next) { 
    res.status(500); 
    res.type('text/plain'); 
    res.send('Internal Server Error.'); 
   }) 


   app.listen(3000, () => { 
    console.log('Server started on port 3000. Ctrl^c to quit.'); 
   }) 