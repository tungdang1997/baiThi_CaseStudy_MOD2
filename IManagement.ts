export interface IManagement<T>{
    add(t: T): void;
    findAll(): T[];
    edit(id: number): void;
    remove(id: number):void;
    findByName(name: string): string;
    findByPrice(price: number): number;
}