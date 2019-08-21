const usersModel = require("../models/users-model");
const cartModel = require("../models/cart-model");
const sessionModel = require("../models/session-model");


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
        return new Promise((resolve, reject) => {
            usersModel.find({ username: userName, password: password }, (err, results) => {
                if (err) {
                    reject(err)
                }
                if (results.length == 0) {
                    reject("no results")
                } else {
                    let user = {}
                    user._id = results[0]._id;
                    user.name = results[0].name;
                    user.userId = results[0].userId;
                    resolve(user)
                }


            })




        })

    }
    static uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    static generateSession(uid) {
        console.log("gen")
        console.log(uid)
        let session = UsersController.uuidv4();
        return new Promise((resolve, reject) => {
            let sessionInstance = new sessionModel({ _id: session, userId: uid });
            sessionInstance.save((err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(session);
                }
            });
        });
    }
    static verify(session){
        console.log("lala")
        console.log(session)
        return new Promise((resolve, reject) => {
            sessionModel.find({_id:session }, (err, results) => {
                if (err) { reject("session not exsist") }
                console.log(results[0].userId)
                let user = {}
                user._id = results[0].userId._id;
                user.name = results[0].userId.name;
                user.userId = results[0].userId.userId;
                resolve(user)
            }).populate("userId")
        })
        
    }
}
module.exports = UsersController;

