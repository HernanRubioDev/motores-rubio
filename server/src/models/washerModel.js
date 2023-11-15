const {pool} = require("../../db");

const getWasher = async(washer, id_user)=>{
	const {brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large} = washer
	const query = `SELECT * FROM washers WHERE brand LIKE '${brand}%' AND rpm LIKE '${rpm}%' AND minor_dim LIKE '${minor_dim}%' AND model LIKE '${model}%' AND hp LIKE '${hp}%' AND major_dim LIKE '${major_dim}%' AND owner LIKE '${owner}%' AND slots LIKE '${slots}%' AND large LIKE '${large}%' AND id_user=${parseInt(id_user)}`;
	try {
		const res = await pool.query(query)
		return res
	} catch (error) {
		return null
	}
}

const setWasher = async(washer, id_user)=>{
	const {brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large, spin_work_steps, spin_work_laps, spin_work_wire, spin_start_steps, spin_start_laps, spin_start_wire, first_wash_work_steps, first_wash_work_laps, first_wash_work_wire, second_wash_work_steps, second_wash_work_laps, second_wash_work_wire, wash_start_steps, wash_start_laps, wash_start_wire, capacity, voltage, connection, winding_type, observations, motor_type} = washer
	const query = "INSERT INTO washers (brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large, spin_work_steps, spin_work_laps, spin_work_wire, spin_start_steps, spin_start_laps, spin_start_wire, first_wash_work_steps, first_wash_work_laps, first_wash_work_wire, second_wash_work_steps, second_wash_work_laps, second_wash_work_wire, wash_start_steps, wash_start_laps, wash_start_wire, capacity, voltage, connection, winding_type, observations, motor_type, id_user) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31)"
	try {
		const res = await pool.query(query, [brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large, spin_work_steps, spin_work_laps, spin_work_wire, spin_start_steps, spin_start_laps, spin_start_wire, first_wash_work_steps, first_wash_work_laps, first_wash_work_wire, second_wash_work_steps, second_wash_work_laps, second_wash_work_wire, wash_start_steps, wash_start_laps, wash_start_wire, capacity, voltage, connection, winding_type, observations, motor_type, id_user])
		return res
	} catch (error) {
		return null
	}
}

const updateWasher = async(washer)=>{
	const {brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large, spin_work_steps, spin_work_laps, spin_work_wire, spin_start_steps, spin_start_laps, spin_start_wire, first_wash_work_steps, first_wash_work_laps, first_wash_work_wire, second_wash_work_steps, second_wash_work_laps, second_wash_work_wire, wash_start_steps, wash_start_laps, wash_start_wire, capacity, voltage, connection, winding_type, observations, id_washer} = washer
	try {
		const query = "UPDATE washers SET brand=$1, rpm=$2, minor_dim=$3, model=$4, hp=$5, major_dim=$6, owner=$7, slots=$8, large=$9, spin_work_steps=$10, spin_work_laps=$11, spin_work_wire=$12, spin_start_steps=$13, spin_start_laps=$14, spin_start_wire=$15, first_wash_work_steps=$16, first_wash_work_laps=$17, first_wash_work_wire=$18, second_wash_work_steps=$19, second_wash_work_laps=$20, second_wash_work_wire=$21, wash_start_steps=$22, wash_start_laps=$23, wash_start_wire=$24, capacity=$25, voltage=$26, connection=$27, winding_type=$28, observations=$29 WHERE id_washer=$30"
		const res = await pool.query(query,[brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large, spin_work_steps, spin_work_laps, spin_work_wire, spin_start_steps, spin_start_laps, spin_start_wire, first_wash_work_steps, first_wash_work_laps, first_wash_work_wire, second_wash_work_steps, second_wash_work_laps, second_wash_work_wire, wash_start_steps, wash_start_laps, wash_start_wire, capacity, voltage, connection, winding_type, observations, id_washer]);
		return res
	} catch (error) {
		return null
	}
}

const deleteWasher = async(id_washer)=>{
    const query = "DELETE FROM washers WHERE id_washer = $1";
    try {
        const res = await pool.query(query,[id_washer]);
				return res
    } catch (error) {
        return null;
    }
}

module.exports={getWasher, setWasher, updateWasher, deleteWasher}
