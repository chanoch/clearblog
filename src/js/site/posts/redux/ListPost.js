import {fetchPost} from '../service/PostService';

export const LIST_POST = "LIST_POST";
export const RECEIVE_POST = 'RECEIVE_POST';
export const LIST_POST_FAILED = 'LIST_POST_FAILED';

import {history} from '@chanoch/simple-react-router';

export function ListPostMiddleware() {
    return store => dispatch => action => {
        dispatch(action);
        if(action.type===LIST_POST) {
            fetchPost(post => dispatch(receivePost(post)));
            history.push(`/clearblog/${post.key}`);
        }
    }
}


export function listPostFailed() {
    return {
        type: LIST_POSTS_FAILED
    }
}

export function listPost() {
    return {
        type: LIST_POST,
    }
}

export function receivePost(post) {
    return {
        type: RECEIVE_POST,
        post,
        receivedAt: Date.now()
    }
}

export function receivePostReducer(state, action) {
    return {
        ...state,
        action: RECEIVE_POST,
        post: action.post,
    }
}
