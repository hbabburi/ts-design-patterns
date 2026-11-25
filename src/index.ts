import Bank from "./oop/Encapsulation";
import { Dog } from "./oop/Inheritance";
import { Circle, Rectangle, Shape } from "./oop/Polymorphisim";
import { CreditCardPayment, PayPalPayment, PaymentMethod } from "./oop/Abstraction";
import Singleton from "./creational-design-patterns/Singleton";
import PaymentFactory from "./creational-design-patterns/PaymentFactory";
import {
    AbstractFactory,
    MacFactory,
    WindowsFactory,
} from "./creational-design-patterns/AbstractFactory";
import { ComputerBuilder } from "./creational-design-patterns/Builder";
import Report from "./creational-design-patterns/Prototype";
import {
    FahrenheitToCelsiusAdapter,
    LegacyFahrenheitThermometer,
    TemperatureSensor,
} from "./structural-design-patterns/Adapter";
import { BasicRemoteControl, Television } from "./structural-design-patterns/Bridge";
import { File, Folder } from "./structural-design-patterns/Composite";
import {
    MilkDecorator,
    PlainCoffee,
    SugarDecorator,
} from "./structural-design-patterns/Decorator";
import {
    HomeTheaterFacade,
    MediaPlayer,
    Projector,
    SoundSystem,
} from "./structural-design-patterns/Facade";
import { Tree, TreeTypeFactory } from "./structural-design-patterns/Flyweight";
import { ImageProxy } from "./structural-design-patterns/Proxy";
import {
    AccountSupportHandler,
    BillingSupportHandler,
} from "./behavioral-design-patterns/ChainOfResponsibility";
import {
    CommandButton,
    Light,
    TurnOnLightCommand,
} from "./behavioral-design-patterns/Command";
import {
    AndExpression,
    VariableExpression,
} from "./behavioral-design-patterns/Interpreter";
import { NameCollection } from "./behavioral-design-patterns/Iterator";
import {
    ChatRoom,
    ChatUser,
} from "./behavioral-design-patterns/Mediator";
import {
    TextEditor,
} from "./behavioral-design-patterns/Memento";
import {
    TemperatureDisplay,
    WeatherStation,
} from "./behavioral-design-patterns/Observer";
import { TrafficLight } from "./behavioral-design-patterns/State";
import {
    ExpressShipping,
    ShippingCostCalculator,
    StandardShipping,
} from "./behavioral-design-patterns/Strategy";
import {
    Coffee as TemplateCoffee,
    Tea,
} from "./behavioral-design-patterns/TemplateMethod";
import {
    Heading,
    HtmlExportVisitor,
    Paragraph,
} from "./behavioral-design-patterns/Visitor";

// OOP principle: Encapsulation
const account = new Bank();
account.deposit(2000)
account.withdraw(200)
console.log(account.getBalance())


// OOP principle: Inheritance
const dog = new Dog();
console.log(dog.makeSound());

// OOP principle: Polymorphism
const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];
for (const shape of shapes) {
    console.log(shape.getArea());
}

// OOP principle: Abstraction
const payments: PaymentMethod[] = [
    new CreditCardPayment(100),
    new PayPalPayment(50),
];
for (const payment of payments) {
    console.log(payment.pay());
}

// Creational pattern: Singleton
const firstSingleton = Singleton.getInstance();
const secondSingleton = Singleton.getInstance();
console.log(firstSingleton === secondSingleton);

// Creational pattern: Factory
const factoryPayment = PaymentFactory.createPayment("credit-card", 75);
console.log(factoryPayment.pay());

// Creational pattern: Abstract Factory
const uiFactories: AbstractFactory[] = [new WindowsFactory(), new MacFactory()];
for (const factory of uiFactories) {
    console.log(factory.createButton().render());
    console.log(factory.createCheckbox().render());
}

// Creational pattern: Builder
const computer = new ComputerBuilder()
    .setCpu("8-core CPU")
    .setMemoryGb(16)
    .setStorageGb(512)
    .build();
