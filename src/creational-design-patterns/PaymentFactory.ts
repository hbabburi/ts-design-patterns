import {
    CreditCardPayment,
    PayPalPayment,
    PaymentMethod,
} from "../oop/Abstraction";

export type PaymentType = "credit-card" | "paypal";

export default class PaymentFactory {
    static createPayment(type: PaymentType, amount: number): PaymentMethod {
        switch (type) {
            case "credit-card":
                return new CreditCardPayment(amount);
            case "paypal":
                return new PayPalPayment(amount);
        }
    }
}
