import {Song} from "./song";
import {Album} from "./album";
import {ManagerSong} from "./ManagerSong";
import {ManagerAlbum} from "./ManagerAlbum";


let input = require('readline-sync')
let manaSong = new ManagerSong();
let manaAlbum = new ManagerAlbum();

function addAlbum(): void {
    console.log('------Show more new-----')
    let name = input.question('Enter name: ')
    let id = +input.question('Enter id: ')
    let album = new Album(name, id);
    for (let i = 0; i < manaAlbum.listAlbum.length; i++) {
        if (manaAlbum.listAlbum[i].id === id) {
            return console.log('---Same ID, please re-enter---')
        }
    }
    if (name === '') {
        return console.log('___________________Names cannot be left blank________________________')
    }
    manaAlbum.add(album);

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
        ${i + 1} - Number album: ${albums[i].id}`
    }
    menuAlbums += `\n\t0.Exit`
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
    console.log('-------Show more new------')
    let name = input.question('Enter name: ')
    let id = +input.question('Enter id: ')
    let song = new Song(name, id, album);
    for (let i = 0; i < manaSong.listSong.length; i++) {
        if (manaSong.listSong[i].id === id) {
            return console.log('---Same ID, please re-enter---')
        }
    }
    if (name === '') {
        return console.log('___________________Names cannot be left blank________________________')
    }

    manaSong.add(song);
    showMenuSong(album)

}

function findBySong() {
    let song = input.question('Enter name song need to find: ');
    manaSong.findBySong(song)
}

function editSong(album: Album) {
    let idEdit = +input.question('Enter id edit: ')
    let name = input.question('Enter name: ')
    let id = +input.question('Enter id: ')
    let song1 = new Song(name, id, album)

    for (let i = 0; i < manaSong.listSong.length; i++) {

        if (manaSong.listSong[i].name === name) {
            return console.log('--- Same name, please re-enter---')
        } else {
            manaSong.edit(idEdit, song1)
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
    let main = `------Menu Song------
     1. Add Song
     2. Find Song
     3. Show Song
     4. Edit Song
     5. Delete Song
     0. Exit`
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
    let idEdit1 = +input.question('Enter id edit: ')
    let name = input.question('Enter name: ')
    let id = +input.question('Enter id: ')
    let album1 = new Album(name, id)
    manaAlbum.edit(idEdit1, album1)
}

function deleteAlbum() {
    let idDelete = +input.question('Enter id delete: ')
    manaAlbum.remove(idDelete)
}

function main() {
    let main = `------Page------
     1. Add album
     2. Find album
     3. Show album
     4. Edit album
     5. Delete album
     0. Exit`
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