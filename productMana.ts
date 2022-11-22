import {Laptop} from "./model";

import {IManagement} from "./IManagement";

export class ProductMana implements IManagement<Laptop> {
    public productList: Laptop[] = [];

    add(t: Laptop): void {
        this.productList.push(t)
    }

    findAll(): Laptop[] {
        return this.productList
    }

    // @ts-ignore
    findByName(name: string): Laptop | string {
        let a = this.productList.filter((element)=> element.name === name);
         console.table(a)
    }
    // @ts-ignore
    findByPrice(priceMin: number, priceMax: number): Laptop | number{
        let b = this.productList.filter((item)=>{
            if (item.price >= priceMax && item.price <= priceMin){
                return true;
            }else {
                return false
            }
        });
        console.table(b)
    }

    findById(id: number): number {
        for (let i = 0; i < this.productList.length; i++) {
            if (this.productList[i].id === id) {
                return i;
            }
        }
        return -1;
    }

    remove(id: number): void {
        let index = this.findById(+id);
        if (index === -1) {
            console.log('Không tìm thấy sản phẩm này!')
        } else {
            this.productList.splice(index, 1);
            console.log('Xóa thành công!')
        }
    }

    // @ts-ignore
    edit(id: number, t: Laptop): void {
        let index = this.findById(+id);
        if (index === -1) {
            console.log('Không có')
        } else {
            this.productList[index] = t;
            console.log('Sửa thành công')
        }
    }
}

