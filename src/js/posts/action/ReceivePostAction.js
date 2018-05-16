    
export default function ReceivePostAction() {
    const RECEIVE_POST = 'RECEIVE_POST';

    const receivePost = function(post) {
        return {
            type: RECEIVE_POST,
            post,
            receivedAt: Date.now()
        }
    };

    return {
        type: RECEIVE_POST,
        
        dispatchAction(dispatch, postKey) {
            dispatch(receivePost(postKey));
        },

        reducer(state, action) {
            return {
                ...state,
                action: RECEIVE_POST,
                post: action.post,
            }
        }    
    }
}