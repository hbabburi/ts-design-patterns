// @ts-ignore
class Animal {
    speak() {
        console.log("Animal sound");
    }
}

// @ts-ignore
const animal = new Animal();

setInterval(() => {
    animal.speak();
}, 2000);
