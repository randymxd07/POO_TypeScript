/* TypeScript es un superset de JavaScript que agrega tipos estáticos a este último, lo que facilita el trabajo con conceptos de programación orientada a objetos. Aquí tienes un ejemplo simple de polimorfismo en TypeScript: */

/* En este ejemplo, la interfaz Animal define un método hacerSonido(). Luego, las clases Perro y Gato implementan esta interfaz proporcionando sus propias implementaciones del método hacerSonido(). La función hacerSonidoAnimal acepta cualquier objeto que implemente la interfaz Animal y llama al método hacerSonido() en ese objeto. Cuando llamamos a esta función con instancias de Perro y Gato, se produce polimorfismo, ya que el mismo método (hacerSonido()) se comporta de manera diferente según el tipo concreto de objeto que se pasa a la función. */

// Definición de una interfaz
interface Animal {
    hacerSonido(): void;
}

// Implementación de la interfaz en una clase base
class Perro implements Animal {
    hacerSonido(): void {
        console.log("Guau Guau");
    }
}

// Otra implementación de la interfaz en una clase derivada
class Gato implements Animal {
    hacerSonido(): void {
        console.log("Miau");
    }
}

// Función que acepta cualquier objeto que implemente la interfaz Animal
function hacerSonidoAnimal(animal: Animal): void {
    animal.hacerSonido();
}

// Crear instancias de las clases
const miPerro = new Perro();
const miGato = new Gato();

// Llamar a la función con diferentes instancias
hacerSonidoAnimal(miPerro); // Salida esperada: "Guau Guau"
hacerSonidoAnimal(miGato);  // Salida esperada: "Miau"







/* ok entonces segun tengo entendido el polimorfismo es basicamente tener clases similares pero con comportamientos diferentes? */

/* Sí, tu entendimiento es correcto. El polimorfismo implica que objetos de diferentes clases pueden ser tratados como objetos de una clase común si implementan una interfaz o heredan de una clase base. En otras palabras, se refiere a la capacidad de un mismo método, propiedad o función para actuar de manera diferente según el tipo del objeto al que se aplica. */

/* En el ejemplo que proporcioné, las clases Perro y Gato implementan la misma interfaz Animal. Ambas clases tienen un método llamado hacerSonido(), pero el comportamiento de ese método es diferente en cada clase. Cuando llamamos a la función hacerSonidoAnimal y le pasamos una instancia de Perro o Gato, estamos utilizando polimorfismo, ya que la función puede manejar objetos de diferentes tipos de manera transparente, utilizando el mismo nombre de método (hacerSonido()), pero ejecutando la implementación específica de cada clase. */

/* En resumen, el polimorfismo permite que diferentes clases proporcionen implementaciones específicas para los mismos métodos o propiedades definidos en una interfaz común, facilitando así el diseño de software más flexible y extensible. */