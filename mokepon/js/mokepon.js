const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById ('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const imagenJugador = document.getElementById('imagen-jugador')
const spanMascotaContrincante = document.getElementById('mascota-contrincante')
const imagenContrincante = document.getElementById('imagen-contrincante')

const spanVictoriasJugador = document.getElementById('victorias-jugador')
const spanVictoriasContrincante = document.getElementById('victorias-contrincante')

const sectionMensajes = document.getElementById('resultado')
const sectionResultadoBatalla = document.getElementById('resultado-batalla')
const ataqueDelJugador = document.getElementById('ataque-del-jugador')
const ataqueDelContrincante = document.getElementById('ataque-del-contrincante')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById ('contenedor-ataques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let mokepones = []
let mokeponesContrincantes = []
let ataquesJugador = []
let ataqueContrincante = []
let opcionDeMokepones 
let inputHipodoge
let inputCapipepo 
let inputRatigueya
let inputLangostelvis
let inputPydos
let inputTucapalma
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponContrincante
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueContrincante
let victoriasJugador = 0
let victoriasContrincante = 0
let lienzo = mapa.getContext('2d')
let intervalo 
let mapaBackground = new Image()
mapaBackground.src = './assets/mokepon_mapa.png'

class Mokepon {
    constructor (nombre, imagen, vida, imagenMapa, x = 310, y = 220) {
        this.nombre = nombre
        this.imagen = imagen
        this.vida = vida
        this.ataques = []
        this.x = x
        this.y = y
        this.ancho = 40
        this.alto = 40
        this.mapaImagen = new Image()
        this.mapaImagen.src = imagenMapa
        this.velocidadX = 0
        this.velocidadY = 0

    }

    dibujarMokepon() {
        lienzo.drawImage(
            this.mapaImagen,
            this.x,
            this.y,
            this.ancho,
            this.alto) 
    }

}


let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png')

let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.png')

let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/ratigueya.png')

let langostelvis = new Mokepon('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.png', 5, './assets/langostelvis.png')

let pydos = new Mokepon('Pydos', './assets/mokepons_mokepon_pydos_attack.png', 5, './assets/pydos.png')

let tucapalma = new Mokepon('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 5, './assets/tucapalma.png'); 

let hipodogeContrincante = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png', 500, 50)

let capipepoContrincante = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.png', 370, 380)

let ratigueyaContrincante = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/ratigueya.png',120, 310)

let langostelvisContrincante = new Mokepon('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.png', 5, './assets/langostelvis.png',580,190)

let pydosContrincante = new Mokepon('Pydos', './assets/mokepons_mokepon_pydos_attack.png', 5, './assets/pydos.png', 10, 130)

let tucapalmaContrincante = new Mokepon('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 5, './assets/tucapalma.png', 130,20 )

hipodoge.ataques.push(
    {nombre:'💧', id:'boton-agua'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🔥', id:'boton-fuego'},
)

capipepo.ataques.push(
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'💧', id:'boton-agua'},
)

ratigueya.ataques.push(
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🌱', id:'boton-tierra'},
)

langostelvis.ataques.push(
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🌱', id:'boton-tierra'},
)

pydos.ataques.push(
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🔥', id:'boton-fuego'},
)

tucapalma.ataques.push(
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'💧', id:'boton-agua'},
)
mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, pydos, tucapalma)

mokeponesContrincantes.push(hipodogeContrincante, capipepoContrincante, ratigueyaContrincante, langostelvisContrincante, pydosContrincante, tucapalmaContrincante)

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascotas" id=${mokepon.nombre} />
        <label class= "tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.imagen} alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones
        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
        inputLangostelvis = document.getElementById('Langostelvis')
        inputPydos = document.getElementById('Pydos')
        inputTucapalma = document.getElementById('Tucapalma')

    })
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'

    const mascotaSeleccionada = document.querySelector('input[name="mascotas"]:checked');
    if (mascotaSeleccionada) {
    const mokeponSeleccionado = mokepones.find(mokepon => mokepon.nombre == mascotaSeleccionada.id);
    spanMascotaJugador.innerHTML = mokeponSeleccionado.nombre;
    imagenJugador.innerHTML = `
    <img src="${mokeponSeleccionado.imagen}" alt="${mokeponSeleccionado.nombre}">
    `;
    mascotaJugador = mascotaSeleccionada.id
    } else {
    alert ('selecciona una mascota')
    reiniciarJuego();
    }
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class ="boton-de-ataque btn-ataque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.btn-ataque')
}

function secuenciaAtaques() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataquesJugador.push('🔥')
                console.log(ataquesJugador)
                boton.style.background = '#00425A' 
                boton.disabled = true  
            } else if (e.target.textContent === '💧') {
                ataquesJugador.push('💧')
                console.log(ataquesJugador)
                boton.style.background = '#00425A'
                boton.disabled = true
            } else {
                ataquesJugador.push('🌱')
                console.log(ataquesJugador)
                boton.style.background = '#00425A'
                boton.disabled = true
            }
            ataqueAleatorioContrincante()
        })
    })
    
}

