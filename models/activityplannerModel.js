const nedb = require('nedb');


class ActivityPlanner{
     constructor(dbFilePath){
         if (dbFilePath){
             this.db = new nedb({filename: dbFilePath, autoload:true});
             console.log('db connected to', dbFilePath);
         } else {
             this.db = new nedb();
             console.log('db connected in-memory');
         }
    }

     init() {
        this.db.insert({
           subject: 'Exercise Routine',
           contents: 'Go on a 5km run and do 50 sets of pushups',
           published: '2021-02-17',
           author: 'Gael'
        });
         console.log('db entry Gael inserted');    
    }

  
 getAllEntries() {
        return new Promise((resolve, reject)=> {
        this.db.find({}, function(err, entries) {

            if(err){
                reject(err);
                console.log('Promise rejected in getAllEntries');
        }   else {
                resolve(entries);
                console.log('Promise resolved in getAllEntries'); 
            }
        })
    })  
  }

  getGaelsEntries() { 
    return new Promise((resolve, reject) => { 
    this.db.find({ author: 'Gael' }, function(err, entries) { 

        if (err) { 
            reject(err); 
            console.log('getGaelsEntries promise rejected', err);
    } else { 
        resolve(entries); 
        console.log('getGaelsEntries promise resolved with', entries); 
    } 
  }) 
}) 
}



}

module.exports = ActivityPlanner; 