document.addEventListener('DOMContentLoaded', () => {

    const baseDeDatos = [
        {
            id: 1,
            nombre: 'coca de vidrio',
            precio: 30,
            imagen: 'coca.jpg'
        }, {
            id: 2,
            nombre: 'jugo',
            precio: 15,
            imagen: 'jugo.jpg'
        },
        {
            id:3,
            nombre: 'huevo',
            precio: 46,
            imagen: 'huevo.jpg'
        }
    ]

    let carrito = []
    const divisa = '$'
    // elemntos del DOM
    const DOMitems = document.querySelector('#items')
    const DOMcarrito = document.querySelector('#carrito')
    const DOMtotal = document.querySelector('#total')

    // funcionalidades

    function renderizarProductos() {
        // utlizar la base de datos para mostrar los productos
        // baseDeDatos.forEach( function (producto) {} ) funcion anonima
        baseDeDatos.forEach( (producto) => {
            // contenedor de tarjeta
            const miNodo = document.createElement('div')
            miNodo.classList.add('card', 'col-sm-4')
            // cuerpo de la tarjeta
            const miNodoCardBody = document.createElement('div')
            miNodoCardBody.classList.add('card-body')
            // miNodoCardBody.setAttribute('id', 'cardBody')
            // titulo
            const miNodoTitle = document.createElement('h5')
            miNodoTitle.classList.add('card-title')
            miNodoTitle.textContent = producto.nombre
            // imagen
            const miNodoImage = document.createElement('img')
            miNodoImage.classList.add('card-img-top')
            miNodoImage.setAttribute('src', producto.imagen)
            // precio
            const miNodoPrice = document.createElement('p')
            miNodoPrice.classList.add('card-text')
            miNodoPrice.textContent = producto.precio
            // boton de agregar producto
            const miNodoButton = document.createElement('button')
            miNodoButton.classList.add('btn', 'btn-primary')
            miNodoButton.textContent = '+'

            // juntamos todos los elementos que creamos en el DOM
            miNodoCardBody.appendChild(miNodoTitle)
            miNodoCardBody.appendChild(miNodoPrice)
            miNodoCardBody.appendChild(miNodoButton)
            miNodo.appendChild(miNodoImage)
            miNodo.appendChild(miNodoCardBody)
            
            // metemos la tarjeta dentro del main
            DOMitems.appendChild(miNodo)

        } )
    }

    renderizarProductos()
})