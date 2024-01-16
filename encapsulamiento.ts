/* Claro, aquí tienes un ejemplo sencillo de encapsulamiento en TypeScript. En TypeScript, puedes utilizar modificadores de acceso como public, private y protected para controlar el acceso a los miembros de una clase. Aquí hay un ejemplo que demuestra el encapsulamiento con un setter y un getter: */

/* En este ejemplo, la variable _edad está marcada como private, lo que significa que no se puede acceder directamente desde fuera de la clase. Se proporciona un getter (get edad()) para obtener el valor de _edad y un setter (set edad()) para establecerlo con validación. Esto encapsula el atributo _edad y permite un control más preciso sobre cómo se accede y modifica desde fuera de la clase. */

class Persona {

    // Atributo privado
    private _edad: number;
    private _nombre: string;

    // Constructor
    constructor(nombre: string, edad: number) {
        this._nombre = nombre;
        this._edad = edad;
    }

    // Getter para obtener la edad
    get edad(): number {
        return this._edad;
    }

    // Setter para establecer la edad (con validación)
    set edad(nuevaEdad: number) {
        if (nuevaEdad >= 0 && nuevaEdad <= 120) {
            this._edad = nuevaEdad;
        } else {
            console.error("Edad inválida");
        }
    }

    // Método público para mostrar la información de la persona
    mostrarInformacion(): void {
        console.log(`Nombre: ${this._nombre}, Edad: ${this._edad}`);
    }

}

// Crear una instancia de Persona
const persona1 = new Persona("Juan", 25);

// Intentar establecer la edad directamente (esto no funcionará debido a la encapsulación)
// persona1._edad = 30; // Esto daría un error

// Utilizar el setter para establecer la edad (con validación)
persona1.edad = 30; // Esto funciona porque se usa el setter

// Obtener la edad utilizando el getter
console.log(`Edad: ${persona1.edad}`);

// Llamar a un método público
persona1.mostrarInformacion();



/* ok entonces el encapsulamiento es basicamente restringir el acceso a un atributo que esta en una clase pero que esta clase se pueda modificar o observer con getters y setters? si en dado caso se necesita? */

/* Correcto, has entendido bien el concepto de encapsulamiento. En la Programación Orientada a Objetos (POO), el encapsulamiento implica ocultar los detalles internos de implementación de un objeto y proporcionar una interfaz controlada para interactuar con ese objeto. Esto se logra restringiendo el acceso directo a los atributos de la clase y permitiendo el acceso controlado a través de métodos, como getters y setters. */