var efrain = {
    nombre: 'Efraín',
    edad: 25,
    peso: 80,
};

console.log(`Al inicio del año ${efrain.nombre} pesa ${efrain.peso} kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANNIO = 365;

const aumentarDePeso = ({peso}) => peso += INCREMENTO_PESO;
const adelgazar = ({peso}) => peso -= INCREMENTO_PESO;

for ( var i = 1; i<= DIAS_DEL_ANNIO; i++) {
    var random = Math.random() 

    if (random < 0.25) {
        aumentarDePeso(efrain);
    } else if(random < 0.5) {
        adelgazar(efrain);
    }
}

console.log(`Al final del año ${efrain.nombre} terminó pesando ${efrain.peso.toFixed(2)} kg`);