/**
 * TODO do we need to rework this router to support menu ids?
 */
import {PostsPage} from '@chanoch/clearblog-components';
import React from 'react';

export default function getRoutes(mountpath) {
    // if mount path is falsey or a forward slash then mount to root of microsite
    const root = mountpath&&mountpath[0]!='/'?`/${mountpath}`:'';
    const routes = [
        { path: `${root}/`, action: (store) => <PostsPage store={store} />},
        { path: `${root}/list`, action: (store) => <PostsPage  store={store}/> },
        { path: `${root}/post/`, action: (store) => <PostPage store={store}/> }
    ];
    return routes;
}