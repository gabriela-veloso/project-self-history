import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import '../styles/cabeçalho.css';
import '../styles/softwareDev.css';

class SoftwareDev extends React.Component{
    render() {
        return (
            <div>

            <section className='cabeçalho'>
            <Header />
            <Link to='/'>
            <button>Home</button>
            </Link>
            </section>

            <div className='drawDeveloper'>
            <Link to='/SoftwareDev'>
                <img src='https://i.pinimg.com/originals/9e/b0/88/9eb0884c6de77c3031e38b56abe2e1f7.jpg' className='developer' alt=''/>
            </Link>
            <div className='skills'>
                <ul>
                    <h3>Front-end Developer</h3>
                    <h3>Back-end Developer</h3>
                    <h3>Full Stack Developer</h3>
                </ul>
            </div>
            </div>
            <footer>             
            <h2>Open to work</h2>
            </footer>
            </div>
        )
    }
}

export default SoftwareDev;