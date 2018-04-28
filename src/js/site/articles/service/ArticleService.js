/**
 * Dummy service which statically returns an array of blog posts (aka articles)
 */
export default class ArticleService {
    /**
     *  Fetch returns a resolved promise calling next with the 
     * 
     * @param {*} next - callback which takes an array of articles 
     */
    fetchArticles(next) {
        return next([
            {
                "key": "20180427-1", 
                "title": "My article",
                "leader": [
                    "My leader text.",
                    "Incomplete teaser..."
                ]
            }, {
                "key":"20180427-2", 
                'title': 'My second article',
                "leader": [
                    "Second article's leader text",
                    "second line..."
                ]
            }
        ]);
    }
}
