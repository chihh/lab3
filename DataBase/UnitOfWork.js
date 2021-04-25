let db=require("./MyDataBase");

class UnitOfWork{
    constructor(){
        this.CartsDb=new db();
        this.ProductsDb=new db();
        this.UsersDb=new db();
    }
}
module.exports=UnitOfWork;