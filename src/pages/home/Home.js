import React from "react";
import { Header } from "../../components/header";
import { NavBar } from "../../components/navBar";
import { Banner } from "../../components/banner";
import './home.scss';

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
    </>
  );
};
