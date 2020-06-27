var efrain = {
    nombre: 'Efraín',
    edad: 25,
    peso: 80
};

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANNIO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeorte = () => Math.random() < 0.4;

const META_DE_PESO = efrain.peso - 3;
var dias = 0;

while (efrain.peso > META_DE_PESO) {
    if (comeMucho()) {
        aumentarDePeso(efrain);
    }

    if (realizaDeorte()) {
        adelgazar(efrain);
    }
    dias += 1;
}

console.log(`Al inicio del año ${efrain.nombre} pesa ${efrain.peso} kg`);
console.log(`Pasaron ${dias} dias hasta que Efrain adelgazó 3 kg`);