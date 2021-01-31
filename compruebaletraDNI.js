// Array
const LETRAS_DNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    // preguntar al usuario, los números de su dni
let numeroDNI = prompt("No sabes tu letra de DNI? Escribe aquí tus números.")
const resto = numeroDNI % 23

function muestraError() {
    alert('ERROR!!!')
    numeroDNI = 'salir'
}

function muestraResultado() {
    alert(`DNI: ${numeroDNI}-${LETRAS_DNI[resto]}`)
    numeroDNI = 'salir'
}

// bucle
while (numeroDNI != 'salir') {
    // que tipo de datos permitimos o no
    switch (true) {
        case numeroDNI < 0:
        case numeroDNI.length != 8:
        case numeroDNI == '':
            muestraError()
            break
        default:
            muestraResultado()
            break
    }

}