export default class Bank {
    private balance = 0;

    deposit(amount: number): void {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Deposit amount must be a positive number.");
        }

        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Withdrawal amount must be a positive number.");
        }

        if (amount > this.balance) {
            throw new Error("Insufficient balance.");
        }

        this.balance -= amount;
    }

    getBalance(): number {
        return this.balance;
    }
}