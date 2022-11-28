import {Laptop} from "./model";

export interface IManagement<T>{
    add(t: T): void;
    findAll(): T[];
    edit(id: number,t:Laptop): void;
    remove(id: number):void;
    findByName(name: string): void;
    findByPrice(priceMin: number,  priceMax: number): void;
}