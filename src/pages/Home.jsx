import React from 'react';
import Header from '../components/Header';
import Graduate from '../components/Graduate';
import Entrepeneur from '../components/Entrepeneur';
import Developer from '../components/Developer';
import '../styles/home.css'

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
            <footer>
                <h6>© 2022 Gabriela Veloso. All Rights Reserved.</h6>
            </footer>
            </div>
        )
    }
}

export default Home;