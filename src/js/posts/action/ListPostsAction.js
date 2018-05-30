import PostService from '../service/PostService';
import ReceivePosts from './ReceivePostsAction';

/** 
 */
export default function ListPosts(actionUri) {
    const LIST_POSTS = "LIST_POSTS";
    
    const actionCreator = function() {
        return {
            type: LIST_POSTS,
        }        
    };

    const uri = actionUri;

    const loadPosts = function(dispatch) {
        (new PostService()).fetchPosts(posts => {
            ReceivePosts().dispatchAction(dispatch, posts);
        });
    };

    return {
        type: LIST_POSTS,

        middleware() {
            return store => dispatch => action => {
                dispatch(action);
                if(action.type===LIST_POSTS) {
                    loadPosts(dispatch);
                }
            }
        },

        dispatchAction(dispatch) {
            dispatch(actionCreator());
        },
    }
}