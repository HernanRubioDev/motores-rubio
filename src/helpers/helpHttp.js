const helpHttp = ()=>{

  const customFetch = async (endpoint, options)=>{

    const defaultHeaders = {
      "Content-type" : "Application/json",
    }


    options.method = options.method || "GET";
    options.headers = options.headers ? {...defaultHeaders, ...options.headers} : defaultHeaders;
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;


    return await fetch(endpoint, options)
    .then((res)=>{
      if(res.ok){
        return res.json();
      }
      else{
        throw new Error({
          err: true,
          status: res.status || "00",
          statusText: res.statusText || "Error...",
        })}
      })
      .catch(err =>{return err})
  }

  const get = async (url, options={})=>{
    return await customFetch(url, options)
  }

  const post = async (url, options={})=>{
    options.method = "POST"
    return await customFetch(url, options);

  }

  const put = async (url, options={})=>{
    options.method = "PUT"
    return await customFetch(url, options);
  }

  const patch = async (url, options={})=>{
    options.method = "PATCH"
    return await customFetch(url, options);
  }

  const del = async (url, options={})=>{
    options.method = "DELETE"
    return await customFetch(url, options);
  }

  return {
    get,
    post,
    put,
    patch,
    del,
  }
}
export default helpHttp;