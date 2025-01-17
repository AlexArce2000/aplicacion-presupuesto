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
    cargarIngresos();
    cargarEgresos();
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

const cargarIngresos = ()=>{
    let ingresosHTML = ''
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso); 
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso)=>{
    let ingresoHTML=`
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
    return ingresoHTML;
}

const cargarEgresos = ()=>{
    let egresosHTML ='';
    for (const egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso)
    }
    document.getElementById('lista-egresos').innerHTML=egresosHTML;
}
const crearEgresoHTML = (egreso)=>{
    let egresoHTML=`
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </button>
            </div>
        </div>
    </div>    
    `;
    return egresoHTML;
};