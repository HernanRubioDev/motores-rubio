const InfoToast = ({response})=>{
  return(
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="infoToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          {response && response.success === true ? 
          <i className="far fa-check-circle text-success me-2" />
          :
          <i className="far fa-times-circle text-danger me-2"></i>
          }
          {response && <strong className="me-auto">{response.title}</strong>}
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">
          {response && response.body}
        </div>
      </div>
    </div>
  );
}

export default InfoToast;