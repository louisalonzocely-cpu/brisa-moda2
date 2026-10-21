//Convierte un unmero en pesos colombianos: 4500 -> "$ 4.500"
const formatoPesos = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0, 
})

export function pesos(valor) {
    return formatoPesos.format(valor)
}

// Formatea el número de WhatsApp de la tienda para mostrarlo: 573001234567 -> "300 123 4567"
export function celularLegible(numero = '') {
    const local = numero.startsWith('57') ? numero.slice(2) : numero
    return local.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')
}