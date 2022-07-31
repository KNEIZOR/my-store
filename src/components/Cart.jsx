import React, { useEffect } from "react";
import "../styles/Cart.scss";
import MyButton from "./UI/MyButton/MyButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addManyCartsAction } from "../store/reducers/cartReducer";
import CartItem from "./CartItem";

function Cart() {
    const router = useNavigate();
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cartReducer.carts);
    const total = useSelector((state) => state.totalReducer.total);

    useEffect(() => {
        dispatch(addManyCartsAction(JSON.parse(localStorage.getItem("carts"))));
    }, []);

    return (
        <div className="carts">
            <div className="carts__wrapper">
                <div className="cart-header-title">
                    <h2>{carts.length} items in Cart</h2>
                </div>
                {carts.length ? (
                    <div className="cart-main">
                        <div className="header-info-cart-container">
                            <div className="header-info-cart">
                                <h2 className="item">Item</h2>
                                <h2 className="price">Price</h2>
                                <h2 className="qty">Qty</h2>
                                <h2 className="subtotal">SubTotal</h2>
                            </div>
                            {carts.map((cart) => (
                                <CartItem key={cart.id + 2500} cart={cart} />
                            ))}
                        </div>
                        <div className="total-container">
                            <div className="total__wrapper">
                                <div className="total-info">
                                    <div className="total-text">
                                        <h2>Shipping Total</h2>
                                    </div>
                                    <div className="total-count">${total}</div>
                                </div>
                                <div className="total-button">
                                    <MyButton>CHECKOUT</MyButton>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="cart-main">
                        <div className="not-cart">
                            <h2>EMPTY CART</h2>
                            <div className="all-products">
                                <MyButton onClick={() => router("/")}>
                                    SEE ALL PRODUCTS
                                </MyButton>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
