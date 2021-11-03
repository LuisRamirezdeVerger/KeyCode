const container = document.getElementById("container");
document.addEventListener("keypress",(e)=>{
  
    let key = e.key;
    let location = e.location;
    let which = e.which;
    let code = e.code;
    document.getElementById("eventKey").innerHTML = key;
    document.getElementById("keycode").innerHTML = which;
    document.getElementById("eventLocation").innerHTML=location;
    document.getElementById("eventWhich").innerHTML= which;
    document.getElementById("eventCode").innerHTML=code;
  
});


// document.addEventListener("keypress", (e) => {

//   let key = e.key;
//   let location = e.location;
//   let which = e.which;
//   let code = e.code;
//   document.getElementById("eventKey").innerHTML = key;
//   document.getElementById("keycode").innerHTML = which;
//   document.getElementById("eventLocation").innerHTML = location;
//   document.getElementById("eventWhich").innerHTML = which;
//   document.getElementById("eventCode").innerHTML = code;

// });