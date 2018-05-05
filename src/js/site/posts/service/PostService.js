/**
 * Dummy service which statically returns an array of blog posts (aka posts)
 */
export default class PostService {
    /**
     *  fetchPosts call the callback function with an array of posts
     * 
     * @param {*} next - callback which takes an array of posts 
     */
    fetchPosts(next) {
        return next([
            {
                "key": "20180427-1", 
                "title": "My post",
                "leader": [
                    "My leader text.",
                    "Incomplete teaser..."
                ]
            }, {
                "key":"20180427-2", 
                'title': 'My second post',
                "leader": [
                    "Second post's leader text",
                    "second line..."
                ]
            }
        ]);
    }
}
