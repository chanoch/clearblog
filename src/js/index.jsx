import simpleReactRouter from '@chanoch/simple-react-router';

/*
        TODO need to update the express mountpath 
        TODO need to document the idea
        TODO how to manage top level navigation to non-blog parts? 
        TODO need to resolve css - any others?
        TODO implement with no styling!
*/

// TODO do we need to rework this router to support menu ids?
import ListPostsPage from './ListPostsPage';
import ViewPostPage from './ViewPostPage';
import Http404Page from './Http404Page';


// actions, middleware, and the reducer for each action
import ListPostsAction from './posts/action/ListPostsAction';
import ViewPostAction from './posts/action/ViewPostAction';
import ReceivePostsAction from './posts/action/ReceivePostsAction';
import ReceivePostAction from './posts/action/ReceivePostAction';

console.log(`clearblog/index.jsx:MAKE MOUNTPATH CONFIGURED BY EXPRESS`)
var mountpath = '/clearblog';

const initialState = {
    posts: [], // the list of blog posts
    post: {
        key: undefined,
        content: ['']
    }, // the selected post to read in detail
};

var config = {
    initialState,
    actionConfigs: [{
        name: 'ListPosts',
        path: "/",
        driver: ListPostsAction, 
        page: (store, history) => <ListPostsPage store={store} history={history}/>,
    },{
        driver: ReceivePostsAction
    },{
        name: 'ViewPost',
        path: "/post/:post_key/:post_title",
        driver: ViewPostAction,
        page: (store, history) => <ViewPostPage store={store} history={history}/>
    },{
        driver: ReceivePostAction
    },{
        path: "/error",
        page: (store,history) => <Http404Page store={store} history={history}/>
    }]
};

/**
 * Create store with the redux middleware components which will carry out
 * any mutations required as part of the various actions. 
 */
simpleReactRouter(mountpath, config);
