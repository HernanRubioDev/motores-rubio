
export const dinamicEndpoint = (form, endpoint)=>{
  
  Object.entries(form).forEach(([key, value]) => {
    if (value !== '') {
      endpoint += `&${key}=${value}`;
    }
  });
  return endpoint;
}