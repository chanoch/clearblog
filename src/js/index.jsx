import simpleReactRouter from '@chanoch/simple-react-router';

import ListPostsPage from './ListPostsPage';
import ViewPostPage from './ViewPostPage';
import Http404Page from './Http404Page';

// actions, middleware, and the reducer for each action
import ListPostsAction from './posts/action/ListPostsAction';
import ViewPostAction from './posts/action/ViewPostAction';

import ReceivePostsAction from './posts/action/ReceivePostsAction';
import ReceivePostAction from './posts/action/ReceivePostAction';

import configService from './config'; 

let mountpath = 'clearblog'; // default mountpath

configService(window.location.origin, window.location.pathname, (config => {
    const initialState = {
        posts: [], // the list of blog posts
        post: {
            key: '',
            title:'',
            published:new Date(),
            content: [''],
            topics:[],
        }, // the selected post to read in detail
    };

    var router_config = {
        initialState,
        actionConfigs: [{
            name: 'ListPosts',
            path: "/",
            driver: ListPostsAction, 
            page: (store, history) => <ListPostsPage store={store} history={history} config={config}/>,
        },{
            driver: ReceivePostsAction
        },{
            name: 'ViewPost',
            path: "/post/:post_key/:post_title",
            driver: ViewPostAction,
            page: (store, history) => <ViewPostPage store={store} history={history} config={config}/>
        },{
            driver: ReceivePostAction
        },{
            path: "/error",
            page: (store,history) => <Http404Page store={store} history={history} config={config}/>
        }]
    };

    /**
     * Create store with the redux middleware components which will carry out
     * any mutations required as part of the various actions. 
     */
    simpleReactRouter(config.mountpath, router_config);
}));

