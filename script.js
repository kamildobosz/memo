const squares = [...document.querySelectorAll("div")];
const button = document.querySelector("button");
const cardsColor = [
    "red",
    "red",
    "blue",
    "blue",
    "green",
    "green",
    "pink",
    "pink",
    "violet",
    "violet",
    "yellow",
    "yellow",
    "gold",
    "gold",
    "brown",
    "brown",
];

let activeCard = "";
const activeCards = [];

const pairs = cardsColor.length / 2;
let gameResult = 0;

const showColor = function() {
    activeCard = this;
    if (activeCard == activeCards[0]) return;
    activeCard.classList.remove("hidden");

    if (activeCards.length === 0) {
        activeCards[0] = activeCard;
    } else {
        squares.forEach((square) => square.removeEventListener("click", showColor));
        activeCards[1] = activeCard;

        setTimeout(function() {
            if (activeCards[0].className === activeCards[1].className) {
                activeCards.forEach((card) => card.classList.add("off"));
                gameResult++;
                if (gameResult == pairs) {
                    alert("Wygrana!");
                }
            } else {
                activeCards.forEach((card) => card.classList.add("hidden"));
            }
            activeCards.length = 0;
            activeCard = "";
            squares.forEach((square) => {
                square.addEventListener("click", showColor);
            });
        }, 1000);
    }
};

startGame = function() {
    squares.forEach((square) => {
        let number = Math.floor(Math.random() * cardsColor.length);

        let color = cardsColor[number];
        square.classList.add(color);
        cardsColor.splice(number, 1);
    });

    setTimeout(function() {
        squares.forEach((square) => {
            square.classList.add("hidden");
            square.addEventListener("click", showColor);
        });
    }, 2000);
};

button.addEventListener("click", startGame);