import {ArticleService} from '../service/ArticleService';

export const LIST_ARTICLES = "LIST_ARTICLES";
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const LIST_ARTICLES_FAILED = 'LIST_ARTICLES_FAILED';

import {history} from '@chanoch/simple-react-router';

/** 
 * Async mutating middleware that loads the full list of articles and then dispatches an action to render
 * them 
 */
export function ListArticlesMiddleware() {
    return store => dispatch => action => {

        dispatch(action);
        if(action.type===LIST_ARTICLES) {
            var arcticleService = new ArticleService();
            articleService.fetchArticles(articles => dispatch(receiveArticles(articles)));
            history.push('/clearblog/list');
        }
    }
}

/** 
 * TODO Implement the reducer
 */
export function listArticlesFailed() {
    return {
        type: LIST_ARTICLES_FAILED
    }
}

export function listArticles() {
    return {
        type: LIST_ARTICLES,
    }
}

export function receiveArticles(articles) {
    return {
        type: RECEIVE_ARTICLES,
        articles,
        receivedAt: Date.now()
    }
}

export function receiveArticlesReducer(state, action) {
    console.log("Reducing articles");
    return {
        ...state,
        action: RECEIVE_ARTICLES,
        articles: action.articles,
    }
}
