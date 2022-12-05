import {IManagement} from "./IManagement";
import {Album} from "./album";


export class ManagerAlbum implements IManagement<Album> {
    listAlbum: Album[] = [];


    add(t: Album): void {
        this.listAlbum.push(t)
    }

    edit(id: number, t: Album): void {
        let index = this.findById(id);
        if (index === -1) {
            console.log('Not Found')
        } else {
            this.listAlbum[index] = t
        }

    }

    findAll(): Album[] {
        return this.listAlbum
    }


    findByAlbum(name: string): void {
        let a = this.listAlbum.filter((item) => item.name.toUpperCase().includes(name.toUpperCase()))
        if (a.length === 0) {
            console.log('Not Found')
        } else {
            console.log(a)
        }
    }

    remove(id: number): void {
        let index = this.findById(id)
        this.listAlbum.splice(index, 1)
    }

    findById(id: number): number {
        for (let i = 0; i < this.listAlbum.length; i++) {
            if (this.listAlbum[i].id === id) {
                return i;
            }
        }
        return -1;
    }

    finByIndex(index: number): Album {
        return this.listAlbum[index]
    }


}