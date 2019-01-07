import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Proxy extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state={
            id: Math.ceil(Math.random()*100)
        }
    }

    handleClick(e,ID){
        this.setState({
            id: ID
        })
    }

    render(){
        return ( 
        <div>
                {/* <Project id={this.state.id}/>
                <Pledge id={this.state.id} />
                <Related id={this.state.id} onClick={this.handleClick}/> */}
                <Comments id={this.state.id} />
        </div>

        );
    }
}

ReactDOM.render( <Proxy/> , document.getElementById('Proxy') );