/**
 * TODO do we need to rework this router to support menu ids?
 */
import ArticlesPage from './ArticlesPage';
import React from 'react';

const routes = [
    { path: '/clearblog/', action: (store) => <ArticlesPage store={store} />},
    { path: '/clearblog/list', action: (store) => <ArticlesPage  store={store}/> },
];

export default routes;
