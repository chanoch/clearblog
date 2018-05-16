import React from 'react';
import PropTypes from 'prop-types';

import {Provider, connect } from 'react-redux';

import {Layout, Divider} from '@chanoch/chanoch-com-components';
import {PostSummary} from '@chanoch/clearblog-components';

import config from '../config';

class ListPostsPage extends React.Component {
    static propTypes = {
        posts: PropTypes.arrayOf(PropTypes.object).isRequired,
        store: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
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
                                return <PostSummary key={post.key} post={post} handleClick={this.props.viewPost} />
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

import {viewPost} from './posts/redux/ViewPost';

const mapDispatchToProps = (dispatch) => ({
    viewPost: (postKey) => dispatch(viewPost(postKey)),
});

const ConnectedListPostsPage = 
        connect(
            mapStateToProps, 
            mapDispatchToProps
        )(ListPostsPage);

export default ConnectedListPostsPage;