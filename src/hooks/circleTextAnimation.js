export default function circleTextAnimation(text) {
        text.current.innerHTML = text.current.innerText
            .split("")
            .map(
                (letter, i) =>
                    `<span style="transform:rotate(${
                        i * 10.2
                    }deg")>${letter}</span>`
            )
            .join("");
}