function seleccionarMascotaContrincante (contrincante) {
    spanMascotaContrincante.innerHTML = contrincante.nombre
    imagenContrincante.innerHTML = `
    <img src=${contrincante.imagen} alt=${contrincante.nombre}>
    `;
    ataquesMokeponContrincante = contrincante.ataques
    // let mascotaAleatorio = aleatorio(0, mokepones.length -1)

    // spanMascotaContrincante.innerHTML = mokepones[mascotaAleatorio].nombre;
    // imagenContrincante.innerHTML = `<img src=${mokepones[mascotaAleatorio].imagen} alt=${mokepones[mascotaAleatorio].nombre}>`;
    // ataquesMokeponContrincante = mokepones[mascotaAleatorio].ataques
    secuenciaAtaques()
}

function ataqueAleatorioContrincante() {
    let ataquealeatorio = aleatorio(0, ataquesMokeponContrincante.length -1)

    ataqueContrincante.push(ataquesMokeponContrincante[ataquealeatorio].nombre)
    ataquesMokeponContrincante.splice(ataquealeatorio, 1)

    console.log(ataqueContrincante)
    combate()
    sectionMensajes.style.display = 'none'
    iniciarCombate()
}

function iniciarCombate() {
    if (ataquesJugador.length === 5) {
        contarVictorias()
        sectionMensajes.style.display = 'flex'
        sectionResultadoBatalla.style.display = 'none'
    }
}

function indexOponentes (jugador, contrincante) {
    indexAtaqueJugador = ataquesJugador[jugador]
    indexAtaqueContrincante = ataqueContrincante[contrincante]
}

function combate() { 
    let resultado
    for (let index = 0; index < ataquesJugador.length; index++) {
        if (ataquesJugador[index] === ataqueContrincante[index]) {
            indexOponentes(index, index)
            resultado = "EMPATE 🤔"
        } else if (
            (ataquesJugador[index] == "🔥" && ataqueContrincante[index] == "🌱") ||
            (ataquesJugador[index] == "💧" && ataqueContrincante[index] == "🔥") ||
            (ataquesJugador[index] == "🌱" && ataqueContrincante[index] == "💧")
        ) { 
            indexOponentes(index, index)
            resultado = "GANASTE 😎"
        } else {
            indexOponentes(index, index)
            resultado = "PERDISTE 😫"
        }
        console.log(ataquesJugador[index], ataqueContrincante[index])
    }
    crearMensaje(resultado)
    
}

function contarVictorias() {
    if (victoriasJugador === victoriasContrincante) {
        crearMensajeFinal("EL COMBATE QUEDÓ EN EMPATE 😵") 
    } else if (victoriasJugador > victoriasContrincante) {
        crearMensajeFinal("GANASTE EL COMBATE 😎")
    } else {
        crearMensajeFinal("PERDISTE EL COMBATE 😥")
    }
}

function crearMensaje(resultadoBatalla) {
    sectionResultadoBatalla.innerHTML = resultadoBatalla
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelContrincante = document.createElement('p')

    if (resultadoBatalla === "GANASTE 😎") {
        victoriasJugador++
        spanVictoriasJugador.innerHTML = victoriasJugador
    } else if (resultadoBatalla === "PERDISTE 😫") {
        victoriasContrincante++
        spanVictoriasContrincante.innerHTML = victoriasContrincante
    }
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelContrincante.innerHTML = indexAtaqueContrincante
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelContrincante.appendChild(nuevoAtaqueDelContrincante)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random()* (max - min + 1)+ min)
}

function iniciarMapa() {
    mapa.width = 620
    mapa.height = 440
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(dibujarCanvas, 50)
    window.addEventListener('keydown', tecleo)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}

function dibujarCanvas() {
    mascotaJugadorObjeto.x += mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y += mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground, 0, 0, mapa.width, mapa.height)

        mascotaJugadorObjeto.dibujarMokepon()
        hipodogeContrincante.dibujarMokepon()
        capipepoContrincante.dibujarMokepon()
        ratigueyaContrincante.dibujarMokepon()
        langostelvisContrincante.dibujarMokepon()
        pydosContrincante.dibujarMokepon()
        tucapalmaContrincante.dibujarMokepon()

        mokeponesContrincantes.forEach((mokeponContrincante) => {
            mokeponContrincante.dibujarMokepon()
                if (mascotaJugadorObjeto.velocidadX !== 0 ||mascotaJugadorObjeto.velocidadY !== 0) {
                        revisarColision(mokeponContrincante)
                    }
            })     

}

function moverMascotaArriba() {
     mascotaJugadorObjeto.velocidadY = -5
}

function moverMascotaAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
}

function moverMascotaDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}

function moverMascotaIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
}

function detenerMovimiento () {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function tecleo(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverMascotaArriba()
            break;
        case 'ArrowDown':
            moverMascotaAbajo()
            break;
        case 'ArrowLeft':
            moverMascotaIzquierda()
            break;
        case 'ArrowRight':
            moverMascotaDerecha()
            break;
        default:
            break;
    }
}

function revisarColision(mokeponContrincante) {
    const arribaContrincante = mokeponContrincante.y
    const abajoContrincante = mokeponContrincante.y + mokeponContrincante.alto
    const derechaContrincante = mokeponContrincante.x + mokeponContrincante.ancho
    const izquierdaContrincante = mokeponContrincante.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.y

    if(
        abajoMascota < arribaContrincante ||
        arribaMascota > abajoContrincante ||
        derechaMascota < izquierdaContrincante ||
        izquierdaMascota > derechaContrincante
    ) {
        return
    }
    detenerMovimiento()
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaContrincante (mokeponContrincante)
    // alert('combate con ' + mokeponContrincante.nombre)
}

window.addEventListener('load', iniciarJuego)