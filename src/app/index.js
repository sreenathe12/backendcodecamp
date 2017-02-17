   /**
 * Created by srina on 2/15/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var YoutubeItem = require('./todoitem');
require('./css/youtube.css');
import {Router,Route} from 'react-router';


var App = React.createClass({
    render: function(){
        return(
            <Router>
                <Route path={'/'} component={TodoComponent}/>
                
            </Router>
        );
    }
});
//create component
var TodoComponent = React.createClass({
    getInitialState:function () {
        return{
            youtube:['videos','serch','option'],
            age:30
        }
    },
    render: function () {
        setTimeout(function(){
            this.setState({
                age:35
            })
        }.bind(this),5000);
         var youtube = this.state.youtube;
         youtube = youtube.map(function(item,index){
             return(
                 <YoutubeItem item = {item} key={index} onDelete={this.onDelete}></YoutubeItem>
             )
         }.bind(this));
        return(
            <div id="todo-list">
                <p onClick={this.clicked}>This one coming using state propertiess.....</p>
                <ul>
                    {youtube}
                </ul>
                <p>{this.state.age}</p>
                <h1>This is my first React app.......</h1>
                <h2><strong>Person name:</strong>{this.props.proper.name}</h2>
                <h2><strong>Person Comany :</strong>{this.props.proper.degree}</h2>

            </div>
        )
    },

    onDelete : function (item) {
        var updatedTools = this.state.youtube.filter(function(val,index) {
            return item !== val;
        });
    this.setState({
       youtube :  updatedTools
    });
    }
});


var myProps= {name:'sree', degree:'hyr gobaal'};
ReactDOM.render(<TodoComponent message="properties to pass data" proper={myProps}/>,document.getElementById('react-app'));
