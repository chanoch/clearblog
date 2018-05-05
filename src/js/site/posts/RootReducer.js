import { RECEIVE_POSTS, receivePostsReducer } from './redux/ListPosts';

export function rootReducer(state, action) {
    switch(action.type) {
        case RECEIVE_POSTS: return receivePostsReducer(state, action);
        default: return state;
    }
}

