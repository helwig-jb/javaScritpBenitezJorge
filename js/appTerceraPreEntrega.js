(function() {
    class Producto {
        constructor(id, nombre, precio, cantidad) {
            this.id = id;
            this.nombre = nombre;
            this.precio = precio;
            this.cantidad = cantidad;
        }
        descripcion() {
            return (
                "id: " + this.id + "\nnombre: " + this.nombre + "\nprecio: " + this.precio
            );
        }
        descripcionComprado() {
            return (
                "id: " + this.id + "\nNombre: " + this.nombre + " \nPrecio: " + this.precio + "\nCantidad: " + this.cantidad
            );
        }
    }

    class ControladorDeProductos {
        constructor() {
            this.catalogoDeProductos = [];
        }
        agregar(producto) {
            this.catalogoDeProductos.push(producto);
        }
        buscarProductoPorId(id) {
            return this.catalogoDeProductos.find(producto => producto.id === id);
        }
    }

    class Carrito {
        constructor() {
            this.listaCarrito = [];
        }
        agregar(producto) {
            this.listaCarrito.push(producto);
        }
        calcularTotal() {
            return this.listaCarrito.reduce(
                (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
                0
            );
        }
    }

    const CP = new ControladorDeProductos();
    const carrito = new Carrito();

    CP.agregar(new Producto(1, "cuadros1", 2000, 1));
    CP.agregar(new Producto(2, "cuadros2", 2500, 1));
    CP.agregar(new Producto(3, "cuadros3", 3000, 1));
    CP.agregar(new Producto(4, "postales1", 500, 1));
    CP.agregar(new Producto(5, "postales2", 800, 1));
    CP.agregar(new Producto(6, "postales3", 900, 1));
    
    const mostrarCatalogoButton = document.getElementById('mostrarCatalogo');
    const catalogoDiv = document.getElementById('catalogo');
    const agregarProductoButton = document.getElementById('agregarProducto');
    const carritoDiv = document.getElementById('carrito');
    const finalizarCompraButton = document.getElementById('finalizarCompra');
    const resumenCompraDiv = document.getElementById('resumenCompra');


    mostrarCatalogoButton.addEventListener('click', () => {
        catalogoDiv.innerHTML = "";
        CP.catalogoDeProductos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.textContent = producto.descripcion();
            catalogoDiv.appendChild(productoDiv);
        });
    });

    agregarProductoButton.addEventListener('click', () => {
        const opcion = Number(prompt("Ingrese el código del Producto que desea agregar"));
        const producto = CP.buscarProductoPorId(opcion);
        if (producto) {
            carrito.agregar(producto);
            carritoDiv.innerHTML = "Productos en el carrito:<br>";
            carrito.listaCarrito.forEach(productoCarrito => {
                const productoCarritoDiv = document.createElement('div');
                productoCarritoDiv.textContent = productoCarrito.descripcionComprado();
                carritoDiv.appendChild(productoCarritoDiv);
            });
        }
    });

    finalizarCompraButton.addEventListener('click', () => {
        const totalCompra = carrito.calcularTotal();
        const totalIva = totalCompra * 1.21;
        resumenCompraDiv.innerHTML = `Total de la compra: ${totalCompra} <br> Total con IVA: ${totalIva}`;
    });

})();
