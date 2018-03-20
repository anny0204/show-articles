var React = require('react');

var Article = require('./Article.jsx');

var articles = require('../articles.json');
require('./Articles.css');

var Articles = React.createClass({
    getInitialState: function() {
        return ({
            articles: articles
        })
    },

    render: function() {
        return (
            <div className="articles">
            {
                this.state.articles.map(function(article) {
                    return <Article key={article.id}
                    title={article.title}
                    text={article.text}/>
                })
            }
            </div>
        )
    }
});

module.exports = Articles;