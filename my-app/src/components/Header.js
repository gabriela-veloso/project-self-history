import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

class Header extends React.Component{
    render() {
        return (
            <section className="header">
                <section>
                <img src='https://clickbabynames.com/wp-content/uploads/baby-name-gabriela-clickbabynames3-scaled.jpg' className='nomeGabi' alt='nomeGabi'/>
                </section>

                <section className="contact">

                <section className="instaSection">
                <img src='https://seeklogo.net/wp-content/uploads/2016/05/instagram-icon-logo-vector-download-400x400.jpg' className='insta' alt='insta'/>
                </section>

                <section className="linkedinSection">
                    <Link to="https://www.linkedin.com/in/gabriela-veloso-1a936156/">
                <img src='https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png' className='linkedin' alt='linkedin'/>
                </Link>
                </section>
                
                <section className="githubSection">
                <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' className='github' alt='github'/>
                </section>

                </section>
          </section>
        )
    }
}

export default Header;                                                                                  