let intentos = 6;
let diccionario = ['HOGAR', 'ACTOR', 'ALBAS', 'ALTAR', 'BICHO', 'BUENO', 'CABRA', 'CAJAS'];
let random = Math.random()* diccionario.length;
random = Math.floor(random);
console.log(random);

let palabra = diccionario[random];

const API = "https://random-word-api.herokuapp.com/word?length=5&lang=es";
fetch(API).then((response) =>{
    response.json()
    .then((data) => {
        palabra = data[0].toUpperCase();
        console.log("Esto trae la API:", palabra);
    })
}).catch((e) => {
    console.log("Error");
});


function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

function intentar(){
    const INTENTO = leerIntento();

    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    
    if (INTENTO === palabra ) {
        for (let i in palabra){
            const SPAN = document.createElement('span');
            SPAN.className = 'letter';
            if (INTENTO[i]===palabra[i]){ //VERDE - Asigno el color verde de igual forma a todos para que se pueda visualizar incluso si es que se gano
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = 'green';
            }
            ROW.appendChild(SPAN)
        }
        GRID.appendChild(ROW)
        terminar();
        return;
    }
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--
    if (intentos==0){
        perdedor();
    }
}

function terminar(){
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.modal_close');
    INPUT.disabled = true;
    BOTON.disabled = true;
    // let contenedor = document.getElementById('guesses');
    // contenedor.innerHTML = mensaje;
    modal.classList.add('modal--show'); // Se muestra el modal

    closeModal.addEventListener('click', (e) =>{
        e.preventDefault();
        modal.classList.remove('modal--show'); // Al hacer click en el botón cerrar se cierra el modal 
    })
}

function perdedor(){
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    const modal = document.querySelector('.modal_sad');
    const closeModal = document.querySelector('.modal_close_sad');
    INPUT.disabled = true;
    BOTON.disabled = true;

    modal.classList.add('modal--show_sad'); // Se muestra el modal

    closeModal.addEventListener('click', (e) =>{
        e.preventDefault();
        modal.classList.remove('modal--show_sad'); // Al hacer click en el botón cerrar se cierra el modal 
    })
}

window.addEventListener('load', init)
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);










