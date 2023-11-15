const { setMonophasic, updateMonophasic, deleteMonophasic, getMonophasic } = require("../models/monophasicModel");
const { getUserByUsername } = require("../models/userModel");

const searchMonophasic= async(req, res)=>{
	const {username} = req.params
	const monophasic = req.query
	try {
		const user = await getUserByUsername(username);
		const id_user = user.rows[0].id_user
		const response = await getMonophasic(monophasic, id_user);
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

const registerMonophasic = async(req, res)=>{
	const monophasic = req.body;
	const {username} = req.params
	try {
		const user = await getUserByUsername(username);
		const id_user = user.rows[0].id_user;
		const response = await setMonophasic(monophasic, id_user);
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

const editMonophasic = async (req, res)=>{
	const monophasic = req.body
	try {
		const response = await updateMonophasic(monophasic);
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

const removeMonophasic = async (req, res)=>{
	const {id_motor} = req.params

	try {
		const response = await deleteMonophasic(id_motor);

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

module.exports={searchMonophasic, registerMonophasic, editMonophasic, removeMonophasic}