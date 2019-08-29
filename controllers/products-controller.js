const productsModel = require("../models/products-model");


class ProductsController{

    static getProducts(){
        return new Promise((resolve,reject)=>{
            productsModel.find({},(err,results)=>{
                if(err) reject(err);
                resolve(results)
            })
        })
    }

    static getProductsById(id){
        return new Promise((resolve,reject)=>{
            productsModel.find({categoryId:id},(err,results)=>{
                if(err) reject(err);
                resolve(results)
            })
        })
    }

    static getProductToEdit(id){
        return new Promise((resolve,reject)=>{
            productsModel.findById(id,(err,results)=>{
                if(err) reject(err);
                resolve(results)
            })
        })
    }


    
}
module.exports=ProductsController;

