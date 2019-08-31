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
        return new Promise((resolve,reject)=>{
            categoryModel.findOne({categoryName:name},(err,results)=>{
                if (err) reject(err);
                if (!results) reject("category does not exist");
                resolve(results);
            })
        })
    }
    
}
module.exports=CategoryController;

