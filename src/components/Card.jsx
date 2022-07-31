import React from "react";
import { useNavigate } from "react-router-dom";
import windowUp from '../hooks/windowUp'

function Card({ card }) {
    const router = useNavigate();

    return (
        <div className="card" onClick={() => {windowUp(); router(`/product/${card.id}`)}}>
            <div className="card-img-container">
                <img
                    className="card-img small"
                    src={card.img}
                    alt={card.title}
                />
                <img
                    className="card-img-hover small"
                    src={card.imgHover}
                    alt={card.title}
                />
            </div>

            <div className="card-description">
                <div className="card-title">{card.title}</div>
                <div className="card-price">${card.price}</div>
            </div>
        </div>
    );
}

export default Card;