console.log(computer);

// Creational pattern: Prototype
const reportTemplate = new Report("Monthly Report", ["Summary", "Metrics"]);
const novemberReport = reportTemplate.clone();
novemberReport.title = "November Report";
novemberReport.sections.push("Action Items");
console.log(reportTemplate, novemberReport);

// Structural pattern: Adapter
const temperatureSensor: TemperatureSensor = new FahrenheitToCelsiusAdapter(
    new LegacyFahrenheitThermometer(),
);
console.log(temperatureSensor.readCelsius());

// Structural pattern: Bridge
const television = new Television();
const remote = new BasicRemoteControl(television);
remote.togglePower();
console.log(television.isEnabled());

// Structural pattern: Composite
const folder = new Folder();
folder.add(new File(120));
folder.add(new File(80));
console.log(folder.getSize());

// Structural pattern: Decorator
const coffee = new SugarDecorator(new MilkDecorator(new PlainCoffee()));
console.log(coffee.getDescription(), coffee.getCost());

// Structural pattern: Facade
const homeTheater = new HomeTheaterFacade(
    new MediaPlayer(),
    new Projector(),
    new SoundSystem(),
);
console.log(homeTheater.watchMovie("Example Movie").join(", "));

// Structural pattern: Flyweight
const oakType = TreeTypeFactory.getTreeType("Oak", "green");
const trees = [new Tree(10, 20, oakType), new Tree(30, 40, oakType)];
console.log(trees.map((tree) => tree.describe()));

// Structural pattern: Proxy
const image = new ImageProxy("photo.png");
image.display();
image.display();

// Behavioral pattern: Chain of Responsibility
const supportChain = new AccountSupportHandler();
supportChain.setNext(new BillingSupportHandler());
console.log(supportChain.handle("billing"));

// Behavioral pattern: Command
const light = new Light();
const lightButton = new CommandButton(new TurnOnLightCommand(light));
console.log(lightButton.press());

// Behavioral pattern: Interpreter
const condition = new AndExpression(
    new VariableExpression("isLoggedIn"),
    new VariableExpression("hasPermission"),
);
console.log(condition.interpret({ isLoggedIn: true, hasPermission: true }));

// Behavioral pattern: Iterator
for (const name of new NameCollection(["Alice", "Bob"])) {
    console.log(name);
}

// Behavioral pattern: Mediator
const chatRoom = new ChatRoom();
const alice = new ChatUser("Alice", chatRoom);
new ChatUser("Bob", chatRoom);
console.log(alice.send("Hello!")[0]);

// Behavioral pattern: Memento
const editor = new TextEditor();
editor.write("Draft");
const savedDraft = editor.save();
editor.write("Changed");
editor.restore(savedDraft);
console.log(editor.getText());

// Behavioral pattern: Observer
const weatherStation = new WeatherStation();
const temperatureDisplay = new TemperatureDisplay();
weatherStation.subscribe(temperatureDisplay);
weatherStation.setTemperature(22);
console.log(temperatureDisplay.getTemperature());

// Behavioral pattern: State
const trafficLight = new TrafficLight();
trafficLight.change();
console.log(trafficLight.color());

// Behavioral pattern: Strategy
const shippingCalculator = new ShippingCostCalculator(new StandardShipping());
console.log(shippingCalculator.calculate(3));
shippingCalculator.setStrategy(new ExpressShipping());
console.log(shippingCalculator.calculate(3));

// Behavioral pattern: Template Method
console.log(new Tea().prepare().join(" -> "));
console.log(new TemplateCoffee().prepare().join(" -> "));

// Behavioral pattern: Visitor
const htmlVisitor = new HtmlExportVisitor();
const documentElements = [
    new Heading("Design Patterns"),
    new Paragraph("Visitor separates operations from document elements."),
];
console.log(documentElements.map((element) => element.accept(htmlVisitor)).join(""));