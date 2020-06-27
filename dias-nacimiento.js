function diasEntreFechas(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24;
    //Math.abs nos da el numero absoluto sin importar si es decimal o negativo
    const diferencia = Math.abs(fecha1 -fecha2);

    return Math.floor(diferencia / unDia);
}

const hoy = new Date();
const nacimiento = new Date(1995, 6, 1);