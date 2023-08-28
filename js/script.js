let btn_registrar

window.onload = ()=>{
  btn_registrar = document.getElementById("registrar");
  btn_registrar.addEventListener("click",registrar);
  
   btn_logear = document.getElementById("logear");
  btn_logear.addEventListener("click",logear);
  
}

function registrar(event){
  frm = document.getElementById("form1");
  let contraseña = document.getElementById("password");
  let conf_contraseña = document.getElementById("confirm_password");
  
    if(frm.checkValidity() && contraseña.value === conf_contraseña.value)
    {
      let nombre = document.getElementById("first_name");
      nombre.value = "";
      
      let apellido = document.getElementById("last_name");
      apellido.value = "";
      
      let email = document.getElementById("email");
      localStorage.setItem("email", email.value);
      localStorage.setItem("password", contraseña.value);
      
      contraseña.value = "";
      
      email.value = "";
      
      conf_contraseña.value = "";
      
      alert("Te has registrado correctamente"); 
    }
  else{
    alert("Las contraseñas no son iguales");
  }
  event.preventDefault(); 
}


function logear(event){
  frm = document.getElementById("form2");
    if(frm.checkValidity())
    {
      
      let email = document.getElementById("email2");
      
      let contraseña = document.getElementById("password2");
      
      let email_ls = localStorage.getItem("email");
      
  let contraseña_ls = localStorage.getItem("password");
      
      
      if(email.value === email_ls && contraseña.value === contraseña_ls){
         alert("Te has logeado correctamente"); 
        email.value = "";
        contraseña.value = "";
      }
      
  else{
    alert("Algunos datos no son correctos"); 
  }
  event.preventDefault(); 
}
}