import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Ecomerce from './pages/Ecomerce';
import Research from './pages/Research';
import SoftwareDev from './pages/SoftwareDev';
import SobreMim from './components/SobreMim';
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div>
        <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route path="/Ecomerce" element={ <Ecomerce /> } />
        <Route path="/Research" element={ <Research />} />
        <Route path="/SoftwareDev" element={ <SoftwareDev />} />
        <Route path="/SobreMim" element={ <SobreMim />} />
        </Routes>
        </div>
  );
}
}

export default App;
