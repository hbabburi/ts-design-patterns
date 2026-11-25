export interface ShippingStrategy {
    calculateCost(weightKg: number): number;
}

export class StandardShipping implements ShippingStrategy {
    calculateCost(weightKg: number): number {
        return weightKg * 2;
    }
}

export class ExpressShipping implements ShippingStrategy {
    calculateCost(weightKg: number): number {
        return weightKg * 5;
    }
}

export class ShippingCostCalculator {
    constructor(private strategy: ShippingStrategy) {}

    setStrategy(strategy: ShippingStrategy): void {
        this.strategy = strategy;
    }

    calculate(weightKg: number): number {
        return this.strategy.calculateCost(weightKg);
    }
}
