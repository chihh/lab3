const Cart=require("./Cart");
class User{
    constructor(
        FirstName,
        LastName,
        id = -1){
        this.id=id;
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.Cart=new Cart();
}
}
User.prototype.toString=function(){
    var ret=this.FirstName+" "+this.LastName;
    return ret;
}
module.exports=User;