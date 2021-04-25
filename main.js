const TestDataGenerator=require("./DataBase/TestDataGenerator");
const UnitOfWork=require("./DataBase/UnitOfWork");
const User=require("./Entities/User");
const Cart=require("./Entities/Cart");
const Product=require("./Entities/Product");

const uof=new UnitOfWork()
const generator=new TestDataGenerator(uof);
generator.generateAll();

console.log("First product is "+uof.UsersDb.get(1));
