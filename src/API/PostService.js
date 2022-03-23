export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const responsePosts = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
        return responsePosts;
    }

    static async getById(id) {
        const responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return responsePost;
    }
}