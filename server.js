const express = require('express')
const bodyParser = require('body-parser')
const dataRoutes = require('./routes/data.routes')

// create express app
const app = express()

const port = process.env.PORT || 8000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))

//parse requests of content-type - application/json
app.use(bodyParser.json())

app.get('/',(req,res)=>{
	res.send("HELLO")
})

app.use('/api/v1',dataRoutes)

app.listen(port,()=>{
	console.log(`Server Bejalan pada ${port}`);
})