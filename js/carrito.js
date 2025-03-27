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

// Sacamos los datos de nombre, importe y tarifa de venta
// Obtenemos el listado de div's en un array, 
// así luego podremos recorrer el contenido 
// o detectar que hemos seleccionado el div completo
let lista = document.getElementsByClassName("productos")
// console.log(lista)

// Inicializamos el arrays para llenar con los datos de las frutas, 
//utilizaremos objetos
let datosFrutas = []

// Recorremos el array y buscamos los datos, ha costado, 
// pero al final lo saco con innerHTML 
// en el getElementsByTagName("p")[0] saco el primer <p> , 
// que solo hay uno, pero si no se lo indicas no lo puedes sacar igual que en los split !!!
for (i = 0; i < lista.length; i++) {
    let listadoNombresFrutas = lista[i].getElementsByTagName("p")[0].innerHTML.split(":")[0].trim()
    let listadoImporteFrutas = lista[i].getElementsByTagName("p")[0].innerHTML.split(":")[1].split("/")[0].split("€")[0].replace(",", ".").trim()
    let listadoUnidadFrutas = lista[i].getElementsByTagName("p")[0].innerHTML.split(":")[1].split("/")[1].trim()
    
    // Creo el objetoFrutas para llenarlo, tal como ha dicho Ferran
    let objetoFrutas = {}
    // console.log(i) // para ver el id y con los de abajo veo los datos extraidos de los parrafos
    // console.log(listadoNombresFrutas)
    // console.log(listadoImporteFrutas)
    // console.log(listadoUnidadFrutas)

    // Una vez que tenemos los datos los insertamos en cada objeto dentro del array
    objetoFrutas["nombre"] = listadoNombresFrutas
    objetoFrutas["importe"] = listadoImporteFrutas
    objetoFrutas["unidad"] = listadoUnidadFrutas
    // console.log(objetoFrutas)

    // Meto cada objeto en el array
    datosFrutas.push(objetoFrutas)
}
// console.log(datosFrutas)


//Vamos a ver si saco la función que me retorne el id del articulo seleccionado con el click

// function frutaComprada (lista) {
// Recorremos el array y en el click seleccionamos la fruta y lanzamos un alert preguntando la cantidad del tipo de fruta que se desea
let cantidadFruta = 0
let calculoImporte = 0
let datosCarrito = []
let carritoFinal = []
    for (i = 0; i < lista.length; i++) {
        let frutaElegNom = datosFrutas[i].nombre
        let frutaElegImp = datosFrutas[i].importe
        let frutaElegTar = datosFrutas[i].unidad
       
        lista[i].addEventListener("click", () => {
            cantidadFruta = prompt(`Has seleccionado el ${frutaElegNom} y cuesta ${frutaElegImp}€/${frutaElegTar}\n ¿Qué cantidad de ${frutaElegNom} quieres?`)
            // calculoImporte = frutaElegImp * cantidadFruta
            // console.log(frutaElegNom)
            // console.log(cantidadFruta)
            // console.log(calculoImporte)
            if(!isNaN(cantidadFruta) && cantidadFruta != null && cantidadFruta != ""){
                calculoImporte = frutaElegImp * cantidadFruta
                datosCarrito.push(frutaElegNom)
                datosCarrito.push(cantidadFruta)
                datosCarrito.push(calculoImporte)
                document.getElementById('carrito').innerHTML = `<p>frutaElegNom frutaElegImp€/frutaElegTar</p>`
            }else{
                alert('¿No has puesto una cantidad correcta!');
            }
        })
        carritoFinal.push(datosCarrito)
        // return datosCarrito
        // break
    }

    console.log(carritoFinal);
// }

// document.addEventListener("click", () => {
//     alert(`Has hecho click`)
// })



// let lista2 = frutaComprada(lista)
// let lista3 = frutaComprada(lista)
// console.log(lista2, lista3)

// for (i = 0; i < carritoFinal.length ; i++) {
// console.log(carritoFinal[i]);
// document.getElementById('carrito').innerHTML = '<p>Hola</p>'

// }
