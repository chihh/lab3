"use strict"

class MyDataBase {
    constructor(){
        this.map = new Map();
        this.currentId=1;
    }
    insert(val){
        val.id=this.currentId++;
        this.map.set(val.id,val);
    }
    get(id){
        return this.map.get(id);
    }
    update(id,val){
        val.id=id;
        this.map.set(id,val);
    }
    delete(id){
        this.map.delete(id);
    }
    has(id){
        return this.map.has(id);
    }
    findByVal(val){
        for (var id in this.map.keys){
            if (this.get(id)===val){
                return id
            }
        }
        return null;
    }
}
module.exports=MyDataBase;