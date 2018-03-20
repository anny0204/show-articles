var React = require('react');

require('./Article.css');

var Article = React.createClass({
    render: function() {
        return (
            <div className="article">
                <h3>{this.props.title}</h3>
                <div className="article_text">
                    {this.props.text}
                </div>
            </div>
        )
    }
});

module.exports = Article;