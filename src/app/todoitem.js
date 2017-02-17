/**
 * Created by srina on 2/16/2017.
 */
var React = require('react');
require('./css/anothercomp.css');
var YoutubeItem = React.createClass({
    render: function () {
        return (
            <li>
                <div className="youtube-item"><span className="youtube-name">{this.props.item}</span>
                    <span className="youtube-delete" onClick={this.deletehandle}> X</span></div>
            </li>
        );
    },
    deletehandle : function () {
        this.props.onDelete(this.props.item);
    }
})

module.exports = YoutubeItem;