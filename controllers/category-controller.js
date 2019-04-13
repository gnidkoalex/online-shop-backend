const categoryModel = require("../models/category-model");


class CategoryController{

    static getCategoreis(){
        return new Promise((resolve,reject)=>{
            categoryModel.find({},(err,results)=>{
                if (err) reject(err);
                if (!results) reject("error with ger categories");
                resolve(results);
            })
        })
    }

    static getCategoryByName(name){
        console.log(name,"inside controller")
        return new Promise((resolve,reject)=>{
            categoryModel.findOne({categoryName:name},(err,results)=>{
                if (err) reject(err);
                if (!results) reject("category does not exist");
                resolve(results);
            })
        })
    }
    

    // static createCart (customerId){
    //     return new Promise((resolve,reject)=>{
    //         let cart = new cartModel({customerId});
    //         console.log(cart)
    //         cart.save((err, result) => {
    //             if (err) {
    //                 console.log(err);
    //                 reject(err)
    //             } else {
    //                 resolve("cart added");
    //             }
    //         });
    //     })


    // }
}
module.exports=CategoryController;

