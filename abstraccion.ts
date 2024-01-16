/* Claro, aquí tienes un ejemplo sencillo de abstracción utilizando TypeScript. En este ejemplo, vamos a crear una clase Vehiculo que representará de manera abstracta a cualquier tipo de vehículo. La abstracción se logrará al modelar solo los aspectos relevantes de un vehículo: */

/* En este ejemplo, la clase abstracta Vehiculo encapsula la información común a cualquier vehículo, como la marca y el modelo. Además, define un método abstracto obtenerInformacion() que obliga a las clases concretas (como Automovil y Motocicleta) a proporcionar su propia implementación para obtener información específica del tipo de vehículo. Este es un ejemplo de abstracción, ya que se modelan solo los detalles esenciales de un vehículo sin preocuparse por implementaciones específicas. */

// Definición de la clase abstracta Vehiculo
abstract class Vehiculo {

    private marca: string;
    private modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    // Método abstracto para obtener la información del vehículo
    abstract obtenerInformacion(): string;

    // Métodos para acceder a la marca y modelo
    getMarca(): string {
        return this.marca;
    }

    getModelo(): string {
        return this.modelo;
    }

}

// Clase concreta que hereda de Vehiculo (representa un automóvil)
class Automovil extends Vehiculo {

    private numPuertas: number;

    constructor(marca: string, modelo: string, numPuertas: number) {
        super(marca, modelo);
        this.numPuertas = numPuertas;
    }

    // Implementación del método abstracto
    obtenerInformacion(): string {
        return `Automóvil: ${this.getMarca()} ${this.getModelo()}, Puertas: ${this.numPuertas}`;
    }

}

// Clase concreta que hereda de Vehiculo (representa una motocicleta)
class Motocicleta extends Vehiculo {

    private cilindrada: number;

    constructor(marca: string, modelo: string, cilindrada: number) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }

    // Implementación del método abstracto
    obtenerInformacion(): string {
        return `Motocicleta: ${this.getMarca()} ${this.getModelo()}, Cilindrada: ${this.cilindrada} cc`;
    }

}

// Creación de instancias y uso de la abstracción
const auto = new Automovil("Toyota", "Corolla", 4);
const moto = new Motocicleta("Honda", "CBR500R", 500);

console.log(auto.obtenerInformacion()); // Salida: Automóvil: Toyota Corolla, Puertas: 4
console.log(moto.obtenerInformacion()); // Salida: Motocicleta: Honda CBR500R, Cilindrada: 500 cc






/* entonces en palabras simples la abstraccion es tomar un objeto y hacer clases apartir de este pero que tengan implementaciones diferentes? */

/* Sí, eso es una manera de entender la abstracción. En términos simples, la abstracción implica identificar las características esenciales de un objeto del mundo real y modelar esas características mediante clases en la programación. Estas clases actúan como plantillas o modelos que pueden tener implementaciones diferentes, pero comparten ciertos aspectos fundamentales. */

/* En el ejemplo anterior, la abstracción se logró al crear la clase abstracta Vehiculo, que define propiedades comunes como marca y modelo, así como un método abstracto obtenerInformacion(). Las clases concretas, como Automovil y Motocicleta, heredan de la clase abstracta y proporcionan implementaciones específicas para el método abstracto, reflejando así las diferencias entre los tipos de vehículos. Este enfoque permite trabajar con la abstracción general de un "vehículo" sin preocuparse por las implementaciones específicas de automóviles o motocicletas. */