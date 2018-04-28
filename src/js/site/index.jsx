import routes from './articles/routes';

import {ListArticlesMiddleware} from './articles/redux/ListArticles';
import {rootReducer} from './articles/RootReducer';

import {SimpleReactRouter} from '@chanoch/simple-react-router';

const initialState = {
    articles: [], // the list of articles/blog entries
    article: {}, // the selected article to read in detail
};

/**
 * Create store with the redux middleware components which will carry out
 * any mutations required as part of the various actions. 
 */
const router = new SimpleReactRouter(
    rootReducer, 
    initialState, 
    [ListArticlesMiddleware()],
    routes); 

/**
 * Fetch the list of blog articles
 */
import {receiveArticles} from './articles/redux/ListArticles';
import ArticleService from './articles/service/ArticleService';
const articleService = new ArticleService();

articleService.fetchArticles(articles => router.dispatch(receiveArticles(articles)));
