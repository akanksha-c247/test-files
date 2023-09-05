import React from "react";
import { Banner } from "../banner";
import { Header } from "../header";
import { NavBar } from "../navBar";
import Card from "../../components/card";
import cardData from '../../utils/cardData.json'; 
import routeCard from '../../utils/optmization.json'; 
import { RoutePlanning } from "../routPlanning";
import './home.scss';
import { Button } from "../../components/inputFields/button";
import { AccordianPage } from "../answerQuestion";
import { FeedBackPage } from "../feedBack";
import projectImage from '../../assets/img/projects.svg'
import homeImage from '../../assets/img/home.svg';
import vehicleImage from '../../assets/img/vehicle.svg';
import savingImage from '../../assets/img/savings.svg'

export const Home = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Banner />
      <div className="textSystem">
        <h1>
        Keys to Routing and Mobile Workforce Management Systems<br/> Implementation Success
        </h1>
        <p>Easily more than 50% of software projects never get used after the initial implementation. ROC’s refined<br/>methodology ensures project success by addressing the critical needs.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px'}}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            content={card.content}
            bgColor='white'
            width={400}  
            height={400}
            alt='image'
          />
        ))}
      </div>
      <RoutePlanning/>
      <div className="route-services">
        <h1 className="services">Route Optimization Services</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
        {routeCard.slice(0, 3).map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            content={card.content}
            bgColor='white'
            width={500}  
            height={500}
            alt='image'
          />
        ))}
      </div>
      <Button className='buttonTextHome' label="GET STARTED" arrowColor="white" textColor="#007bff" backgroundColor="white" borderColor="#379ACD"/>
      </div>
      <div>
      <h1>Optimizing Waste Collection Routing Since 2000</h1>
      <div>
        <div className="col-3"><img src={projectImage} alt="projectimage"/></div>
        <div className="col-3"><img src={homeImage} alt="homeimage"/></div>
        <div className="col-3"><img src={vehicleImage} alt="vehcleimag"/></div>
        <div className="col-3"><img src={savingImage} alt="savingimage"/></div>
      </div>
      </div>
      <AccordianPage/>
      <FeedBackPage/>
      <div>
      </div>
    </>
  );
};