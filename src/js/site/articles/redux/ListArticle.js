import {fetchArticle} from '../service/ArticleService';

export const LIST_ARTICLE = "LIST_ARTICLE";
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
export const LIST_ARTICLE_FAILED = 'LIST_ARTICLE_FAILED';

import {history} from '@chanoch/simple-react-router';

export function ListArticleMiddleware() {
    return store => dispatch => action => {
        dispatch(action);
        if(action.type===LIST_ARTICLE) {
            fetchArticle(article => dispatch(receiveArticle(article)));
            history.push(`/clearblog/${article.key}`);
        }
    }
}


export function listArticleFailed() {
    return {
        type: LIST_ARTICLES_FAILED
    }
}

export function listArticle() {
    return {
        type: LIST_ARTICLE,
    }
}

export function receiveArticle(article) {
    return {
        type: RECEIVE_ARTICLE,
        article,
        receivedAt: Date.now()
    }
}

export function receiveArticleReducer(state, action) {
    return {
        ...state,
        action: RECEIVE_ARTICLE,
        article: action.article,
    }
}
