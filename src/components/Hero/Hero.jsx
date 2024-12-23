import React from 'react';
import Header from '../Header/Header';
import './Hero.css'; 
import hero_image from '../../assets/hero_image.png';
import hero_image_back from "../../assets/hero_image_back.png";
import Cuore from "../../assets/heart.png"
import Calorie from "../../assets/calories.png"
 
const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">          
        <Header/>

        <div className="the-best-ad">
          <div></div>
          <span>la migliore palestra nelle Marche</span>
        </div>
    
        {/* Header dell'hero */}
       <div className="hero-text">
        <div>
          <span className='stroke-text'>Crea </span>
          <span>Il tuo</span>
        </div>
        <div>
          <span>Corpo ideale</span>
        </div>
       <div>
         <span>
         In questa palestra puoi costruire il fisico dei tuoi sogni per vivere la tua vita 
         al meglio
         </span>
        </div>
      </div>  

      {/* figures */}
      <div className="figures">
        <div>
          <span>+50</span>
          <span>attrezzi</span>
        </div>
        <div>
          <span>+1500</span>
          <span>schede fatte</span>
        </div>
        <div>
          <span>+200</span>
          <span>persone soddisfatte</span>
        </div>
      </div>

      {/* bottone Hero */}
      <div className="hero-buttons">
        <buttons className="btn">Inizia ora</buttons>
        <buttons className="btn">Scopri</buttons>
      </div>


    </div>
    <div className="right-h">
      <button className="btn">Entra ora</button>

      
      <div className="heart-rate">
        <img src={Cuore} alt="" />
        <span>Battito cardiaco</span><span>100 bpm</span>
      </div>


      {/* immagini hero */}
      <img src={hero_image} alt="" className="hero-image"/>
      <img src={hero_image_back} alt="" className="hero-image-back"/>

      {/*calorie*/}
      <div className="calorie">
        <img src={Calorie} alt="" />
        <div>
          <span>Calorie bruciate</span>
          <span>218 kcal</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hero
