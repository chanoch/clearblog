/**
 * TODO do we need to rework this router to support menu ids?
 */
import ListPostsPage from './ListPostsPage';
import ViewPostPage from './ViewPostPage';

import React from 'react';

export default function getRoutes(mountpath) {
    // if mount path is falsey or a forward slash then mount to root of microsite
    const root = mountpath&&mountpath[0]!='/'?`/${mountpath}`:'';
    const routes = [
        { path: `${root}/`, action: (store, history) => <ListPostsPage store={store} history={history}/>},
        { path: `${root}/list`, action: (store, history) => <ListPostsPage  store={store} history={history}/> },
        { path: `${root}/post/`, action: (store, history) => <ViewPostPage store={store} history={history}/> }
    ];
    return routes;
}