'use strict'
const mysql = require('mysql')
//sdsasd
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "golang"
})

db.connect(function(err){
    if (err) throw err;
    console.log("Database Connected");
})

module.exports = db