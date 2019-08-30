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

    static updateProductWithPic(pic,data){
        return new Promise((resolve,reject)=>{
            let staticUrl= `http://localhost:2200/pics/${pic}`
            console.log("im data")
            console.log(data)
            productsModel.findOneAndUpdate({_id:data.id},{image:staticUrl,productName:data.productName,price:data.price,categoryId:data.categoryId},(err,results)=>{
                if(err) reject(err);
                resolve(results)
            })
        })
    }
    static updateProductWithoutPic(data){
        return new Promise((resolve,reject)=>{
            console.log("im data2")
            console.log(data)
            productsModel.findOneAndUpdate({_id:data.id},{productName:data.productName,price:data.price,categoryId:data.categoryId},(err,results)=>{
                if(err) reject(err);
                resolve(results)
            })
        })
    }

    


    
}
module.exports=ProductsController;

