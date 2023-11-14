const { getUserByUsername } = require("../models/userModel");
const { setWasher, updateWasher, deleteWasher, getWasher } = require("../models/washerModel");

const searchWasher= async(req, res)=>{
	const {username} = req.params
	const washer = req.query
	try {
		const user = await getUserByUsername(username);
		const id_user = user.rows[0].id_user
		const response = await getWasher(washer, id_user);
		switch (true) {
			case response.rowCount !== 0:
				res.json({status:200, motors: response.rows})
				break;
		
			case response.rowCount === 0:
				res.json({status:404, title:"Error", body:"No se han encontrado motores con esos datos.", success:false});
				break;

			default:
				res.json({status: 500, title:"Error", body:"Inténtelo mas tarde.", success:false});
				break;
		}
	} catch (error) {
		res.json({status: 500, title:"Error", body:"Inténtelo mas tarde.", success:false});
	}
}

const registerWasher = async(req, res)=>{
	const washer = req.body;
	const {username} = req.params
	try {
		const user = await getUserByUsername(username);
		const id_user = user.rows[0].id_user;
		const response = await setWasher(washer, id_user);
		switch (true) {
			case response.rowCount !==0:
				res.json({status:201, title:"Agregado", body:"El motor fue agregado con éxito.", success:true});
				break;
		
			default:
				res.json({status: 500, title:"Error", body:"Inténtelo mas tarde.", success:false});
				break;
		}
	} catch (error) {
		res.json({status: 500, title:"Error", body:"Inténtelo mas tarde.", success:false});
	}
}

const editWasher = async (req, res)=>{
	const washer = req.body

	try {
		const response = await updateWasher(washer);

		switch (true) {
			case response.rowCount !==0:
				res.json({status:200, title:"Editado", body:"El motor fue editado con éxito.", success:true});
				break;
		
			default:
				res.json({status: 500, title:"Error", body:"Inténtelo mas tarde.", success:false});
				break;
		}

	} catch (error) {
		res.json({status: 500, title:"Error", body:"Inténtelo mas tarde.", success:false});
	}
}

const removeWasher = async (req, res)=>{
	const {id_washer} = req.body
	const {username} = req.params
	try {
		const user = await getUserByUsername(username);
		const response = await deleteWasher(id_washer, user);

		switch (true) {
			case response.rowCount !==0:
				res.json({status:200, title:"Borrado", body:"El motor fue eliminado con éxito.", success:true});
				break;
		
			default:
				res.json({status: 500, title:"Error", body:"Inténtelo mas tarde.", success:false});
				break;
		}
	} catch (error) {
		res.json({status: 500, title:"Error", body:"Inténtelo mas tarde.", success:false});
	}
}

module.exports={searchWasher, registerWasher, editWasher, removeWasher}