/**
 * TODO do we need to rework this router to support menu ids?
 */
import React from 'react';
import {SimpleReactRouter} from '@chanoch/simple-react-router';

import {ListArticlesMiddleware} from './articles/redux/ListArticles';
import {rootReducer} from './articles/RootReducer';

import ArticlesPage from './articles/ArticlesPage';

const routes = [
    { path: '/clearblog/', action: (store) => <ArticlesPage store={store} />},
    { path: '/clearblog/list', action: (store) => <ArticlesPage  store={store}/> },
];

const initialState = {
    articles: [], // the list of articles/blog entries
    article: {}, // the selected article to read in detail
};

/**
 * Create store with the redux middleware components which will carry out
 * any mutations required as part of the various actions. 
 */
const router = new SimpleReactRouter(
    routes,
    rootReducer, 
    initialState, 
    [ListArticlesMiddleware()]); 

/**
 * Fetch the list of blog articles
 */
import {receiveArticles} from './articles/redux/ListArticles';
import ArticleService from './articles/service/ArticleService';
const articleService = new ArticleService();

articleService.fetchArticles(articles => router.dispatch(receiveArticles(articles)));
