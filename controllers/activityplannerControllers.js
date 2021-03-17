const activityplannerDAO = require('../models/activityplannerModel'); 
const db = new activityplannerDAO(); 



exports.landing_page = function(req, res) { 
    //res.send('Hello! Welcome to my application.'); 
    db.init();
    console.log('running db init, see console.');

    res.render('entries', {'title': 'Activity Planner'});
   }

exports.entries_list =  function(req, res) { 
    res.send('<h1>Not yet implemented: show a list of activity planner entries.</h1>');
    db.getAllEntries().then((entries)=> {
    console.log('activityplanner_entries uses all messages');
    console.log(entries);
 });
 //console.log('running getAllEntries, see console')
}

exports.gaels_entries = function(req, res) { 
    res.send('<h1>Processing Gael\'s Entries, see terminal</h1>'); 
    db.getGaelsEntries(); 
   }


exports.fitness_page = function(req, res){
    res.redirect('/fitness.html')
}

exports.new_entry = function(req, res) { 
    res.send('<h1>Not yet implemented: show a new entry page.</h1>');
}


