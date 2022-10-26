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
    socios:'80mil',
    titulos:'37',
    img: './img/rac.png'
},
{
    nombre:'boca',
    ciudad:'La boca',
    socios:'214mil',
    titulos:'72',
    img: './img/boc.png'
},
{
    nombre:'river',
    ciudad:'Nuñez',
    socios:'170mil',
    titulos:'69',
    img: './img/riv.jpg'
},
{
    nombre:'independiente',
    ciudad:'Avellaneda',
    socios:'100mil',
    titulos:'45',
    img: './img/ind.png'
},
{
    nombre:'Newells',
    ciudad:'Rosario',
    socios:' 67.993mil',
    titulos:'9',
    img: './img/nob.png'
},
{
    nombre:'San Lorenzo',
    ciudad:'No tiene barrio',
    socios:'56.911mil',
    titulos:'22',
    img: './img/san.png'
},
{
    nombre:'Rosario Central',
    ciudad:'Rosario',
    socios:'56.775mil',
    titulos:'11',
    img: './img/rc.png'
},
{
    nombre:'Estudiantes',
    ciudad:'La plata',
    socios:'39.402mil',
    titulos:'14',
    img: './img/est.png'
},
{
    nombre:'Velez',
    ciudad:'Liniers',
    socios:'33.225mil',
    titulos:'16',
    img: './img/vel.png'
}]

const mailLogin = document.getElementById('emailLogin'),
    passLogin = document.getElementById('passwordLogin'),
    recordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    contTarjetas = document.getElementById('tarjetas'),
    toggles = document.querySelectorAll('.toggles');

      function validarUsuario(userDB,user,pass){
        let encontrado = userDB.find(userDB=>userDB.mail == user);
        
        if(typeof encontrado === 'undedined'){
            return false;
        }else{
            if(encontrado.pass!= pass){
            return false;
            }else{
                return encontrado;
            }

        }
    }
    
function guardarDatos(usuarioDB, storage) {
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }

    storage.setItem('usuario', JSON.stringify(usuario));
}


function saludar(usuario) {
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}


function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}


function recuperarUsuario(storage) {
    let usuarioEnStorage = JSON.parse(storage.getItem('usuario'));
    return usuarioEnStorage;
}


function estaLogueado(usuario) {

    if (usuario) {
        saludar(usuario);
        mostrarInfoEquipos(equipos);
        presentarInfo(toggles, 'd-none');
    }
}


function presentarInfo(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
}


function mostrarInfoEquipos(array) {
    contTarjetas.innerHTML = '';
    array.forEach(element => {
        let html = `<div class="card cardEquipos" id="tarjeta${element.nombre}">
                <h3 class="card-header" id="nombreEquipos"> ${element.nombre}</h3>
                <img src="${element.img}" alt="${element.nombre}" class="card-img-bottom" id="fotoMascota">
                <div class="card-body">
                    <p class="card-text" id="nombreEquipos">nombre: ${element.nombre}</p>
                    <p class="card-text" id="ciudadEquipos">ciudad: ${element.ciudad}</p>
                    <p class="card-text" id="sociosEquipos">socios: ${element.socios}</p>
                    <p class="card-text" id="titulosEquipos">Titulos: ${element.titulos}</p>
                    
                  

                </div>
            </div>`;
        contTarjetas.innerHTML += html;
    });
}


btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    
        let data = validarUsuario(usuarios, mailLogin.value, passLogin.value);

        if (!data) {
            alert(`Usuario y/o contraseña erróneos`);
        } else {

           
            if (recordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }
            
            modal.hide();
            
            mostrarInfoEquipos(equipos);
            presentarInfo(toggles, 'd-none');
        }
 
});

btnLogout.addEventListener('click', () => {
    borrarDatos();
    presentarInfo(toggles, 'd-none');
});

window.onload = () => estaLogueado(recuperarUsuario(localStorage)); 

