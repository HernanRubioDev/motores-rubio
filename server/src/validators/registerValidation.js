const {pool} = require("../../db");
const { getUserByUsername } = require("../models/userModel");

	const nameValidation =  (name)=>{
		const errors = {}
		const name_regExp = /[A-Z a-z]/g
		switch (true) {
			case !name:
				errors.name = "Este campo es obligatorio.";
				break;
			
			case !name_regExp.test(name):
				errors.name = "Este campo solo acepta letras.";
				break;

			case name.length > 15:
				errors.name = "Maximo de caracteres (15) excedidos."
				break;

			default:
				delete errors.name;
				break;
		}
		return errors
	}

	const surnameValidation = (surname)=>{
		const errors = {}
		const surname_regExp = /[A-Z a-z]/g
		switch (true) {
			case !surname:
				errors.surname = "Este campo es obligatorio";
				break;
			
			case !surname_regExp.test(surname):
				errors.surname = "Este campo solo acepta letras";
				break;

			case surname.length > 15:
				errors.surname = "Maximo de caracteres (15) excedidos."
				break;	

			default:
				delete errors.surname;
				break;
		}
		return errors
	}

	const usernameValidation = async (username) =>{
		const userRegEx = /^[a-zA-Z0-9 ._=]+$/g
		const errors = {}
		const res = await getUserByUsername(username);
		console.log(res)
		switch (true) {
			case !username:
				errors.username = "Este campo es obligatorio."
				break;
	
			case !userRegEx.test(username):
				errors.username = "Este campo solo acepta letras, núymeros, espacios y '. _ ='."
				break;
	
			case res.rowCount !== 0:
				errors.username = "Este nombre de usuario no esta disponible."
				break;
	
			default:
				delete errors.username
				break;
		}
		return errors;
	}

	const passwordValidation = (password)=>{
		const pass_regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,30}$/g

		const errors = {}

		switch (true) {
			case !password:
				errors.password = "Este campo es obligatorio."
				break;

			case password.length < 8 || password.length >30:
				errors.password = "La contraseña debe contener entre 8 y 30 caracteres."
				break;

			case !pass_regex.test(password):
				errors.password = "La contraseña debe contener al menos una letra mayúscula, una minúscula y un numero."
				break;
				
			default:
				delete errors.password
				break;
		}
		return errors;
	}

	const repeatPasswordValidation = (re_password, password)=>{
		const errors = {}
		switch (true) {
			case re_password !== password:
				errors.re_password = "Las contraseñas no coinciden."
				break;
			
			case !re_password:
				errors.re_password = "Este campo es obligatorio."
				break
	
			default:
				delete errors.re_password;
				break;
		}
		return errors;
	}

module.exports = {nameValidation, surnameValidation, usernameValidation, passwordValidation, repeatPasswordValidation}