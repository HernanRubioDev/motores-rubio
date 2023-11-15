const motorValidation = (motor)=>{
  const{brand, owner, rpm, hp, large} = motor
  const errors={}

  switch (true) {
    case !brand:
        errors.message = "El campo Marca es obligatorio."
      break;
      
    case !owner:
        errors.message = "El campo Dueño es obligatorio."
      break;

    case !rpm:
        errors.message = "El campo Rpm es obligatorio."
      break;

    case !hp:
        errors.message = "El campo Hp es obligatorio."
      break;

    case !large:
        errors.message = "El campo Largo es obligatorio."
      break;

    default:
      delete errors.message
      break;
  }

  return errors;
}

module.exports = {motorValidation}