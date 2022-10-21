const usuarios=[{
    nombre:'Julian',
    mail:'julideracing@gmail.com',
    pass:'racing2022'
},
{
    nombre:'alberto',
    mail:'albertoracing@gmail.com',
    pass:'racing2023' 
},
{
    nombre:'messi',
    mail:'messiracing@gmail.com',
    pass:'racing2024'
}]

const equipos =[
{
    nombre:'Racing',
    ciudad:'Avellaneda',
    socios:'80mil'
},
{
    nombre:'boca',
    ciudad:'La boca',
    socios:'214mil'
},
{
    nombre:'river',
    ciudad:'Nuñez',
    socios:'170mil'
},
{
    nombre:'independiente',
    ciudad:'Avellaneda',
    socios:'100mil'
},
{
    nombre:'gimnasia',
    ciudad:'La plata',
    socios:'30mil'
}]

const mailLogin = document.getElementById('emailLogin'),
      passLogin = document.getElementById('passwordLogin'),
      recordar  = document.getElementById('recordarme'),
      bttnLogin = document.getElementById('login'),
      modalEl   = document.getElementById('modalLogin')
      modal= new bootstrap.modal(modalEl),
      contTarjetas = document.getElementById('tarjetas'),
      toggles = document.querySelectorAll('toggles');

      function validarUsuario(userDB,user,pass){
        let encontrado = userDB.find(userDB=>userDB.mail == user);
      }