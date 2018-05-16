import { RECEIVE_POSTS, receivePostsReducer } from './redux/ListPosts';
import { RECEIVE_POST, receivePostReducer } from './redux/ViewPost';

export function rootReducer(state, action) {
    switch(action.type) {
        case RECEIVE_POSTS: return receivePostsReducer(state, action);
        case RECEIVE_POST: return receivePostReducer(state, action);
        default: return state;
    }
}

