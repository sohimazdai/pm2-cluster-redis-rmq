const fetch = require('node-fetch');

class PostsApi {
    constructor() { }

    fetch() {
        console.log('Fetching posts');

        return fetch("https://jsonplaceholder.typicode.com/posts");
    }
}

module.exports = new PostsApi();