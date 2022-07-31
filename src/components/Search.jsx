import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    addCardsAction,
    deleteAllCardsAction,
    sortedCardsAction,
} from "../store/reducers/sortedReducer";
import "../styles/Search.scss";
import { useDispatch } from "react-redux";
import { products } from "../products/products";
import { addQueryAction, deleteQueryAction } from "../store/reducers/queryReducer";

function Search({ search, toggleSearch }) {
    const [query, setQuery] = useState("");
    const router = useNavigate();
    const dispatch = useDispatch();

    function querySort(e) {
        if (e.key === "Enter") {
            dispatch(deleteQueryAction)
            dispatch(addQueryAction(query))
            dispatch(deleteAllCardsAction());
            dispatch(addCardsAction(products));
            dispatch(sortedCardsAction(query));
            router(`/search/${query}`);
            toggleSearch(false)
            setQuery('')
        }
    }

    return (
        <div className="search" ref={search}>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => querySort(e)}
                placeholder="Search"
            />
        </div>
    );
}

export default Search;
