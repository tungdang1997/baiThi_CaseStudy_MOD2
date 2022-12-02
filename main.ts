import {Song} from "./song";
import {Album} from "./album";
import {ManagerSong} from "./ManagerSong";
import {ManagerAlbum} from "./ManagerAlbum";

let input = require('readline-sync')
let manaSong = new ManagerSong();
let manaAlbum = new ManagerAlbum();

function addAlbum(): void {
    console.log('------Hiển thị thêm mới-----')
    let name = input.question('Enter name: ')
    let id = +input.question('Enter id: ')
    let album1 = new Album(name, id);
    manaAlbum.add(album1)
}

function findByAlbum() {
    let name = input.question('Enter name album need to find: ')
    manaAlbum.findByAlbum(name);
}

function showAlbum(){
    let albums = manaAlbum.findAll();
    let menuAlbums = ''
    for (let i = 0; i < albums.length; i++) {
        menuAlbums +=`
        ${i + 1} - Số album: ${albums[i].id}`
    }
    menuAlbums+= `\n\t0.Thoát`
    let choice = -1;
    do {
        console.log(menuAlbums)
        choice = +input.question('Enter choice: ')
        if (choice === 0){
            break;
        }else {
            let album = manaAlbum.finByIndex(choice - 1);
            showMenuSong(album)
        }
    }while (choice != 0);
    console.log(menuAlbums)
}

function addSong() {
    console.log('-------Hiển thị thêm mới------')
    let name = input.question('Enter name: ')
    let id = +input.question('Enter id: ')
    let song1 = new Song(name, id);
    manaSong.add(song1);
}

function findBySong() {
    let song = input.question('Enter name song need to find: ');
    manaSong.findBySong(song)
}



function displayAllSong() {
    console.log('-------Hiển thị danh sách bài hát------')
    console.table(manaSong.findAllSong())
}


function editSong() {
    let idedit = +input.question('Enter id edit: ')
    let name = input.question('Enter name: ')
    let id = +input.question('Enter id: ')
    let song1 = new Song(name, id)
    manaSong.edit(idedit, song1)
}

function deleteSong() {
    let id = +input.question('Enter id delete: ')
    manaSong.remove(id)
}

// function menuDeleteSong(){
//     let id = +input.question('Enter id song: ')
//     let select = `-----Bạn có chắc muốn xoá song?-----
//     1. Yes
//     2. No`
//     let choice1;
//     do {
//         console.log(select)
//         choice1 = +input.question('Enter select: ')
//         switch (choice1){
//             case 1:
//                 deleteSong(id);
//                 break;
//             case 2:
//                 main()
//                 break
//         }
//     }
//     while (choice1 != 0)
//
// }



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
                addSong();
                break;
            case 2:
                findBySong();
                break;
            case 3:
                displayAllSong();
                break;
            case 4:
                editSong();
                break;
            case 5:
                deleteSong();
                break;
            case 0:
                break;
        }
    }while (choice != 0)
}


// function displayAllAlbum() {
//     console.log('-------Hiển thị album------')
//     console.log(manaAlbum.findAllAlbum())
// }

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

// function menuDeleteAlbum() {
//     let id = +input.question('Enter id album: ')
//     let select = `-----Bạn có chắc muốn xoá album?-----
//     1. Yes
//     2. No`
//     let choice1;
//     do {
//         console.log(select)
//         choice1 = +input.question('Enter select: ')
//         switch (choice1){
//             case 1:
//                 deleteAlbum(id);
//                 break;
//             case 2:
//                 main()
//                 break
//         }
//     }
//     while (choice1 != 0)
// }

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
    }while (choice != 0)
}
main();