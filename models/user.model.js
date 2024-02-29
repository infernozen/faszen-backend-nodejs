const db = require('../config/db.config');
const { createNewUser: createNewUserQuery, findUserByEmail: findUserByEmailQuery, updateUserByEmail: updateUserByEmailQuery} = require('../database/queries/init_queries');

class User {
    constructor(email, password, firstname, lastname) {
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    static create(newUser, cb) {
        db.query(createNewUserQuery, 
            [
                newUser.email, 
                newUser.password,
                newUser.firstname,
                newUser.lastname
            ], (err, res) => {
                if (err) {
                    console.log(err.message);
                    cb(err, null);
                    return;
                }
                cb(null, {
                    id: res.insertId,
                    email: newUser.email,
                    firstname: newUser.firstname,
                    lastname: newUser.lastname
                });
        });
    }

    static findByEmail(email, cb) {
        db.query(findUserByEmailQuery, email, (err, res) => {
            if (err) {
                console.log(err.message);
                cb(err, null);
                return;
            }
            if (res.length) {
                cb(null, res[0]);
                return;
            }
            cb({ kind: "not_found" }, null);
        })
    }

    static updateByEmail(email, password, cb) {
        db.query(updateUserByEmailQuery, [password, email], (error, result) => {
            if (error) {
                console.error('Error updating password:', error);
                cb(error);
            } else {
                cb(null, result);
            }
        });
    }
}

module.exports = User;
