const boton=document.getElementById("resultado") // obtiene la referencia del elemento

function numeroMayor() {
    const numero1= document.getElementById("valor1")
    const numero2= document.getElementById("valor2")

    if(numero1.value>numero2.value) {
        alert(numero1.value +" es mayor que " + numero2.value)
    }
    else if(numero2.value===numero2.value) {
        alert (numero2.value + " es igual a " + numero1.value)
    }
    else {
        alert (numero2.value + " es mayor que " + numero1.value)
    }
}
boton.addEventListener("click", numeroMayor) // observador