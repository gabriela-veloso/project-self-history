import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import '../styles/research.css';
import '../styles/cabeçalho.css';

class Research extends React.Component{
  render() {
        return (
          <div>
              <section className='cabeçalho'>
              <Header />
              <Link to='/'>
              <button>Home</button>
              </Link>
              </section>
          <div className="divFotosPessoais" >
            <img className="fotoPessoal" title="Graduação e Mestrado" alt="Cefet Logo" src="https://www.lavras24horas.com.br/portal/wp-content/uploads/2018/11/1-3-500x330.jpg"></img>
            <img className="fotoPessoal" title="Com os orientadores na Banca de Defesa de Mestrado" alt="Banca" src="https://scontent.fldb1-1.fna.fbcdn.net/v/t1.6435-9/47396769_2580014035342884_3297034024186281984_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=84a396&_nc_eui2=AeE1LBjnP27plvSgm2RWrHmCFNVyPZypZ7gU1XI9nKlnuBq3SjY-XC8an-b5J9wNEbUTeKG9n54BnK9GTp34DAcM&_nc_ohc=2n-mCk2V91MAX-wNraR&_nc_ht=scontent.fldb1-1.fna&oh=00_AT-cjPg3Wv4ykY14AmRnOUYN36X6_vdoZ3LzBcIn_MzN5A&oe=624402F2"></img>
            <img className="fotoPessoal" title="Aula de Soldagem" alt="Fundição" src="https://scontent.fldb1-1.fna.fbcdn.net/v/t39.30808-6/275105628_7386658301345076_3567707687195970181_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHonqog093APKH-68W9xlEX84jo6RzxfMLziOjpHPF8wnvhiU5WBt1GSjfCqQZKxq7V9k2ZEAZwAzuvHrn6JLZA&_nc_ohc=WF_rPq0nPsQAX8jNNRQ&_nc_ht=scontent.fldb1-1.fna&oh=00_AT-L-MMglWwR9Z13N_qzGXl5wptkJqJBbeG8TxEOdcA9KA&oe=6224727D"></img>
          </div>
          <div className="divFotosPessoais" >
            <img className="fotoPessoal" title="Iniciação Científica" alt="Funed Logo" src="https://ecodiagnostica.com.br/wp-content/uploads/2020/03/funed.png"></img>
            <img className="fotoPessoal" title="Experimentos em células de câncer de próstata" alt="Funed" src="https://scontent.fldb1-1.fna.fbcdn.net/v/t1.6435-9/91402586_3919548094722798_4320823188100481024_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=84a396&_nc_eui2=AeExN0-6Xo0gVII5wyXXiS6X-dH0qDgiHbb50fSoOCIdtkggdS2nDyKQImXm5zjBacHK8lPTJgUg3b1hq4PPapno&_nc_ohc=FoOeuiNoy2sAX_wQ05k&_nc_ht=scontent.fldb1-1.fna&oh=00_AT9MnPz8ToaCxiMsEsyk117YAiWREPnGEkHV2R-SGiiUag&oe=62447BB5"></img>
            <img className="fotoPessoal" title="Garrafas com experimento" alt="Funed Cultivo garrafas" src="https://scontent.fldb1-1.fna.fbcdn.net/v/t39.30808-6/275094712_7386677861343120_884430157110616449_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGWW8Ht8JGLpwOW-N782_O6nQjzb1LZDeGdCPNvUtkN4SdecXgI-lJApzHl4qO7-T9btg6E2rW7mS6X_uuoLDHR&_nc_ohc=AQcVmoaDCtIAX9kj70G&_nc_ht=scontent.fldb1-1.fna&oh=00_AT99_BbuuljNVtae8HJDcO6-0g1EGOyxNNX112pHPSZhSA&oe=62255624"></img>
            </div>

            <div className="divFotosPessoais" >
            <img className="fotoPessoal" title="Comex Tecnololgia Médica" alt="ComexLogo" src="https://scontent.fldb1-1.fna.fbcdn.net/v/t1.6435-9/49555784_906063259784323_380608392474918912_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFb__78wafMIS8P4WsGICU0M4ABF5ZbvWkzgAEXllu9aScq1vzgT91sTC6rJipxxj9RGuLdiVTDm15U7gjrBzpY&_nc_ohc=y7WRHX2rL88AX_94A-h&_nc_ht=scontent.fldb1-1.fna&oh=00_AT9nuX4rK3GEb_AhtoKwVPhum3FrXXhWp4V0cJ_SEeUHQA&oe=624830A3"></img>
            <img className="fotoPessoalEstendida" title="Feira Internacional de Máquinas e Equipamentos" alt="Feimec" src="https://scontent.fldb1-1.fna.fbcdn.net/v/t39.30808-6/275134140_7391915944152645_3031900437891456913_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFBsltMQz7kYkcmknJIQ2pa4ojvJkN8h4fiiO8mQ3yHh8ptPaurw7o4Q7Y0zRzBINZZGO4lAwOsrqrZzGoEbw5g&_nc_ohc=Nq08Cz3ijmcAX9ZDvvw&_nc_ht=scontent.fldb1-1.fna&oh=00_AT97iAE06UTZSpoNkdZODUZsgN3toS0GlKcrVK-7uHFe4A&oe=622569EB"></img>
            </div>

          </div>
        )
    }
}

export default Research;
