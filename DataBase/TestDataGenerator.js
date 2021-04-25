"use strict"

const User=require('../Entities/User');
const Cart=require('../Entities/Cart');
const Product=require('../Entities/Product');

class TestDataGenerator{
    constructor(uof){
        this.uof=uof;
    }
    generateUsers(){
        const u1 = new User("Maksym","Chvartkovskyi");
        const u2 = new User("Vilka","Pastyria");
        const u3 = new User("Bohdan","Kasiudick");
        for (let user of [u1,u2,u3]){
            this.uof.UsersDb.insert(user);
            this.uof.CartsDb.insert(user.Cart)
        }
    }
    generateProducts(){
        const p1 = new Product(1,"Pen",10);
        const p2 = new Product(2,"Pencil",5);
        const p3 = new Product(3,"Notebook",25);
        for (let product of [p1,p2,p3]){
            this.uof.ProductsDb.insert(product);
        }
    }
    generateAll(){
        this.generateProducts();
        this.generateUsers();
        this.uof.UsersDb.get(1).Cart.addProduct(this.uof.ProductsDb.get(1))
        this.uof.UsersDb.get(2).Cart.addProduct(this.uof.ProductsDb.get(2))
        this.uof.UsersDb.get(2).Cart.addProduct(this.uof.ProductsDb.get(3))
        this.uof.UsersDb.get(3).Cart.addProduct(this.uof.ProductsDb.get(3))
    }
}
module.exports=TestDataGenerator;