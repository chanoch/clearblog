import PostService from '../service/PostService';
import ReceivePostAction from './ReceivePostAction';
    
export default function ViewPostAction() {
    const VIEW_POST = "VIEW_POST";

    const actionCreator = function(postKey) {
        return {
            type: VIEW_POST,
            postKey,
        }
    };
    
    return {
        type: VIEW_POST,

        middleware() {
            return store => dispatch => action => {
                dispatch(action);
                if(action.type===VIEW_POST) {
                    (new PostService()).fetchPost(action.postKey, 
                        post => (new ReceivePostAction()).dispatchAction(dispatch, {post}));
                }
            }    
        },

        dispatchAction(dispatch, params) {
            const postKey = params.post_id;
            dispatch(actionCreator(postKey));
        },
    }
}