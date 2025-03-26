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
// Obtenemos el listado en un array
let lista = document.getElementsByClassName("productos")
// let frutas = document.getElementsByClassName("imatges")
// let importe = document.getElementsByClassName("imatges")
// let tarifa = document.getElementsByClassName("imatges")
//
// console.log(lista)
// console.log(frutas);
// console.log(importe);
// console.log(tarifa);
// Inicializamos los arrays para llenar con los datos de "nombre de lista", "nombre de fruta", "importe de venta" y "tarifa de venta"
let listaFrutas = []
let nombreFrutas = []
let importeFrutas = []
let tarUnidFrutas = []
// Recorremos el array y buscamos los datos, es mejorable la parte de buscar en los hijos
for (i = 0; i < lista.length; i++) {
    let listadoFrutas = lista[i].getAttribute("id")
    let listadoNombresFrutas = lista[i].lastElementChild.textContent.split(":")[0]
    let listadoImporteFrutas = lista[i].lastElementChild.textContent.split(":")[1].split("/")[0].trim()
    let listadoTarifaFrutas = lista[i].lastElementChild.textContent.split(":")[1].split("/")[1].trim()
    // console.log(listadoFrutas);
    // console.log(listadoNombresFrutas);
    // console.log(listadoImporteFrutas);
    // console.log(listadoTarifaFrutas);
    // Una vez que tenemos los datos los insertamos en los arrays correspondientes
    listaFrutas.push(listadoFrutas)
    nombreFrutas.push(listadoNombresFrutas)
    importeFrutas.push(listadoImporteFrutas)
    tarUnidFrutas.push(listadoTarifaFrutas)
}

console.log(listaFrutas);
console.log(nombreFrutas);
console.log(importeFrutas);
console.log(tarUnidFrutas);

//for (i = 0; i < lista.length; i++) {
    // console.log(listaFrutas[i]);
    lista[0].addEventListener("click", () => {
        // let frutaSeleccionada = lista[i]
        let frutaElegida = nombreFrutas[0] //lista[0].lastElementChild.textContent.split(":")[0]
        console.log(lista[0]);
        console.log(listaFrutas[0]);
        console.log(frutaElegida);
        console.log(importeFrutas[0]);
        console.log(tarUnidFrutas[0]);
        //alert(`Eres ${frutaElegida} `)
    })
//}