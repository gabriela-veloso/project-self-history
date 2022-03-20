import React from 'react';
import Header from '../components/Header';
import '../styles/sobremim.css';
import { Link } from 'react-router-dom';

class SobreMim extends React.Component{
    render() {;
        return (
        <section className='cardMusics'>
            <section className='cabeçalho'>
              <Header />
              <Link to='/'>
              <button>Home</button>
              </Link>
              </section>
        <h1>Favorite Songs</h1>

            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/0kgcZ0U178g" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>

            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/2qDVxh_HBCw" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        
        <footer>
            <h6>© 2022 Gabriela Veloso. All Rights Reserved.</h6>
        </footer>
        </section>
        )
    }
}

export default SobreMim;                                                                                  