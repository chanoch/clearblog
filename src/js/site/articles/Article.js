import React, { Component } from 'react'

export default class Article extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {article} = this.props;
        return (
            <section className="section article">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="article_body">
                                <h5 className="article_title" data-hover={article.title} >{article.title}</h5>
                                <ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export class ArticleSummary extends Component {
    constructor(props) {
        super(props);
        this.clicked = this.clicked.bind(this);
    }

    clicked(e) {
        e.preventDefault();
//        this.props.onClick(this.props.articleId);
    }

    render () {
        const {article} = this.props;
        return (
            <section className="section article">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="article_body">
                                <h3 className="article_title" data-hover={article.title} onClick={this.clicked}>{article.title}</h3>
                                <Leader leader={article.leader} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

/**
 * Component which renders a teaser for an article which includes first paragraph
 * and a little of the following paragraph terminated with elipses
 */
export class Leader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {leader} = this.props;
        return (
            <div>
                {leader && leader.map((line, index) => {
                    return <p key={index}>{line}</p>
                })} 
            </div>
        )
    }
}