'use strict'
const db = require('./../config/db.config');

//data a
var data = function(value){
	this.user = value.user,
	this.pass = value.pass,
	this.name = value.name,
	this.numPhone = value.numPhone,
	this.bornDate = value.bornDate,
	this.address = value.address,
	this.insertAt = new Date(),
	this.updateAt = new Date()
}

//insert
data.create = function(newEmp, result){
	db.query("INSERT INTO user SET ?",newEmp, function (err,res){
		if (err) {
			console.log("Error :",err);
			result(err, null)
		}
		else{
			console.log(res.insertId);
			result(null, res.insertId)
		}
	})
}

//get data
data.getData = (result)=>{
	db.query("SELECT * FROM user",(err,res)=>{
		if (err) {
			console.log("Error :",err);
			result(null,err)
		} 
		else {
			// console.log('data : ', res);
			result(null,res)
		}
	})
}

//get data by id 
data.getDataId = (id,result)=>{
	db.query("SELECT * FROM user WHERE id = ?",id,(err,res)=>{
		if (err) {
			console.log("Error : ",err);
			result(err, null)
		} 
		else {
			result(null,res)
		}
	})
}

//update data
data.updateData = (id,data,result)=>{
	const update = new Date();
	const value = [
		data.name,
		data.numPhone,
		data.bornDate,
		data.address,
		update,
		id
	]

	db.query("UPDATE user SET name =?, numPhone=?, bornDate=?, address=?, updateAt=? WHERE id=?",value,(err,res)=>{
		if (err) {
			console.log("Error : ",err);
			result(err,"Maaf terjadi kesalahan")
		} 
		else {
			if(!res.changedRows)
				return result(true,"data tidak ditemukukan")	
				
			return result(null,res)	
		}
	})
}

//update password
data.updatePass = (data,result)=>{
	db.query("SELECT user FROM user WHERE user =?",[data.user],(err,res)=>{
		if (err) {
			console.log("erorr : ",err);
			return result(err, "terjadi kesalahan")
		} 
		else {
			if(!res.changedRows)
			return result(true, "User Tidak Ditemukan")

			const value = ["arya","yoga"]
			console.log(value[0]);
			// return result(null, res)
		}
	})
}

// delete data
data.deleteData = (id,result)=>{
	db.query("DELETE FROM user WHERE id=?",[id],(err,res)=>{
		if (err) {
			console.log("Error : ",err);
			result(null,err)
		} else {
			result(null,res)
		}
	})
}


module.exports = data