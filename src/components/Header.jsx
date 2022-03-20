import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render() {
        return (
            <section className="header">
                <section>
                <Link to='/SobreMim'>
                <img src='https://clickbabynames.com/wp-content/uploads/baby-name-gabriela-clickbabynames3-scaled.jpg' className='nomeGabi' alt='nomeGabi'/>
                </Link>
                </section>

                <section className="contact">

                <section className="instaSection">
                <a href="https://www.instagram.com/gabiquem_fez/">             
                <img src='https://seeklogo.net/wp-content/uploads/2016/05/instagram-icon-logo-vector-download-400x400.jpg' className='insta' alt='insta'/>
                </a>
                
                </section>

                <section className="linkedinSection">
                <a href="https://www.linkedin.com/in/gabriela-veloso-1a936156/">
                <img src='https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png' className='linkedin' alt='linkedin'/>
                </a>
                </section>
                
                <section className="githubSection">
                <a href="https://github.com/gabriela-veloso">
                <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' className='github' alt='github'/>
                </a>

                </section>

                </section>
          </section>
        )
    }
}

export default Header;                                                                                  