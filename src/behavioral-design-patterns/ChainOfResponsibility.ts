export type SupportRequest = "account" | "billing";

export abstract class SupportHandler {
    private nextHandler: SupportHandler | null = null;

    setNext(handler: SupportHandler): SupportHandler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: SupportRequest): string {
        if (this.canHandle(request)) {
            return this.resolve(request);
        }

        if (this.nextHandler !== null) {
            return this.nextHandler.handle(request);
        }

        return `No handler for ${request}`;
    }

    protected abstract canHandle(request: SupportRequest): boolean;
    protected abstract resolve(request: SupportRequest): string;
}

export class AccountSupportHandler extends SupportHandler {
    protected canHandle(request: SupportRequest): boolean {
        return request === "account";
    }

    protected resolve(): string {
        return "Account support handled the request.";
    }
}

export class BillingSupportHandler extends SupportHandler {
    protected canHandle(request: SupportRequest): boolean {
        return request === "billing";
    }

    protected resolve(): string {
        return "Billing support handled the request.";
    }
}
