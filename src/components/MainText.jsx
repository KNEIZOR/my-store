import React from "react";

function MainText() {
    return (
        <section className="main-text">
            <div className="main-text__wrapper">
                <h2>
                    FIGMA'S <i className="fa-solid fa-snowflake purple"></i>{" "}
                    COLLECTION <i className="fa-solid fa-bag-shopping red"></i>{" "}
                    OF <span className="underLine">LAYERS</span>{" "}
                    <i className="fa-solid fa-fire-flame-curved red"></i> AND{" "}
                    <i className="fa-solid fa-puzzle-piece green"></i>{" "}
                    <span className="underLine">COMPONENTS</span>{" "}
                    <i className="fa-solid fa-mitten orange"></i> FOR YOU{" "}
                    <i className="fa-solid fa-hat-cowboy-side purple"></i> AND{" "}
                    <i className="fa-solid fa-shirt orange"></i> YOUR{" "}
                    <i className="fa-solid fa-hat-cowboy green"></i> FRIENDS
                </h2>
            </div>
        </section>
    );
}

export default MainText;
