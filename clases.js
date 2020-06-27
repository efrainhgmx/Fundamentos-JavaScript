//Para heredar 
/* function heredaDe(prototipoHijo, prototipoPadre) {
    //Hay que decirle al protitipo hijo, quien es su padre o de quien hereda
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
} */
class Persona {
    constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar(fn) {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    if (fn) {
        fn(this.nombre, this.apellido)
    }
  }

  soyAlto() {
      return this.altura > 1.7;
  }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
 }

    saludar(fn) {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y soy desarrollador`);
        if (fn) {
            fn(this.nombre, this.apellido, true)
        }
    }
}

function respondeSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if(esDev) {
        console.log('No sabia que eres Dev!');
    }
}

//Prototipo
/* function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}; */

/* Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

 Persona.prototype.soyAlto = function () {
     if(this.altura > 1.7) {
         console.log(`Mido ${this.altura} metros y soy alto`);
     } else if(this.altura < 1.7) {
         console.log(`Mido ${this.altura} y no soy alto`);
     }
 } */

 /* function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
 }; */

 /* heredaDe(Desarrollador, Persona); */

//Función que hereda de persona y de saludar.
 /* Desarrollador.prototype.saludar = function () {
     console.log(`Hola soy ${this.nombre} ${this.apellido} y soy desarrollador`);
 } */


 /* otra forma de hacer la función anterior
 Persona.prototype.soyAlto = () => this.altura > 1.7; */


// new crea un objeto partiendo del prototipo.
var efrain = new Persona('Efraín', 'Hernández', 1.80);
var carlos = new Persona('Carlos', 'Gil', 1.65);
var mario = new Persona('Mario', 'Ramirez', 1.75);
var oscar = new Persona('Oscar', 'Gomez', 1.60);
var martin = new Desarrollador('Martin', 'Aldana', 1.92);

efrain.saludar(respondeSaludo);
carlos.saludar();
martin.saludar(respondeSaludo);