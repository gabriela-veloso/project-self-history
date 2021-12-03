import React from 'react';
import Header from '../components/Header';
import Graduate from '../components/Graduate';
import Entrepeneur from '../components/Entrepeneur';
import Developer from '../components/Developer';

class Home extends React.Component{
    render(){
        return (
            <div>
            <Header />
            <div className="allJobs">
            <Graduate />
            <Entrepeneur />
            <Developer />
            </div>
            </div>
        )
    }
}

export default Home;