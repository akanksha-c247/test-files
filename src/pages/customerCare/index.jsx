import React from 'react';
import './customer.scss';
import customerImage from '../../assets/img/tinyWowCustomer.png';
import { Button } from '../../components/inputFields/button';
import CircleComponent from '../../components/circle';

export const Customer = () => {
  return (
    <div className="grad1">
      <div className="col-6">
        <h1>A 15 minute call to review your route efficiency before considering route optimization software</h1>
        <p>
        Municipal solid waste managers may just want to know if they are efficient compared to<br/> their peers. They are not ready to re-route, buy route optimization software, or have a<br/> pending system change. ROC can help in two ways:
        </p>
        <CircleComponent size="20px" backgroundColor="#379ACD" text="1" textColor="white" className="circle"/>        
        <p>Call us for a 15 minute discussion to assess how efficient you currently are. Have on<br/> hand: number of stops, routes per day, collection method, working hours.</p>
        <CircleComponent size="20px" backgroundColor="#379ACD" text="2" textColor="white" className="circle"/>        
        <p className="">Waste Collections KPI Audit – Hire ROC to assess your operation’s in reference to ROC’s<br/>
        <a
          href="https://routeoptimizationconsultants.com/key-performance-indicators-waste-collection-route-optimization/"
          target="_blank"
          rel="noopener noreferrer"
          ><span className="linkindecators">waste collections key performance indicators</span></a>
        </p>
        <Button className='buttonText' label="Give Us A Call&nbsp;&nbsp;(571) 316-0676" arrowColor="white" textColor="white" backgroundColor="#8CC63F" borderColor="#379ACD" height='50px' width='400px'/>
      </div>
      <div className="col-6">
        <img src={customerImage} alt='customerImage' className='customer'/>
      </div>
    </div>
  );
};
