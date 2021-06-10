'use strict'
const data = require('./../model/data.model')

//getdata
exports.getData = (req,res)=>{
	data.getData((err,data)=>{
		console.log('controller');
		if (err) 
			res.send(err)
			// console.log('res', data);
			res.send(data)
		
	})
}

//insert
exports.create = (req,res)=>{
	const newData = new data(req.body)

	if (req.body.constructor == Object && Object.keys(req.body).length == 0) {
		res.status(400).send({
			error: true,
			message: 'Pastikan Data Anda'
		})
	} 
	else {
		data.create(newData,(err,data)=>{
			if(err)
			res.send(err)
			res.json({
				error: false,
				message: "Data Ditambah",
				data: data
			})
		})
	}
}
//asdsad
//get data by ID
exports.findDataId = (req,res)=>{
	const {id} = req.params
	data.getDataId(id,(err,data)=>{
		if (err) {
			res.send(err)
		}
		res.status(201)
		res.json(data)
	})
}

// update
exports.update = (req,res)=>{
	if (req.body.constructor == Object && Object.keys(req.body).length == 0) {
		res.status(400).send({
			error: true,
			message: 'Pastikan Field ada'
		})
	}
	else{
		data.updateData(req.params.id, new data(req.body),(err,data)=>{
			if (err)
			{
				return res.status(500).json({
					error:data
				})
			}

			res.json({
				status: 'success',
				message: 'Data Berhasil Diubah'
			})
		})
	}
}

//update pass 
exports.updatePass =(req,res)=>{
	if (req.body.constructor == Object && Object.keys(req.body).length == 0) {
		res.send({
			status: 'erorr',
			message: 'Pastikan Field ada'
		})
	} 
	else {
		data.updatePass(req.body,(err,data)=>{
			if (err) {
				return res.status(404).send({
					error: data
				})
			} 
			else {
				res.status(200).send(data)
			}
		})
	// 	const {id} = req.params
	// 	data.updatePass(id,new data(req.body),(err,data)=>{
	// 		if (err) {
	// 			res.send(err)
	// 		}
	// 		res.status(200)
	// 		res.json({
	// 			status: "success",
	// 			message: 'Password terubah'
	// 		})
	// })
	// }
}
}

//delete
exports.delete =(req,res)=>{
	data.deleteData(req.params.id,(err,data)=>{
		if(err){
			res.send(err)
		}

		res.json({
			status: 'success',
			message: 'Data berhasil Dihapus'
		})

	})
}
