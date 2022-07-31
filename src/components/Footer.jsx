import React from "react";
import "../styles/Footer.scss";
import windowUp from "../hooks/windowUp";
import MyButton from './UI/MyButton/MyButton'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer__wrapper">
                <div className="footer-logo">
                    <h2>MY STORE</h2>
                </div>
                <div className="footer-info">
                    <div className="footer-text">
                        <div className="footer-title">
                            OBJECTS THAT INSPIRE.
                        </div>
                        <div className="footer-about">
                            <Link to="/">Privacy & Terms</Link>
                            <Link to="/">Contact Us</Link>
                        </div>
                    </div>
                    <div className="footer-links">
                        <Link to="/">YOUTUBE</Link>
                        <Link to="/">TWITTER</Link>
                        <Link to="/">INSTAGRAM</Link>
                    </div>
                </div>
                <div className="button-up-container">
                    <MyButton onClick={() => windowUp()}>
                        <i className="fa-solid fa-circle-arrow-up"></i>
                    </MyButton>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
