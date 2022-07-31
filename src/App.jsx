import React, { useEffect } from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import MainHome from "./components/MainHome";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import SortedProducts from "./components/SortedProducts";
import Cart from "./components/Cart";
import { addManyCartsAction } from "./store/reducers/cartReducer";
import { useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("carts")) {
            dispatch(
                addManyCartsAction(JSON.parse(localStorage.getItem("carts")))
            )
        }
    }, []);

    
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MainHome />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/search/:query" element={<SortedProducts />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
