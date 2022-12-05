import {Album} from "./album";


export class Song {
    private _name: string;
    private _id: number;
    private _album: Album


    constructor(name: string, id: number, album: Album) {
        this._name = name;
        this._id = id;
        this._album = album;
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

    get album(): Album {
        return this._album;
    }

    set album(value: Album) {
        this._album = value;
    }
}