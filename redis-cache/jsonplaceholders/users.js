const fetch = require('node-fetch');

class UserApi {
    constructor() { }

    fetch() {
        console.log('Fetching users');
        
        return fetch("https://jsonplaceholder.typicode.com/users");
    }
}

module.exports = new UserApi();