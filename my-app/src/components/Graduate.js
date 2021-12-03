import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

class Graduate extends React.Component{
    render() {
        return (
            <section className='graduateSection'>
                <Link to='/Research'>
                <img src='https://static.vecteezy.com/ti/vetor-gratis/p1/2219420-continuo-linha-desenho-de-graduacao-bone-academico-graduacao-chapeu-equipamento-elemento-icone-modelo-conceito-celebracao-cerimonia-mestre-grau-academia-graduacao-esboco-esboco-ilustracao-vetor.jpg' className='graduate' alt=''/>
            </Link>
            </section>
        )
    }
}

export default Graduate;                                                                                  