import React, { useEffect, useRef } from "react";
import circleTextAnimation from "../hooks/circleTextAnimation";
import "../styles/CircleAnimation.scss";

function CircleAnimation() {
    const circleText = useRef(null);

    useEffect(() => {
        circleTextAnimation(circleText);
    }, []);

    return (
        <div className="circle-container">
            <div className="circle">
                <div className="circle__wrapper">
                    <div className="circle-logo">
                        <i className="fa-regular fa-hand left-hand"></i>
                        <i className="fa-regular fa-hand right-hand"></i>
                    </div>
                    <div className="circle-text">
                        <p className="circle-p" ref={circleText}>
                            reforestation 100% of profits fund
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CircleAnimation;
