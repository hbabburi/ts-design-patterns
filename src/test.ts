interface UserDetails {
    name: string;
    age: number;
    email: string;
}

interface Prototype {
    clone(): Prototype;
    getUserDetails(): UserDetails
}

export default class ConcretePrototype implements Prototype {
    constructor(private user: UserDetails) { }

    // @ts-ignore
    clone(): Prototype {
        const clone = Object.create(this);
        clone.user = { ...this.user }
        return clone;
    }

    getUserDetails(): UserDetails {
        return this.user;
    }
}
