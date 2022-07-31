import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "../styles/Cards.scss";

function SortedProducts() {
    const sortCards = useSelector((state) => state.sortedReducer.cards);
    const query = useSelector((state) => state.queryReducer.query);

    return (
        <section className="cards">
            <div className="cards__wrapper">
                <div className="sorted-product-title">
                    <h2>“{query.toUpperCase()}”</h2>
                </div>
                {sortCards.map((card, index) => (
                    <Card key={index + 300} card={card} />
                ))}
            </div>
        </section>
    );
}
export default SortedProducts;
