var express = require('express');	
const mongodb = require('mongodb');
const cors = require('cors');


var MongoClient = require('mongodb').MongoClient;	
const uri = 'mongodb://localhost:27017/blog';
var appListen = express();	
appListen.use(cors());

let db = null;
let dbName = 'blog';
var collectionName = 'post';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });	





MongoClient.connect(uri, function(err, client) {
    if(err) { console.log(err) }
    db = client.db(dbName) 
})



/* Get All Story */
appListen.get('/story',function(request, response) {
	db.collection(collectionName).find({}).toArray(function(err, data) {
	    if(err) { 
	        console.log(err) 
	    }
	    response.send(JSON.stringify(data))
	})

    
})
/* End Story */


appListen.post('/insert_story', (request, response) => {
	let d = new Date().getTime();
   

    const data = request.body;
		db.collection(collectionName, function (error, collection, request) {
			collection.insertOne({"name": d}, function (error, result) {
				if (error) {
					response.end(JSON.stringify({'error': 'Error occured'}))
				}
				response.send(result);
			})
		})



});


appListen.listen('3400', () => {	
	console.log('Server is running at port 3400');	
})