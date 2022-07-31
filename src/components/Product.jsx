import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../products/products";
import "../styles/Product.scss";
import MyButton from "./UI/MyButton/MyButton";
import windowUp from "../hooks/windowUp";
import { useSelector } from "react-redux";

function Product() {
    const params = useParams();
    const product = products[params.id - 1];
    const [count, setCount] = useState(1);
    const productPhotos = useRef(null);
    const [mainPhoto, setMainPhoto] = useState(product.photos[0]);
    const productSize = useRef(null);
    const router = useNavigate();
    const carts = useSelector((state) => state.cartReducer.carts);

    useEffect(() => {
        productPhotos.current.children[0].classList.add("selected");
        productSize.current.children[0].classList.add("active");
    }, []);

    function countAdd() {
        setCount(count + 1);
    }

    function countGet() {
        if (count <= 1) return;
        setCount(count - 1);
    }

    function selected(e) {
        for (let i = 0; i < product.photos.length; i++) {
            productPhotos.current.children[i].classList.remove("selected");
        }
        let target = e.target;
        let img = e.target;
        if (img.tagName === "DIV") {
            img = e.target.children[0];
        }
        if (e.target.tagName === "IMG") {
            target = e.target.parentElement;
        }

        target.classList.add("selected");
        setMainPhoto(img.src);
    }

    function active(e) {
        for (let i = 0; i < productSize.current.children.length; i++) {
            productSize.current.children[i].classList.remove("active");
        }
        let target = e.target;
        if (target.tagName === "DIV") {
            target = target.children[0];
        }

        target.classList.add("active");
    }

    function addCart() {
        if(carts.find((cart) => cart?.id === product?.id)) return
        if (localStorage.getItem("carts")) {
            let cartsLocal = JSON.parse(localStorage.getItem("carts"));
            cartsLocal.push(product);
            localStorage.setItem("carts", JSON.stringify(cartsLocal));
        } else {
            localStorage.setItem("carts", JSON.stringify([product]));
        }
    }

    return (
        <div className="product">
            <div className="product__wrapper">
                <div className="product-photos" ref={productPhotos}>
                    {product.photos.map((photo, index) => (
                        <div
                            key={index + 1000}
                            className="photo-container"
                            onClick={(e) => selected(e)}
                        >
                            <img className="photo-img" src={photo} alt="" />
                        </div>
                    ))}
                </div>
                <div className="product-avatar">
                    <img
                        className="product-img"
                        src={mainPhoto}
                        alt={product.title}
                    />
                </div>
                <div className="product-info">
                    <div className="product-title">
                        <h2>{product.title}</h2>
                    </div>
                    <div className="product-size" ref={productSize}>
                        {product.sizes.map((size, index) => (
                            <MyButton
                                key={index + 100}
                                onClick={(e) => active(e)}
                            >
                                {size}
                            </MyButton>
                        ))}
                    </div>
                    <div className="product-count">
                        <MyButton onClick={() => countAdd()}>+</MyButton>
                        <h2>{count}</h2>
                        <MyButton onClick={() => countGet()}>-</MyButton>
                    </div>
                    <div className="product-add">
                        <MyButton
                            onClick={() => {
                                windowUp();
                                router("/cart");
                                addCart();
                            }}
                        >
                            ADD ${product.price}
                        </MyButton>
                    </div>
                    <div className="product-about">
                        <p>{product.about}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
