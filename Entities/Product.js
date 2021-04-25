class Product{
    constructor(id= -1,
                name,
                price) {
        this.id=id;
        this.name=name;
        this.price=price;
    }
}
Product.prototype.toString=function(){
    var ret=this.name+" "+this.price;
    return ret;
}

module.exports=Product;