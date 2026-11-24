export abstract class PaymentMethod {
    constructor(protected amount: number) {}

    pay(): string {
        return this.processPayment();
    }

    protected abstract processPayment(): string;
}

export class CreditCardPayment extends PaymentMethod {
    protected processPayment(): string {
        return `Paid $${this.amount} by credit card.`;
    }
}

export class PayPalPayment extends PaymentMethod {
    protected processPayment(): string {
        return `Paid $${this.amount} by PayPal.`;
    }
}
