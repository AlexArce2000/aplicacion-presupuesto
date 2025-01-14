const ingresos = [
    new Ingreso("Salario",2100.00),
    new Ingreso("Venta Coche",1500.00)
];

const egresos = [
    new Egreso('Renta departamento',900),
    new Egreso('Ropa', 400)
]

let cargarApp = ()=>{
    cargarCabecero();
}

let totalIngresos = ()=>{
    let totalIngresos=0;
    for (const ingreso of ingresos) {
        totalIngresos += ingreso.valor;
    }
    return totalIngresos;
}

let totalEgresos= ()=>{
    let totalEgresos = 0;
    for (const egreso of egresos) {
        totalEgresos += egreso.valor;
    }
    return totalEgresos;
}

let cargarCabecero= ()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor)=>{
    return valor.toLocaleString('es-PY',{style:'currency', currency:'PYG'})
}

const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString('es-PY',{style:'percent', minimunFractionDigits:2})
}