import {Album} from "./album";

export class Song {
    name: string;
    id: number

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }


    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getId(): number {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }
}