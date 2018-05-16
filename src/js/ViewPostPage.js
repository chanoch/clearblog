import React from 'react';
import PropTypes from 'prop-types';

import {Provider, connect } from 'react-redux';

import {Layout} from '@chanoch/chanoch-com-components';
import {Post} from '@chanoch/clearblog-components';

import config from '../config';

class ViewPostPage extends React.Component {
    static propTypes = {
        post: PropTypes.string.isRequired,
        store: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {post} = this.props;
        return (
            <Provider store={this.props.store}>
                <Layout title="Simple react blog." active={"Blog"} config={config}>
                    <div className="col-12">
                        <Post postKey={post.key} post={post}/>
                    </div>
                </Layout>
            </Provider>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post
    }
};

import {viewPost} from './posts/redux/ViewPost';

const mapDispatchToProps = (dispatch) => ({
    viewPost: (postKey) => dispatch(viewPost(postKey)),
});

const ConnectedViewPostPage = 
        connect(
            mapStateToProps, 
            mapDispatchToProps
        )(ViewPostPage);

export default ConnectedViewPostPage;