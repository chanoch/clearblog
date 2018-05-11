/**
 * TODO do we need to rework this router to support menu ids?
 */
import React from 'react';
import {SimpleReactRouter} from '@chanoch/simple-react-router';

import {ListPostsMiddleware} from './posts/redux/ListPosts';
import {rootReducer} from './posts/RootReducer';

import getRoutes from './routes';

var mountpath = 'clearblog';

const routes = getRoutes(mountpath);
/*
        TODO need to update the express mountpath 
        TODO need to document the ethos of the concept
        TODO what if people want to mount it into the root? 
        TODO how to manage top level navigation to non-blog parts? 
        TODO extract it as an independent component!
        TODO then use it in a vanilla microsite
        TODO need to resolve css - any others?
        TODO implement with no styling!
*/

const initialState = {
    posts: [], // the list of blog posts
    post: {}, // the selected article to read in detail
};

/**
 * Create store with the redux middleware components which will carry out
 * any mutations required as part of the various actions. 
 */
const router = new SimpleReactRouter(
    routes,
    rootReducer, 
    initialState, 
    [ListPostsMiddleware()]); 

/**
 * Fetch the list of blog posts
 */
import {receivePosts} from './posts/redux/ListPosts';
import PostService from './posts/service/PostService';
const postService = new PostService();
postService.fetchPosts(posts => router.dispatch(receivePosts(posts)));
