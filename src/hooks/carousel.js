let pressed = false;
let startX;
let x;

export function trafficSlide(e, slider, slider_inner) {
    pressed = true;
    startX = Math.floor(
        e.clientX - slider_inner.current.getBoundingClientRect().left
    );
    slider.current.style.cursor = "grabbing";
}

export function ent(slider) {
    slider.current.style.cursor = "grab";
}

export function leaved(slider) {
    slider.current.style.cursor = "default";
}

export function up(slider) {
    slider.current.style.cursor = "grab";
}

export function move(e, slider, slider_inner) {
    if (!pressed) return;
    e.preventDefault();

    x = Math.floor(e.clientX - slider.current.getBoundingClientRect().left);

    slider_inner.current.style.left = `${x - startX}px`;

    let outer = slider.current.getBoundingClientRect();
    let inner = slider_inner.current.getBoundingClientRect();

    if (parseInt(slider_inner.current.style.left) > 0) {
        slider_inner.current.style.left = "0px";
    } else if (inner.right < outer.right) {
        slider_inner.current.style.left = `-${inner.width - outer.width}px`;
    }
}

window.addEventListener("mouseup", () => {
    pressed = false;
});