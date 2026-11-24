import Bank from "./oop/Encapsulation";
import { Dog } from "./oop/Inheritance";
import { Circle, Rectangle, Shape } from "./oop/Polymorphisim";
import { CreditCardPayment, PayPalPayment, PaymentMethod } from "./oop/Abstraction";
import Singleton from "./creational-design-pattern/Singleton";

const account = new Bank();
account.deposit(2000)
account.withdraw(200)
console.log(account.getBalance())


const dog = new Dog();
console.log(dog.makeSound());

const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];
for (const shape of shapes) {
    console.log(shape.getArea());
}

const payments: PaymentMethod[] = [
    new CreditCardPayment(100),
    new PayPalPayment(50),
];
for (const payment of payments) {
    console.log(payment.pay());
}

const firstSingleton = Singleton.getInstance();
const secondSingleton = Singleton.getInstance();
console.log(firstSingleton === secondSingleton);