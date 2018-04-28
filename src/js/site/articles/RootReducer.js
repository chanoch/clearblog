import { RECEIVE_ARTICLES, receiveArticlesReducer } from './redux/ListArticles';

export function rootReducer(state, action) {
    switch(action.type) {
        case RECEIVE_ARTICLES: return receiveArticlesReducer(state, action);
        default: return state;
    }
}

