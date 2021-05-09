"use strict";

class UserStorage {
    static #users = {
        id: ["kkl0219", "안녕", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["김규리", "김귤", "킴큐리"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;