const {pool} = require("../../db");

const getMonophasic = async(monophasic, id_user)=>{
	const {brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large} = monophasic

	const query = `SELECT * FROM monophasics WHERE brand LIKE '%${brand}' AND rpm LIKE '%${rpm}' AND minor_dim LIKE '%${minor_dim}' AND model LIKE '%${model}' AND hp LIKE '%${hp}' AND major_dim LIKE '%${major_dim}' AND owner LIKE '%${owner}' AND slots LIKE '%${slots}' AND large LIKE '%${large}' AND id_user=${parseInt(id_user)}`;
	try {
		const res = await pool.query(query)
		return res
	} catch (error) {
		return null
	}
}

const setMonophasic = async(monophasic, id_user)=>{
	const {brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large, motor_start, uf, work_steps, work_laps, work_wire, start_steps, start_laps, start_wire, voltage, connection, winding_type, observations} = monophasic
  const query = "INSERT INTO  monophasics (brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large, motor_start, uf, work_steps, work_laps, work_wire, start_steps, start_laps, start_wire, voltage, connection, winding_type, observations, id_user) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)"
	try {
		const res = await pool.query(query,[brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large, motor_start, uf, work_steps, work_laps, work_wire, start_steps, start_laps, start_wire, voltage, connection, winding_type, observations, id_user]);
		return res
	} catch (error) {
		return null
	}
}

const updateMonophasic = async(monophasic)=>{
	const {brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large, motor_start, uf, work_steps, work_laps, work_wire, start_steps, start_laps, start_wire, voltage, connection, winding_type, observations, id_monophasic} = monophasic
	try {
		const query = "UPDATE monophasics SET brand=$1, rpm=$2, minor_dim=$3, model=$4, hp=$5, major_dim=$6, owner=$7, slots=$8, large=$9, motor_start=$10, uf=$11, work_steps=$12, work_laps=$13, work_wire=$14, start_steps=$15, start_laps=$16, start_wire=$17, voltage=$18, connection=$19, winding_type=$20, observations=$21 WHERE id_monophasic=$22"
		const res = await pool.query(query,[brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large, motor_start, uf, work_steps, work_laps, work_wire, start_steps, start_laps, start_wire, voltage, connection, winding_type, observations, id_monophasic]);
		return res
	} catch (error) {
		return null
	}
}

const deleteMonophasic = async(id_monophasic)=>{
    const query = "DELETE FROM monophasics WHERE id_monophasic = $1";
    try {
        const res = await pool.query(query,[id_monophasic]);
		return res
    } catch (error) {
        return null;
    }
}

module.exports={getMonophasic,setMonophasic, updateMonophasic, deleteMonophasic}