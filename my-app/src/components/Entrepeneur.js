import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

class Entrepeneur extends React.Component{
    render() {
        return (
            <section className='entrepeneurSection'>
                <Link to='/Ecomerce'>
                <img src='https://img.elo7.com.br/product/main/353D8C0/100-adesivos-etiqueta-feito-a-mao-com-carinho-embalagem-etiqueta.jpg' className='entrepeneur' alt=''/>
            </Link>
            </section>
        )
    }
}

export default Entrepeneur;                                                                                  