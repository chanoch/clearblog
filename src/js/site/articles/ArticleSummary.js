import React, { Component } from 'react'

class ArticleSummary extends Component {
    constructor(props) {
        super(props);
        this.clicked = this.clicked.bind(this);
    }

    clicked(e) {
        e.preventDefault();
        this.props.onClick(this.props.articleId);
    }

    render () {
        const {title, leader} = this.props;
        return (
            <section className="section article">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="article_body">
                                <h3 className="article_title" data-hover={title} onClick={this.clicked}>{title}</h3>
                                <p>{leader}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ArticleSummary