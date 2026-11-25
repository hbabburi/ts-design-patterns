export class ChatRoom {
    private users: ChatUser[] = [];

    register(user: ChatUser): void {
        this.users.push(user);
    }

    send(sender: ChatUser, message: string): string[] {
        return this.users
            .filter((user) => user !== sender)
            .map((user) => user.receive(sender.name, message));
    }
}

export class ChatUser {
    constructor(
        public readonly name: string,
        private chatRoom: ChatRoom,
    ) {
        chatRoom.register(this);
    }

    send(message: string): string[] {
        return this.chatRoom.send(this, message);
    }

    receive(sender: string, message: string): string {
        return `${sender}: ${message}`;
    }
}
