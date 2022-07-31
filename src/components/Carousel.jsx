import React, { useRef } from "react";
import "../styles/Carousel.scss";
import { ent, leaved, move, trafficSlide, up } from "../hooks/carousel";
import Slide from "./Slide";

function Carousel() {
    const slider = useRef(null);
    const slider_inner = useRef(null);
    const imgs = [
        {
            src: "https://images.wallpaperscraft.ru/image/single/sportsmen_sport_sportivnyj_muzhchina_118731_1920x1080.jpg",
            alt: "cosmos",
        },
        {
            src: "https://p4.wallpaperbetter.com/wallpaper/867/283/727/men-model-man-hd-wallpaper-preview.jpg",
            alt: "vrata",
        },
        {
            src: "https://p4.wallpaperbetter.com/wallpaper/879/208/838/actor-boy-gokhan-keser-wallpaper-preview.jpg",
            alt: "woman",
        },
        {
            src: "https://wallpapershome.ru/images/wallpapers/teylor-lyutner-3840x2160-top-model-mujchina-samie-populyarnie-3667.jpg",
            alt: "shar",
        },
        {
            src: "https://p4.wallpaperbetter.com/wallpaper/859/246/348/men-model-beard-man-suit-hd-wallpaper-preview.jpg",
            alt: "vorona",
        },
    ];

    return (
        <section className="carousel-top">
            <div
                className="slider"
                onMouseDown={(e) => trafficSlide(e, slider, slider_inner)}
                onMouseEnter={() => ent(slider)}
                onMouseLeave={() => leaved(slider)}
                onMouseUp={() => up(slider)}
                onMouseMove={(e) => move(e, slider, slider_inner)}
                ref={slider}
            >
                <div className="slider-inner" ref={slider_inner}>
                    {imgs.map((img) => (
                        <div key={img.alt} className="slide-img-container">
                            <Slide src={img.src} alt={img.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Carousel;
