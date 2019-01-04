import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Proxy extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentProject_id: 2
        }
        //Math.floor(Math.random()*100);
    }

    changeMeProject(project_id){
        this.setState({
            currentProject_id: project_id
        })
    }

    render(){
        return ( 
        <div>
            <div className='DevinComments'>
                DEVIN
                <App/>
            </div>

            <div className='EricProjects'>
                ERIC
                <Project/>
            </div>

            <div className='MattRelatedProjects' changeMeProject={this.changeMeProject.bind(this)}>
                MATT
            </div>

            <div className='MikePledgeDetails'>
                MIKE
            </div>
        </div>

        );
    }
}

ReactDOM.render( <Proxy/> , document.getElementById('Proxy') );