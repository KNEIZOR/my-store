import React from "react";
import "../styles/MainHome.scss";
import Cards from "./Cards";
import Carousel from "./Carousel";
import MainText from "./MainText";
import CircleAnimation from "./CircleAnimation";

function MainHome() {
    return (
        <main>
            <Carousel />
            <CircleAnimation />
            <MainText />
            <Cards />
        </main>
    );
}

export default MainHome;
