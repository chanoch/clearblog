import React from 'react';
import {Provider, connect } from 'react-redux';

import {Layout, Divider} from '@chanoch/chanoch-com-components';
import {PostSummary} from '@chanoch/clearblog-components';

import config from '../config';

class ListPostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.listPost = this.listPost.bind(this);
    }

    /**
     * View the post given by the key
     * 
     * @param {event} e 
     */
    listPost(key) {
        this.props.listPost(key);
    }

    render() {
        const {posts} = this.props;
        return (
            <Provider store={this.props.store}>
                <Layout title="Simple react blog." active={"Blog"} config={config}>
                    <div className="col-12">
                        <h1 className="section__heading">Posts</h1>
                        {posts && posts.map &&
                            posts.map((post) => {
                                return <PostSummary key={post.key} post={post} onClick={this.listPost} />
                            })
                        }
                    </div>
                </Layout>
            </Provider>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

import {listPost} from './posts/redux/ListPost';

const mapDispatchToProps = (dispatch) => ({
    listPost: () => dispatch(listPost()),
});

const ConnectedListPostsPage = 
        connect(
            mapStateToProps, 
            mapDispatchToProps
        )(ListPostsPage);

export default ConnectedListPostsPage;