/*
Hay que programar un carrito de compra de fruta.

El cliente eligirá que fruta quiere haciendo click sobre la imagen.
Un mensaje emergente le preguntará qué cantidad quiere.

Esta información se mostrará a la derecha, bajo "Total carrito", 
en <p id="carrito"></p>, de esta forma:
 Kiwi 2 kg x 4,20€/kg = 8,40 €

El total se actualizará con cada compra
 Total Compra: 8,40€
 
Se dará la opción de añadir o no más productos que se mostrarán
a continuación de los anteriores, y se sumará todo en el total. 
Por ejemplo:  
 Kiwi 2 kg x 4, 20€/kg = 8, 40€
 Pomelo 1 kg x 2,50€/kg = 2,50€
 Total Compra: 10,90€

Puedes modificar el código facilitado si ello te ayuda con el ejercicio,
pero deberás justificarlo.

Recuerda la importancia comentar con detalle el código.

 Lo importante es el cálculo, no los estilos css
 */

// Vamos a empezar de 0

// Inicializamos el array del carrito, quizá me queda más claro así
let carritoFrutasSeleccionadas = []

// Voy a poner los atributos desde aquí para tocar el html lo minimo
// Sacamos el listado de <div> de las frutas, que es el elemento que tiene el hover
let lista = document.getElementById("productes")
// console.log(lista);
// Dándole vueltas a la cosa...
let divProductos = lista.querySelectorAll("div")
// console.log(divProductos);
// Les añadimos la clase producto y el onclick, que llamará a la función para añadirlos al array del carrito, 
// tambien hemos podido sacar los datos de los <p> para pasar los argumentos a la función, así ya lo tyenemos todo
// de esta forma la construcción del objeta será más facil...
for (i = 0; i < divProductos.length; i++) {
    // Añadimos la clase
    divProductos[i].classList.add("producto")
    //Sacamos los datos de las frutas
    let nombreFrutaSel = divProductos[i].getElementsByTagName("p")[0].innerHTML.split(":")[0].trim()
    let importeFrutaSel = parseFloat(divProductos[i].getElementsByTagName("p")[0].innerHTML.split(":")[1].split("/")[0].split("€")[0].replace(",", ".").trim())
    let unidadFrutaSel = divProductos[i].getElementsByTagName("p")[0].innerHTML.split(":")[1].split("/")[1].trim()
    // console.log(nombreFrutaSel);
    // console.log(importeFrutaSel);
    // console.log(unidadFrutaSel);
    // Montamos el onclick y llamamos a la función con los argumentos
    divProductos[i].setAttribute("onclick", `productoSeleccionado("${nombreFrutaSel}", ${importeFrutaSel}, "${unidadFrutaSel}")`)
}

// Hacemos la función que lee el evento de onclick
function productoSeleccionado(nombreFrutaSel, importeFrutaSel, unidadFrutaSel) {
    // Lanzamos el prompt para que el usuario introduzca un número
    let cantidadFrutaSel = prompt(`Has seleccionado ${nombreFrutaSel} y cuesta ${importeFrutaSel}€/${unidadFrutaSel}\n ¿Qué cantidad de ${nombreFrutaSel} quieres?`)
    cantidadFrutaSel = parseFloat(cantidadFrutaSel)
    // Comprobaciones varias de los resultados
    // let calculoImporte = importeFrutaSel * cantidadFrutaSel
    // console.log(nombreFrutaSel);
    // console.log(importeFrutaSel);
    // console.log(unidadFrutaSel);
    // console.log(cantidadFrutaSel);
    // console.log(calculoImporte);
    // Comprobamos que realmente nos pongan un número, por lo menos hasta donde yo sé y he podido averiguar
    if(!isNaN(cantidadFrutaSel) && cantidadFrutaSel != "" && cantidadFrutaSel != null){
        calculoImporte = importeFrutaSel * cantidadFrutaSel
        // Creamos un objeto con la información que queremos guardar    
        let objetoFrutaSel = {
            nombref: nombreFrutaSel,
            importef: importeFrutaSel,
            unidadf: unidadFrutaSel,
            cantidadc: cantidadFrutaSel,
            importec: calculoImporte
            }
        // console.log(objetoFrutaSel);
        // Añadimos este objeto al array "carritoFrutasSeleccionadas"
        carritoFrutasSeleccionadas.push(objetoFrutaSel)
    }else{
        // En caso de que no pongan un dato valido, lanzamos una mensaje de alerta
        alert('¿No has puesto una cantidad correcta!')
    }
    // Comprobamos para verificar que se añaden los datos
    // console.log(carritoFrutasSeleccionadas)
    mostrarCompra()
}
