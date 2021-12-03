import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

class Developer extends React.Component{
    render() {
        return (
            <section className='developerSection'>
                <Link to='/SoftwareDev'>
                <img src='https://i.pinimg.com/originals/9e/b0/88/9eb0884c6de77c3031e38b56abe2e1f7.jpg' className='developer' alt=''/>
                
            </Link>
            </section>
        )
    }
}

export default Developer;                                                                                  