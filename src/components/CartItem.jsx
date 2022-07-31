import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartAction } from "../store/reducers/cartReducer";
import {
    addResultAction,
    totalSumAction,
    updateResultAction,
} from "../store/reducers/totalReducer";
import MyButton from "./UI/MyButton/MyButton";

function CartItem({ cart }) {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cartReducer.carts);
    const [count, setCount] = useState(1);
    const results = useSelector((state) => state.totalReducer.results);
    const result = +cart.price * count;

    useEffect(() => {
        if (results.find((result) => result.id === cart.id)) return;
        dispatch(updateResultAction(cart.id));
        dispatch(addResultAction({ id: cart.id, result }));
        dispatch(totalSumAction());
    }, []);

    function countAdd() {
        setCount(count + 1);
        dispatch(updateResultAction(cart.id));
        dispatch(
            addResultAction({ id: cart.id, result: +cart.price * (count + 1) })
        );
        dispatch(totalSumAction());
    }

    function countGet() {
        if (count <= 1) return;
        setCount(count - 1);
        dispatch(updateResultAction(cart.id));
        dispatch(
            addResultAction({ id: cart.id, result: +cart.price * (count - 1) })
        );
        dispatch(totalSumAction());
    }

    function cartRemove(id) {
        dispatch(deleteCartAction(id));
        dispatch(updateResultAction(cart.id));
        dispatch(totalSumAction());
        let newArr = carts.filter((cart) => cart.id !== id);
        localStorage.setItem("carts", JSON.stringify(newArr));
    }

    return (
        <div key={cart.id + 1500} className="cart-container">
            <div className="cart-logo">
                <div className="cart-delete">
                    <MyButton onClick={() => cartRemove(cart.id)}>X</MyButton>
                </div>
                <img src={cart.img} alt={cart.title} />
                <div className="cart-title">
                    <h2>{cart.title}</h2>
                </div>
            </div>
            <div className="cart-about">
                <div className="cart-info"></div>
                <div className="cart-price">
                    <p>${cart.price}</p>
                </div>
                <div className="cart-count">
                    <MyButton onClick={() => countAdd()}>+</MyButton>
                    <h2>{count}</h2>
                    <MyButton onClick={() => countGet()}>-</MyButton>
                </div>
                <div className="cart-sub-total">${result}</div>
            </div>
        </div>
    );
}

export default CartItem;
