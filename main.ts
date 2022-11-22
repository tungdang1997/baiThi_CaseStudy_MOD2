import {Laptop} from "./model";
import {Gaming} from "./model";
import {Office} from "./model";
import {TechnicalGraphics} from "./model";
import {IManagement} from "./IManagement";
import {ProductMana} from "./productMana";


let readlineSync = require('readline-sync');
let productMana = new ProductMana()


function addMenu(){
    let menu = `---------Bạn muốn thêm dòng máy nào-----------
    1.Gaming
    2.Office
    3.TechnicalGraphics
    0.Ra menu chính`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                addGaming();
                break;
            case 2:
                addOffice();
                break;
            case 3:
                addTechnicalGraphics();
                break;

        }
    } while (choice !== 0);
}

function addGaming(): void {
    console.log('------Hiển thị thêm mới------')
    let name = readlineSync.question('Enter name: ');
    let id = +readlineSync.question('Enter id: ');
    let producer = readlineSync.question('Enter producer: ');
    let price = +readlineSync.question('Enter price: ');
    let CPU = readlineSync.question('Enter CPU: ');
    let gaming1 = new Gaming(name, id, producer, price, CPU);
    productMana.add(gaming1)
}

function addOffice(): void {
    console.log('------Hiển thị thêm mới------')
    let name = readlineSync.question('Enter name: ');
    let id = +readlineSync.question('Enter id: ');
    let producer = readlineSync.question('Enter producer: ');
    let price = +readlineSync.question('Enter price: ');
    let HDD = readlineSync.question('Enter HDD: ')
    let office1 = new Office(name, id, producer, price, HDD);
    productMana.add(office1)
}

function addTechnicalGraphics(): void {
    console.log('------Hiển thị thêm mới------')
    let name = readlineSync.question('Enter name: ');
    let id = +readlineSync.question('Enter id: ');
    let producer = readlineSync.question('Enter producer: ');
    let price = +readlineSync.question('Enter price: ');
    let RAM = +readlineSync.question('Enter RAM: ');
    let technicalGraphics1 = new TechnicalGraphics(name, id, producer, price, RAM);
    productMana.add(technicalGraphics1)
}

function deleteProduct() {
    let idDelete = readlineSync.question('Enter id delete : ')
    productMana.remove(idDelete);
}
function editProduct() {
    let idEdit = +readlineSync.question('Enter id edit : ')
    console.log('-------Form sửa sản phầm----------')
    let name = readlineSync.question('Enter name: ');
    let id = +readlineSync.question('Enter id: ');
    let producer = readlineSync.question('Enter producer: ');
    let price = +readlineSync.question('Enter price: ');
    let laptop1 = new Laptop(name, id, producer, price);
    productMana.edit(idEdit, laptop1);
}
function findByName(){
    let name = readlineSync.question('Enter name need to find : ')
    productMana.findByName(name)
}
function findByPrice() {
    let priceMin = readlineSync.question('Enter price min need to find: ');
    let priceMax = readlineSync.question('Enter price max need to find: ')
    // @ts-ignore
    productMana.findByPrice(priceMin,priceMax)
}
function display(): void {
    console.log('------Hiển thị sản phẩm-----')
    console.table(productMana.findAll());
}
function main(){
    let menu = `---------Menu chính-----------
    1.Thêm mới dòng máy
    2.Xoá máy
    3.Sửa máy
    4.Tìm kiếm theo tên
    5.Tìm kiếm theo khoảng giá
    6.Hiển thị danh sách máy
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
                deleteProduct();
                break;
            case 3:
                editProduct();
                break;
            case 4:
                findByName();
                break;
            case 5:
                findByPrice();
            case  6:
                display();
                break;
        }
    } while (choice !== 0);
}
main();
