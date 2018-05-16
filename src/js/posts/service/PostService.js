/**
 * Dummy service which statically returns an array of blog posts (aka posts)
 */
export default class PostService {
    constructor() {
        this.posts = [
            {
                "key": "20180427-1", 
                "title": "My post",
                "leader": [
                    "My leader text.",
                    "Incomplete teaser"
                ],
                "post": [
                    "My leader text.",
                    "The second paragraph.",
                    "Third paragraph"
                ]
            }, {
                "key":"20180427-2", 
                'title': 'My second post',
                "leader": [
                    "Second post's leader text",
                    "second line"
                ],
                "post": [
                    "Second post's leader text",
                    "second line",
                    "Third line."
                ]
            }
        ];
    }

    /**
     *  fetchPosts call the callback function with an array of posts
     * 
     * @param {*} next - callback which takes an array of posts 
     */
    fetchPosts(next) {
        return next(this.posts);
    }

    /**
     * 
     * @param {string} postKey - the key of the post
     * @param {*} next - the function to call with the complete post
     */
    fetchPost(postKey, next) {
        return next(this.posts.find((post) => postKey===post.key));
    }
}
