export interface IManagement<T>{
    add(t: T): void;
    findAll(): T[];
    edit(id: number, t: T): void;
    remove(id: number):void;
    findById(id: number): number;

}