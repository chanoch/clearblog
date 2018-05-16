import PostService from '../service/PostService';

export const VIEW_POST = "VIEW_POST";
export const RECEIVE_POST = 'RECEIVE_POST';
export const VIEW_POST_FAILED = 'VIEW_POST_FAILED';

export function ViewPostMiddleware() {
    return store => dispatch => action => {
        dispatch(action);
        if(action.type===VIEW_POST) {
            const postService = new PostService();
            postService.fetchPost(action.postKey, post => dispatch(receivePost(post)));
            
            history.push(`/post/${post.key}`);
        }
    }
}

export function viewPostFailed() {
    return {
        type: VIEW_POSTS_FAILED
    }
}

export function viewPost(postKey) {
    return {
        type: VIEW_POST,
        postKey
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
