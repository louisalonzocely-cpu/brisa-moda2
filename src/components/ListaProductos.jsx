import TarjetaProducto from "./TarjetaProducto.jsx";

function ListaProductos({ productos, cargando, error, onVerDetalle }) {
    if (cargando) {
        return <p className="py-16 text-center text-stone-500">Cargando productos...</p>
    }

    if (error) {
        return <p className="py-16 text-center text-red-600">Error al cargar los productos: {error}</p>
    }

    if (productos.length === 0) {
        return (
            <p className="py-16 text-center text-stone-500">
                No encontramos productos con esos filtros.
            </p>
        )
    }

    return (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {productos.map((p) => (
                <TarjetaProducto key={p.id} producto={p} onVerDetalle={onVerDetalle} />
            ))}
        </div>
    )
}

export default ListaProductos