//Convierte un unmero en pesos colombianos: 4500 -> "$ 4.500"
const formatoPesos = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0, 
})

export function pesos(valor) {
    return formatoPesos.format(valor)
}