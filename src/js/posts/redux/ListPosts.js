import {PostService} from '../service/PostService';

export const LIST_POSTS = "LIST_POSTS";
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const LIST_POSTS_FAILED = 'LIST_POSTS_FAILED';

import {history} from '@chanoch/simple-react-router';

/** 
 * Async mutating middleware that loads the full list of posts and then dispatches an action to render
 * them 
 */
export function ListPostsMiddleware() {
    return store => dispatch => action => {

        dispatch(action);
        if(action.type===LIST_POSTS) {
            PostService.fetchPosts(Posts => dispatch(receivePosts(Posts)));
            history.push('${context}/list');
        }
    }
}

/** 
 * TODO Implement the reducer
 */
export function listPostsFailed() {
    return {
        type: LIST_POSTS_FAILED
    }
}

export function listPosts() {
    return {
        type: LIST_POSTS,
    }
}

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts,
        receivedAt: Date.now()
    }
}

export function receivePostsReducer(state, action) {
    return {
        ...state,
        action: RECEIVE_POSTS,
        posts: action.posts,
    }
}
