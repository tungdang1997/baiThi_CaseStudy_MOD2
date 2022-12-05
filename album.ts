
import {ManagerSong} from "./ManagerSong";

export class Album extends ManagerSong{
    private _name: string;
    private _id: number;

    constructor(name: string, id: number) {
        super();
        this._name = name;
        this._id = id;
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
}