import React, { useRef, useState } from "react";
import "../styles/Header.scss";
import Search from "./Search";
import MyButton from "./UI/MyButton/MyButton";
import MySelect from "./UI/Select/MySelect";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const [isSearch, setIsSerch] = useState(false);
    const search = useRef(null);
    const carts = useSelector(state => state.cartReducer.carts)


    function toggleSearch() {
        if (!isSearch) {
            search.current.style.marginTop = "60px";
            setIsSerch(true);
        } else {
            search.current.style.marginTop = "-100px";
            setIsSerch(false);
        }
    }

    const option = [
        { value: "CANADA" },
        { value: "JAPAN" },
        { value: "UNITED KINGDOM" },
        { value: "UNITED STATE" },
        { value: "RUSSIA" },
    ];

    return (
        <header>
            <div className="header__wrapper">
                <nav>
                    <Search search={search} toggleSearch={toggleSearch}/>
                    <div className="nav__wrapper">
                        <ul className="left-menu">
                            <li>
                                <Link to="/">SHOP</Link>
                            </li>
                            <li>
                                <MyButton onClick={() => toggleSearch()}>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </MyButton>
                            </li>
                        </ul>

                        <div className="title">
                            <Link to="/">
                                <h1>THE FIGMA STORE</h1>
                            </Link>
                        </div>
                        <ul className="right-menu">
                            <li>
                                <MySelect option={option} />
                            </li>
                            <li>
                                <Link to="/cart">CART {carts.length}</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
