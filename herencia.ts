/* TypeScript es un lenguaje de programación que admite programación orientada a objetos y herencia. Aquí tienes un ejemplo simple de herencia en TypeScript: */

/* En este ejemplo, la clase Dog hereda de la clase base Animal. La clase Dog tiene un atributo adicional (breed) y un método adicional (fetch). Además, sobrescribe el método makeSound de la clase base para proporcionar una implementación específica para los objetos de tipo Dog. La llamada al constructor de la clase base (super(name)) se realiza en el constructor de la clase derivada. */

// Definición de la clase base
class Animal {

    // Atributos
    private name: string;

    // Constructor
    constructor(name: string) {
        this.name = name;
    }

    // Método
    public makeSound(): void {
        console.log("Some generic sound");
    }

}

// Clase derivada que hereda de Animal
class Dog extends Animal {

    // Nuevo atributo específico para la clase Dog
    private breed: string;

    // Constructor que llama al constructor de la clase base (Animal)
    constructor(name: string, breed: string) {
        super(name); // Llamada al constructor de la clase base
        this.breed = breed;
    }

    // Sobrescribe el método makeSound de la clase base
    public makeSound(): void {
        console.log("Woof! Woof!");
    }

    // Nuevo método específico para la clase Dog
    public fetch(): void {
        console.log("Fetching the ball");
    }
    
}

// Creación de instancias
const genericAnimal = new Animal("Generic Animal");
const dog = new Dog("Buddy", "Labrador");

// Uso de los objetos
console.log(genericAnimal.makeSound()); // Salida: Some generic sound
console.log(dog.makeSound()); // Salida: Woof! Woof!
console.log(dog.fetch()); // Salida: Fetching the ball