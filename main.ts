import {Song} from "./song";
import {Album} from "./album";
import {ManagerSong} from "./ManagerSong";
import {ManagerAlbum} from "./ManagerAlbum";
import {log} from "util";

let input = require('readline-sync')
let manaSong = new ManagerSong();
let manaAlbum = new ManagerAlbum();

function addAlbum(): void {
    console.log('------Hiển thị thêm mới-----')
    let name = input.question('Enter name: ')
    let id = +input.question('Enter id: ')
    let album = new Album(name, id);
    for (let i = 0; i < manaAlbum.listAlbum.length; i++) {
        if (manaAlbum.listAlbum[i].id === id) {
            return console.log('---Trùng id, vui lòng nhập lại---')
        }
    }
    if (name === '') {
        return console.log('___________________Không được để chống tên________________________')
    } else {
        let album = new Album(name, id);
        manaAlbum.add(album)

    }

    manaAlbum.add(album)
}

function findByAlbum() {
    let name = input.question('Enter name album need to find: ')
    manaAlbum.findByAlbum(name);
}

function showAlbum() {
    let albums = manaAlbum.findAll();
    let menuAlbums = ''
    for (let i = 0; i < albums.length; i++) {
        menuAlbums += `
        ${i + 1} - Số album: ${albums[i].id}`
    }
    menuAlbums += `\n\t0.Thoát`
    console.log(albums)
    let choice = -1;
    do {
        console.log(menuAlbums)
        choice = +input.question('Enter choice: ')
        if (choice === 0) {
            break;
        } else {
            let album1 = manaAlbum.finByIndex(choice - 1);
            showMenuSong(album1)
        }
    } while (choice != 0);
    console.log(menuAlbums)
}

function addSong(album: Album) {
    console.log('-------Hiển thị thêm mới------')
    let name = input.question('Enter name: ')
    let id = +input.question('Enter id: ')
    let song = new Song(name, id, album);
    for (let i = 0; i < manaSong.listSong.length; i++) {
        if (manaSong.listSong[i].id === id) {
            return console.log('---Trùng id, vui lòng nhập lại---')
        }
    }
    if (name === '') {
        return console.log('___________________Không được để chống tên________________________')
    } else {
        let song = new Song(name, id, album);
        manaSong.add(song);


    }
    manaSong.add(song);

    showMenuSong(album)

}

function findBySong() {
    let song = input.question('Enter name song need to find: ');
    manaSong.findBySong(song)
}

function editSong(album: Album) {
    let idedit = +input.question('Enter id edit: ')
    let name = input.question('Enter name: ')
    let id = +input.question('Enter id: ')
    let song1 = new Song(name, id, album)

    for (let i = 0; i < manaSong.listSong.length; i++) {

        if (manaSong.listSong[i].name === name) {
            return console.log('--- Trùng tên,vui lòng nhập lại---')
        } else {
            manaSong.edit(idedit, song1)
        }
    }


    showMenuSong(album)
}

function deleteSong() {
    let id = +input.question('Enter id delete: ')
    manaSong.remove(id)
}

function displaySongInAlbum(album: Album) {
    let list = manaSong.findSongByAlbum(album)
    console.log(list)
}


function showMenuSong(album: Album) {
    let main = `------Menu bài hát------
     1. Thêm bài hát
     2. Tìm kiếm bài hát
     3. Hiển thị bài hát
     4. Sửa bài hát
     5. Xoá bài hát
     0. Thoát`
    let choice = -1;
    do {
        console.log(main)
        choice = +input.question('Enter choice: ')
        switch (choice) {
            case 1:
                addSong(album);
                break;
            case 2:
                findBySong();
                break;
            case 3:
                displaySongInAlbum(album);
                break;
            case 4:
                editSong(album);
                break;
            case 5:
                deleteSong();
                break;
            case 0:
                break;
        }
    } while (choice != 0)
}


function editAlbum() {
    let idedit1 = +input.question('Enter id edit: ')
    let name = input.question('Enter name: ')
    let id = +input.question('Enter id: ')
    let album1 = new Album(name, id)
    manaAlbum.edit(idedit1, album1)
}

function deleteAlbum() {
    let idDelete = +input.question('Enter id delete: ')
    manaAlbum.remove(idDelete)
}

function main() {
    let main = `------Trang chủ------
     1. Thêm album
     2. Tìm kiếm album
     3. Hiển thị album
     4. Sửa album
     5. Xoá album
     0. Thoát`
    let choice = -1;
    do {
        console.log(main)
        choice = +input.question('Enter choice: ')
        switch (choice) {
            case 1:
                addAlbum();
                break;
            case 2:
                findByAlbum();
                break;
            case 3:
                showAlbum()
                break;
            case 4:
                editAlbum();
                break;
            case 5:
                deleteAlbum();
                break;
            case 0:
                break;
        }
    } while (choice != 0)
}

main();