const { setTriphasic, updateTriphasic, deleteTriphasic, getTriphasic } = require("../models/triphasicModel");
const { getUserByUsername } = require("../models/userModel");

const searchTriphasic= async(req, res)=>{
	const {username} = req.params
	const monophasic = req.query
	try {
		const user = await getUserByUsername(username);
		const id_user = user.rows[0].id_user
		const response = await getTriphasic(monophasic, id_user);
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

const registerTriphasic = async(req, res)=>{
	const triphasic = req.body;
	const {username} = req.params;
	
	try {
		const user = await getUserByUsername(username);
		const id_user = user.rows[0].id_user
		const response = await setTriphasic(triphasic, id_user);
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

const editTriphasic = async (req, res)=>{
	const triphasic = req.body

	try {
		const response = await updateTriphasic(triphasic);

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

const removeTriphasic = async (req, res)=>{
	const {id_triphasic} = req.body

	try {
		const response = await deleteTriphasic(id_triphasic);

		switch (true) {
			case response.rowCount !==0:
				res.json({status:200, title:"Eliminado", body:"El motor fue borrado con éxito.", success:true});
				break;
		
			default:
				res.json({status: 500, title:"Error", body:"Inténtelo mas tarde.", success:false});
				break;
		}
	} catch (error) {
		res.json({status: 500, title:"Error", body:"Inténtelo mas tarde.", success:false});
	}
}

module.exports={searchTriphasic, registerTriphasic, editTriphasic, removeTriphasic}