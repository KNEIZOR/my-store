import React, { useEffect, useState } from "react";
import "../styles/Cards.scss";
import { products } from "../products/products";
import Card from "./Card";

function Cards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(products);
    }, []);

    return (
        <section className="cards">
            <div className="cards__wrapper">
                {cards.map((card) => (
                    <Card key={card.id} card={card}/>
                ))}
            </div>
        </section>
    );
}
export default Cards;
