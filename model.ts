export class Laptop {
    private _name: string;
    private _id: number
    private _producer: string;
    private _price: number;

    constructor(name: string, id: number, producer: string, price: number) {
        this._name = name;
        this._id = id;
        this._producer = producer;
        this._price = price;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get producer(): string {
        return this._producer;
    }

    set producer(value: string) {
        this._producer = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
}

export class Gaming extends Laptop{

    CPU: string;


    constructor(name: string, id: number, producer: string, price: number, CPU: string) {
        super(name, id, producer, price);
        this.CPU = CPU;
    }
}

export class Office extends Laptop{
    HDD: string;

    constructor(name: string, id: number, producer: string, price: number, HDD: string) {
        super(name, id, producer, price);
        this.HDD = HDD;
    }
}

export class TechnicalGraphics extends Laptop{
    RAM: number;


    constructor(name: string, id: number, producer: string, price: number, RAM: number) {
        super(name, id, producer, price);
        this.RAM = RAM;
    }
}

