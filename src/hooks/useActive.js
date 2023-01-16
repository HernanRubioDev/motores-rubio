
const useActive = ()=>{
 
  const changeActive = (e, activeBtn, setActiveBtn)=>{
    let btn = document.getElementById(activeBtn);
    btn.classList.remove('active');
    btn.classList.remove('pressed-btn');
    e.target.classList.add('active');
    e.target.classList.add('pressed-btn');
    setActiveBtn(e.target.id);
  }
  return {changeActive}
}

export default useActive;