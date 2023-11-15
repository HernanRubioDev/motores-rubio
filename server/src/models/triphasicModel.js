const {pool} = require("../../db");

const getTriphasic = async(triphasic, id_user)=>{
	const {brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large} = triphasic

	const query = `SELECT * FROM triphasics WHERE brand LIKE '${brand}%' AND rpm LIKE '${rpm}%' AND minor_dim LIKE '${minor_dim}%' AND model LIKE '${model}%' AND hp LIKE '${hp}%' AND major_dim LIKE '${major_dim}%' AND owner LIKE '${owner}%' AND slots LIKE '${slots}%' AND large LIKE '${large}%' AND id_user=${parseInt(id_user)}`;
	try {
		const res = await pool.query(query)
		return res
	} catch (error) {
		return null
	}
}

const setTriphasic = async(triphasic, id_user)=>{
  const {brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large, steps, laps, wire, voltage, connection, winding_type, observations, motor_type} = triphasic
  const query = "INSERT INTO triphasics  (brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large, steps, laps, wire, voltage, connection, winding_type, observations, motor_type, id_user) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)"
	try {
		const res = await pool.query(query,[brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large, steps, laps, wire, voltage, connection, winding_type, observations, motor_type, id_user]);
		return res
	} catch (error) {
		return null
	}
}

const updateTriphasic = async(triphasic)=>{
	const {brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large, steps, laps, wire, voltage, connection, winding_type, observations, id_triphasic} = triphasic
	try {
		const query = "UPDATE triphasics SET brand=$1, rpm=$2, minor_dim=$3, model=$4, hp=$5, major_dim=$6, owner=$7, slots=$8, large=$9, steps=$10, laps=$11, wire=$12, voltage=$13, connection=$14, winding_type=$15, observations=$16 WHERE id_triphasic=$17"
		const res = await pool.query(query,[brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large, steps, laps, wire, voltage, connection, winding_type, observations, id_triphasic]);
		return res
	} catch (error) {
		return null
	}
}

const deleteTriphasic = async(id_triphasic)=>{
    const query = "DELETE FROM triphasics WHERE id_triphasic = $1";
    try {
        const res = await pool.query(query,[id_triphasic]);
				return res
    } catch (error) {
        return null;
    }
}

module.exports={getTriphasic, setTriphasic, updateTriphasic, deleteTriphasic}