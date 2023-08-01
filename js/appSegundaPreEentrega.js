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

        calcularTotal() {
            return this.listaCarrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0)
        }

        calcularIva() {
            return this.calcularTotal() * 1.21
        }
    }

    class ControladorDeProductos {
        constructor() {
            this.catalogoDeProductos = [];
        }
        agregar(producto) {
            this.catalogoDeProductos.push(producto);
        }
        buscarProdutctoPorId(id) {
            return this.catalogoDeProductos.find(producto => producto.id == id);
        }
        mostrarProductos() {
            this.catalogoDeProductos.forEach((producto) => {
                console.log(producto.descripcion());
            });
        }
    }

    class Carrito {
        constructor() {
            this.listaCarrito = [];
        }
        agregar(producto) {
            this.listaCarrito.push(producto);
        }
        mostrarProductos() {
            const detalleProductos = [];
            this.listaCarrito.forEach(producto => {
                detalleProductos.push(producto.descripcionComprado());
            });
            return detalleProductos.join("\n\n");
        }

        calcularTotal() {
            return this.listaCarrito.reduce(
                (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
                0
            );
        }

        calcularIva() {
            return this.calcularTotal() * 1.21;
        }
    }

    const CP = new ControladorDeProductos();
    const carrito = new Carrito(); // Crear una instancia de Carrito

    CP.agregar(new Producto(1, "cuadros1", 2000, 1));
    CP.agregar(new Producto(2, "cuadros2", 2500, 1));
    CP.agregar(new Producto(3, "cuadros3", 3000, 1));
    CP.agregar(new Producto(4, "postales1", 500, 1));
    CP.agregar(new Producto(5, "postales2", 800, 1));
    CP.agregar(new Producto(6, "postales3", 900, 1));

    let respuesta;
    do {
        CP.mostrarProductos();
        let opcion = Number(prompt("Ingrese el código del Producto que desea agregar"));
        let producto = CP.buscarProdutctoPorId(opcion);
        carrito.agregar(producto); // Agregar el producto al carrito
        alert("El producto fue agregado exitosamente: \n\n" + producto.descripcionComprado());
        respuesta = prompt("¿Desea seguir comprando?\n Escriba 'Si' o 'No'").toUpperCase();
    } while (respuesta !== "NO");

    const detalleProductos = carrito.mostrarProductos();
    alert("Detalle de los productos:\n\n" + detalleProductos);

    alert("El total de su compra es de " + carrito.calcularTotal());
    alert("El total de su compra más IVA es de " + carrito.calcularIva());
})();

