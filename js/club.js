
/* html club */
class Equipo {

    constructor(club, estadio, socios, presidente, entrenador, fundado, barra, id) {
        this.club = club;
        this.estadio = estadio;
        this.socios = parseInt(socios);
        this.presidente = presidente;
        this.entrenador = entrenador;
        this.fundado = parseInt(fundado);
        this.barra = barra;
        this.id = id;
    }
    asignarId(array) {
        this.id = array.length;
    }
    n_socios(socios) {
        this.socios = parseInt(n_socios);
    }
}

const Equipos = [
    new Equipo('racing', 'Juan Domingo Peron', 80000, 'V.Blaco', 'Fernando Gago', 1903, 'Los Pibes de Racing', 1),
    new Equipo('boca', 'Bombonera', 240000, 'Ameal', 'Hugo Ibarra', 1905, 'La 12', 2),
    new Equipo('river', 'Monumental', 16000, 'Jorge Brito','Gallardo', 1901, 'Los Borrachos del tabln', 3),
    new Equipo('independiente', 'Libertadores de america', 100000, 'Doman', ' Julio César Falcioni', 1904, 'Los Diablo Rojos', 4)
]
console.log(Equipos);


/* Se van a pedir nuevos datos */

let continuar = true;
while (continuar) {
    let ingreso = prompt('Ingresa tu equipo de futbol, si es que no esta: club, estadio, socios, presidente, entrenador, fundado, barra, pone que numero consideras de grande es tu equipo del 1 al 10 teniendo en cuenta que estan los primeros 4 grandes, separa los datos por una barra (/). ingresa X para finalizar ');
    if (ingreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    let datos = ingreso.split('/');
    console.log(datos)
    const equipo = new Equipo(datos[0], datos[1], datos[2], datos[3], datos[4], datos[5], datos[6], datos[7], datos[8]);

    Equipos.push(equipo);
    equipo.asignarId(Equipos);
    console.log(Equipos)


}

/* 
lobo/basurero/40000/pipo/basurero/1898/la 22
pincha/basurero/10000/andujar/estudiantes/1900/leales
*/

let criterio = prompt('Elegí tu equipo favorito: \n1 - Título (A a Z) \n2 - Título (Z a A)\n3 - Mejor a peor puntuado \n4 - Fecha de antiguedad(Más viejo a más nuevo) \n5 - Otro ');

function ordenar(criterio, array) {
    let array_ordenado = array.slice(0);
    switch (criterio) {
        case '1':
            let nombre_ascendente = array_ordenado.sort((a, b) => a.club.localeCompare(b.club));
            return nombre_ascendente;

        case '2':
            let nombre_descendente = array_ordenado.sort((a, b) => b.club.localeCompare(a.club));
            return nombre_descendente;

        case '3':
            return array_ordenado.sort((a, b) => b.socios - a.socios);

        case '4':
            return array_ordenado.sort((a, b) => a.fundado - b.fundado);

        case '5':
            return  array_ordenado;

        default:
            alert('No existe ese club');
            break;

    }
}

/*  ----------------------------------------------------------------------------------- */

function string_resultado(array){
    let info='';

array.forEach(elemento=>{
    info += 'club: ' + elemento.club + '\nestadio: ' + elemento.estadio + '\nNumero de socios: ' + elemento.socios + '\npresidente: ' + elemento.presidente + '\nentrenador: ' + elemento.entrenador +  ' \nfundado: ' +elemento.fundado +'\nbarra: ' + elemento.barra + '\n'+ '\n'
})

return info;

}

alert(string_resultado(ordenar(criterio,Equipos)));




let equipo_elegido = prompt('Escribí el nombre del equipo para saber su estadio y si queres saber tdos los estadios presiona enter');

const filtrado = Equipos.filter((equipo)=>equipo.club.toLowerCase().includes(equipo_elegido.toLowerCase()))

if (filtrado.length==0){
     alert('No tengo inforamción de ese club'); 
}else{
     const  imprimible = filtrado.map((equipo)=>equipo.estadio );
    alert('este es el estadio de tu club:\n- ' + imprimible.join('\n- '));
}
