import {People} from "../MOD2/case_mod2/people";
import {Family} from "../MOD2/case_mod2/people";
import {IManagement} from "../MOD2/case_mod2/IManagement";
import {ProductMana} from "../MOD2/case_mod2/town";

let readlineSync = require('readline-sync');
let productMana = new ProductMana()


function main(){
    let menu = `---------Menu chính-----------
    1.Thêm mới ho gia dinh
    4.Tìm kiếm theo id
    5.Hiển thị danh sách ho gia dinh
    0.Thoát chương trình`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                addMenu();
                break;
            case 2:
                findById();
                break;
            case  3:
                display();
                break;
        }
    } while (choice !== 0);
}
main();
function addMenu(){
    let menu = `---------Bạn muốn thêm-----------
    1.People
    2.Family
    0.Ra menu chính`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                addPeople();
                break;
            case 2:
                addFamily();
                break;

        }
    } while (choice !== 0);
}
addMenu();
function addPeople(): void {
    console.log('------Hiển thị thêm mới------')
    let fullName = readlineSync.question('Enter fullName: ');
    let age = +readlineSync.question('Enter age: ');
    let word = readlineSync.question('Enter word: ');
    let id = +readlineSync.question('Enter id: ');
    let people1 = new People(fullName, age, word, id);
    productMana.add(people1)
}
function addFamily(): void {
    console.log('------Hiển thị thêm mới------')
    let members = readlineSync.question('Enter members: ');
    let apartment = +readlineSync.question('Enter apartment: ');
    // @ts-ignore
    let family1 = new Family(members, apartment);
    productMana.add(family1)
}

function findById(){
    let id = readlineSync.question('Enter name need to find : ')
    productMana.findById(id)
}

function display(): void {
    console.log('------Hiển thị sản phẩm-----')
    console.table(productMana.findAll());
}