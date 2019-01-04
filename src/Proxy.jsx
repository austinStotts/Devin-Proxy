import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Proxy extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: Math.ceil(Math.random()*100)
        }
    }

    handleClick(e,ID){
        this.setState({
            id: ID
        })
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        return ( 
        <div>
                <Comments id={this.state.id} />
                <Project id={this.state.id}/>
                <Pledge id={this.state.id} />
                <Related id={this.state.id} onClick={this.handleClick}/>
        </div>

        );
    }
}

ReactDOM.render( <Proxy/> , document.getElementById('Proxy') );