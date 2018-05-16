import PostService from '../service/PostService';
import ReceivePostAction from './ReceivePostAction';

const VIEW_POST = "VIEW_POST";
    
export default function ViewPost() {
    const viewPost = function(postKey) {
        return {
            type: VIEW_POST,
            postKey,
        }
    };
    
    return {
        type: VIEW_POST,

        middleware(path, history) {
            const localPath = path;
            return store => dispatch => action => {
                console.log(action);
                dispatch(action);
                if(action.type===VIEW_POST) {
                    (new PostService()).fetchPost(action.postKey, 
                        post => (new ReceivePostAction()).dispatchAction(dispatch, post));
                    history.push(`${localPath}/${action.postKey}`);
                }
            }    
        },

        dispatchAction(dispatch, postKey) {
            dispatch(viewPost(postKey));
        },
    }
}