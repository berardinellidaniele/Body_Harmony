import React from 'react'
import './Programmi.css'
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'

const Programmi = () => {
  return (
    <div className="Programmi" id="programmi">
      {/* qui ci sta l'header */}
    <div className="programmi-header">
      <span className='stroke-text'>Esplora il</span>
      <span className='stroke-text'>Nostro</span>
      <span className='stroke-text'>Programma</span>
    </div>

    <div className="categorie-programmi">
      {programsData.map((programma)=>(
        <div className="categoria">
          {programma.image}
          <span>{programma.heading}</span>
          <span>{programma.details}</span>
          <div className="entra-ora"><span>Entra ora</span><img src={RightArrow} alt="" /></div>
        </div>
      ))}
    </div>
  </div>
    );
  };

export default Programmi;
