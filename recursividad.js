//Es una función que se llama asi misma 
function divisionEntera (dividendo, divisor) {

/* funciond de la operación
15 / 5 =
15 - 5 = 10   primer operación
10 - 5 = 5    segunda operación
5 - 5 = 0     tercer operación
0 - 5 = -5    retorna 0 */
    if (dividendo < divisor) {
        return 0;
    }
    return 1 + divisionEntera(dividendo - divisor, divisor)
}

divisionEntera(15, 5);