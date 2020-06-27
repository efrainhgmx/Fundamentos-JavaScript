//Función recursivo, con memoria para ahorrar procesamiento
function factorial(n) {
    if(!this.cache) {
        this.cache = {}
    }
    //debbuger
    if(this.cache[n]) {
        return this.cache[n];
    }

    if (n === 1) {
        return 1;
    }

    this.cache[n] = n * factorial(n - 1);
    //debugger
    return this.cache[n];
}