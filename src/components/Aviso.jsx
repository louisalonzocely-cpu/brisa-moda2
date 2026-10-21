import { useEffect } from "react";

function Aviso({ mensaje, onOcultar }) {
    useEffect(() => {
        if (!mensaje) return
        const temporizador = setTimeout(() => onOcultar(''), 3000)
        return () => clearTimeout(temporizador)
    }, [mensaje, onOcultar])

    if (!mensaje) return null

    return (
        <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-mar-900 px-5 py-3 text-sm font-semibold text-white shadow-lg">
           ✓ {mensaje}
        </div>
    )
}

export default Aviso
