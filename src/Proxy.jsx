import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// const App = require('http://localhost:3001/App.jsx');

class Proxy extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentProject_id: 2
        }
    }
    render(){
        return ( 
            <div>Devin's Proxy Server 
                {/* <App/> */}
            </div>
        );
    }
}

ReactDOM.render( <Proxy/> , document.getElementById('Proxy') );