const usersModel = require("../models/users-model");


class UsersController {

    static getUsers() {
        return new Promise((resolve, reject) => {
            usersModel.find({}, (err, results) => {
                if (err) reject(err);
                resolve(results)
            })
        })
    }

    static createUser(data) {
        console.log("inside create user controller")
        let { name, lastname, userId, city, adress, username, password } = data;
        let role = "customer";
        return new Promise((resolve, reject) => {
            let user = new usersModel({ role, name, lastname, userId, city, adress, username, password });
            console.log(user)
            user.save((err, result) => {
                if (err) {
                    console.log(err);
                    reject(err)
                } else {
                    resolve("user added");
                }
            });
        })


    }
    static logIn(userName, password) {
        console.log(userName,password)
        return new Promise((resolve, reject) => {
            usersModel.find({ username: userName, password: password }, (err, results) => {
                if(err){
                    reject(err)
                }
                if(results.length==0){
                    reject("no results")
                }
                resolve(results)
                

                
            })
                
            


        })

    }
}
module.exports = UsersController;

