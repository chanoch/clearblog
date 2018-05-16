import PostService from '../service/PostService';
import ReceivePostsAction from './ReceivePostsAction';

/** 
 * Async mutating middleware that loads the full list of posts and then dispatches an action to render
 * them 
 */
export default function ListPostsAction() {
    // action name
    const LIST_POSTS = "LIST_POSTS";
    
    // action creator
    const listPosts = function() {
        return {
            type: LIST_POSTS,
        }        
    };

    // middlware mutator which loads posts from service
    const loadPosts = function(path, history, dispatch) {
        (new PostService()).fetchPosts(posts => {
            new ReceivePostsAction().dispatchAction(dispatch, posts);
        });
        history.push(path);
    };

    return {
        type: LIST_POSTS,

        middleware(path, history) {
            return store => dispatch => action => {
                dispatch(action);
                if(action.type===LIST_POSTS) {
                    loadPosts(path, history, dispatch);
                }
            }
        },

        dispatchAction(dispatch) {
            dispatch(listPosts());
        },
    }
}