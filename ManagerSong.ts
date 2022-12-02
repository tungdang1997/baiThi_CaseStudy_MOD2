import {IManagement} from "./IManagement";
import {Song} from "./song";


export class ManagerSong implements IManagement<Song>{
    listSong: Song[] = [];
    
    add(t: Song): void {
        this.listSong.push(t)
    }

    edit(id: number, t: Song): void {
        let index = this.findById(id);
        this.listSong[index] = t
    }
    findAll() {
        return this.listSong
    }

    findAllSong(){
        let strAlbum = ``;
        for (let i = 0; i < this.listSong.length; i++) {
            strAlbum += `${i +1} Id: ${this.listSong[i].id}. Name: ${this.listSong[i].name}`
        }
        return strAlbum;
    }

    findBySong(name: string): void {
        let b = this.listSong.filter((item)=>item.name.toUpperCase().includes(name.toUpperCase()))
        if (b.length === 0){
            console.log('Not Found')
        }else {
            console.log(b)
        }
    }

    remove(id: number): void {
        let index = this.findById(id)
        this.listSong.splice(index, 1)
    }
    findById(id: number): number {
        for (let i = 0; i < this.listSong.length; i++) {
            if (this.listSong[i].id === id){
                return i;
            }
        }return -1;
    }

}