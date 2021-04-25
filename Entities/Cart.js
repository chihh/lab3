class Cart{
    constructor() {
        //id = -1
        //this.id = id;
        this.products = [];
    }

    ///Should be transported to services
    addProduct(product){
        this.products.push(product);
    }
}
module.exports=Cart;