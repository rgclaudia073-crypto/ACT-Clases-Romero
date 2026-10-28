// import productos from './productos.js' // No nombrada
import {productosMascotas, categorias} from './productos.js' // Nombrada
import {renderizarCatalogo,filtrarPorTalle} from './funciones.js'

// Referenciamos un elemento del DOM
const contenedorProductos = document.getElementById("contenedor-productos")
const eventoBoton = document.getElementById("evento-boton")
const dialogo = document.getElementById('dialogo')
const carro = document.getElementsByName('carro')
 
// Arreglo productos
const productoCarritos = [] //--> push
// Escuchador
eventoBoton.addEventListener('click', (evento)=>{
    //console.log(evento)
    //dialogo.show()
    dialogo.showModal()
})


// Select 
/*
<select name="talle">
    <option value="S">S</option>
</select>
*/
// Filtramos el arreglo de los productos
const productosFiltrados = filtrarPorTalle(productosMascotas, 'S')

// 1) Renderizamos
renderizarCatalogo(contenedorProductos, productosFiltrados)

// 2) Aplicamos los escuchadores
const botonesCarro = contenedorProductos.querySelectorAll('.boton-agregar-carro')
// const bptpnesCarro= contenedorProductos.querySelectorAll('[data-id]')

botonesCarro.forEach(()=>{
    // Cuerpo forEach
    botonesCarro.addEventListener('click', (evento)=>{
        // Cuerpo del callback listener
        // const idProducto = Number(boton.dataset.id)
        const idProducto = parseInt(boton.dataset.id)
        console.log(idProducto)
        productosCarrito.push(idProducto)
        console.log(productosCarrito)
        botonesCarro.textContent = productosCarrito.length

    })
})
