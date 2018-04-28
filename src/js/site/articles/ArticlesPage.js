import React from 'react';
import {Provider, connect } from 'react-redux';
import {history} from '@chanoch/simple-react-router';

import {Layout, Divider} from '@chanoch/chanoch-com-components';

import {ArticleSummary} from './Article';

import config from '../../../config';

export class ArticlesPage extends React.Component {
    constructor(props) {
        super(props);
        this.selectArticle = this.selectArticle.bind(this);
    }

    /**
     * TODO Externalise the navigation action handler
     * 
     * @param {event} e 
     */
    selectArticle(key) {
        this.props.selectArticle(key);
    }

    render() {
        const {articles} = this.props;
        return (
            <Provider store={this.props.store}>
                <Layout title="Simple react blog." active={"Blog"} config={config}>
                    <div className="col-12">
                        <h1 className="section__heading">Articles</h1>
                        {articles && articles.map &&
                            articles.map((article) => {
                                return <ArticleSummary key={article.key} article={article} />
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
        articles: state.articles
    }
};

import {listArticle} from './redux/ListArticle';

const mapDispatchToProps = (dispatch) => ({
    listArticle: () => dispatch(listArticle()),
});

const ConnectedArticlesPage = 
        connect(
            mapStateToProps, 
            mapDispatchToProps
        )(ArticlesPage);

export default ConnectedArticlesPage;