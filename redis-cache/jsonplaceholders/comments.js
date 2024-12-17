const fetch = require('node-fetch');

class CommentsApi {
    constructor() { }

    fetch() {
        console.log('Fetching comments');

        return fetch("https://jsonplaceholder.typicode.com/comments");
    }
}

module.exports = new CommentsApi();