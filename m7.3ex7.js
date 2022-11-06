const QUANTITY_PER_PERSON = { FIDEOS: 125, GAMBAS: 100, CALAMARES: 50 }   //creamos un objeto que contiene los gramos x persona

function prices() {                                  //Crear la funcion extrae los precios q el usuario ha introducido x input
    const precioKgFideos = parseInt(document.getElementById("precioKgFideos").value)    //variable que recoge precio x kg fideos
    const precioKgGambas = parseInt(document.getElementById("precioKgGambas").value)   //variable que recoge precio x kg gambas
    const precioKgCalamares = parseInt(document.getElementById("precioKgCalamares").value) //variable que recoge precio x kg calamares

    const precio = { //creamos un objeto literal (estructura de datos) que contenga todos los precios
        fideos: precioKgFideos / 1000,
        gambas: precioKgGambas / 1000,
        calamares: precioKgCalamares / 1000
    }
    return precio
}

function howManyPeople() {   // funcion para extraer el numero de personas que va a comer
    const numeroAmigos = parseInt(document.getElementById("numeroAmigos").value)
    return numeroAmigos
}

function cantidad(numeroAmigos) {  //funcion que calcula el total de ingredientes
    const totalGramosFideos = QUANTITY_PER_PERSON.FIDEOS * numeroAmigos         //variables que recogen total de ingredientes x fideua del grupo   
    const totalGramosGambas = QUANTITY_PER_PERSON.GAMBAS * numeroAmigos
    const totalGramosCalamares = QUANTITY_PER_PERSON.CALAMARES * numeroAmigos

    const totalCantidadIngredientes = {      // creamos un objeto que contenga los totales
        fideos: totalGramosFideos,
        gambas: totalGramosGambas,
        calamares: totalGramosCalamares
    }
    return totalCantidadIngredientes
}

function calculoPrecioPorPersona(precio) {
    const precioPorPersona =
        precio.fideos * QUANTITY_PER_PERSON.FIDEOS +
        precio.gambas * QUANTITY_PER_PERSON.GAMBAS +
        precio.calamares * QUANTITY_PER_PERSON.CALAMARES
    return precioPorPersona
}

function calculoPrecioFideua() { //esta funcion llama al resto de funciones
    const preciosIngredientes = prices()
    const cuantaGente = howManyPeople()

    const costePorPersona = calculoPrecioPorPersona(preciosIngredientes)
    const totalCantidadIngredientes = cantidad(cuantaGente)
    const costeTotal = costePorPersona * cuantaGente
    console.log(cantidad)

    document.getElementById("cantidadTotal").innerHTML = "El total de ingredientes que se necesitan para " + cuantaGente
        + " personas es de " + "<br>" + totalCantidadIngredientes.fideos + " gramos de fideos, "
        + "<br>" + totalCantidadIngredientes.gambas + " gramos de gambas, y " + "<br>" + totalCantidadIngredientes.calamares + " gramos de calamares"

    document.getElementById("precioFideua").innerHTML = "El precio total de la fideua es de "
        + costeTotal.toFixed(2) + " € y el precio por persona es de " + costePorPersona.toFixed(2) + "€"
}

