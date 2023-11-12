const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');
const { setUser, getUserByUsername, setAuth, deleteAuth } = require("../models/userModel");

const registerUser = async(req, res)=>{
const user = req.body
  user.password = await bcrypt.hash(user.password, 12)
  try {
    const response = await setUser(user)
    switch (true) {
      case response.rowCount !== 0:
        res.json({status:201, title:"¡Bienvendio!", body:"Su cuenta ha sido creada con éxito.", success:true});
        break;
    
      default:
        res.json({status: 500, title:"Ups...", body:"Parece que ha ocurrido un error...inténtelo mas tarde", success:false});
        break;
    }
  } catch (error) {
    res.json({status:500, title:"Ups...", body:"Parece que ha ocurrido un error...inténtelo mas tarde", success:false})
  }
}

const loginUser = async(req, res)=>{
  const {username, password} = req.body;
  let auth = null;
  try {
    const response = await getUserByUsername(username);
    switch (true) {
      case response.rowCount === 0:
        res.json({status:401, validations:{password:"El usuario o la contraseña son incorrectos.", username:" "}});
        break;

      case response.rowCount !== 0:
        const hash = response.rows[0].password
        auth = await bcrypt.compare(password, hash) 
        if(auth){
          const name = response.rows[0].name;
          const surname = response.rows[0].surname;
          const token = await authUser(username)
    
          token !== null ?
          res.json({status:200,auth_token:token, username:username, name:name, surname:surname}) 
          : 
          res.json({status:500, title:"Ups...", body:"Parece que ha ocurrido un error...inténtelo mas tarde", success:false})
        }
        else {
        res.json({status:403, validations:{password:"El usuario o la contraseña son incorrectos.", username:" "}})}
        break

      default:
        res.json({status:500, title:"Ups...", body:"Parece que ha ocurrido un error...inténtelo mas tarde", success:false});
        break;
    }
  } catch (error) {
    res.json({status:500, title:"Ups...", body:"Parece que ha ocurrido un error...inténtelo mas tarde", success:false});
  }
}

const logoutUser = async(req, res)=>{
  const {username, auth_token} = req.body
  try {
    const response = await deleteAuth(username, auth_token);
    switch (true) {
      case response.rowCount!==0:
        res.json({status:200})
        break;
    
      default:
        res.json({status: 500});
        break;
    }
  } catch (error) {
    res.json({status: 500});
  }
}

const authUser = async (username)=>{
  const token = uuidv4();
  try {
    const response = await setAuth(username, token);
    if(response.rowCount !== 0){
      return token;
    }
    else return null;
  } catch (error) {
    return null;
  }
}

module.exports = {registerUser, loginUser, logoutUser}