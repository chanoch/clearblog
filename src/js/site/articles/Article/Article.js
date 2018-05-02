import React, { Component } from 'react'

import './article.css';

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
                            <div className="section_article__item">
                                <h4 className="article_title" data-hover={article.title} >{article.title}</h4>
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
                            <div className="section_article__item">
                                <ul className="article_info">
                                    <li><a href="">12th May 2018</a></li>
                                    <li>/</li>
                                    <li><a href="">TOPIC</a></li>
                                </ul>
                                <a className="article_title">
                                    <h4 data-hover={article.title} onClick={this.clicked}>{article.title}</h4>
                                </a>
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