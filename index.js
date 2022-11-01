let jugador1 = Math.floor(Math.random()*6)+1;
let casinoOnline = Math.floor(Math.random()*6)+1;
let seguirJugando = true
let resultado

function juegoDados (P1,P2) {
    alert(`Numero de tu dado es : ${P1}`)
    alert(`Numero del dado de la casa es : ${P2}`)
    if (jugador1 > casinoOnline) {
        alert('Felicitaciones ganaste! :D')
    } else if (jugador1 === casinoOnline) {
        alert('Ups, salieron iguales! :I')
    } else {
        alert('Lo siento, perdiste... :(')
    }
    decision = parseInt(prompt('¿Desea seguir jugando? 1-Si   2-No'))
    if(decision === 1) {
        seguirJugando = true
        juegoDados(jugador1,casinoOnline)
    } else {
        seguirJugando = false
    }
}

while(seguirJugando === true) {
    const presentacion = alert('Bienvenido a su casino online de confianza')
    let pregunta = parseInt(prompt('Por el momento solo contamos con nuestro juego favorito de dados. Desea jugar?           1-si  2-no'))
    if (pregunta === 1) {
        juegoDados(jugador1,casinoOnline)
    } 
    else if (pregunta === 2) {
        alert('Muchas gracias por elegirnos. Hasta la proxima')
    } else {
        alert('La opcion elegida no corresponde. Porfavor intenta nuevamente.')
    }   
}


