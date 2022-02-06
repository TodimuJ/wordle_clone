document.addEventListener("DOMContentLoaded", () => {

    buildSquares();

    let guessedWords = [[]]; //array to whole each letter of each word guessed
    let availableSpace = 1; //variable will store position of next letter

    const keys = document.querySelectorAll('.keyboard-row button');

    for (let index = 0; index < keys.length; index++) {
        keys[index].onclick = ({ target }) => {
            const letter = target.getAttribute("data-key");

            updateGuessedWords(letter);
        };
    }

    function getCurrentWordArr(){
        const numberOfGuessedWords = guessedWords.length;

        return guessedWords[numberOfGuessedWords - 1];
    }

    function updateGuessedWords(letter) {
        const currentWordArr = getCurrentWordArr()

        if (currentWordArr && currentWordArr.length < 5) {
            currentWordArr.push(letter);

            const availableSpaceEl = document.getElementById(String(1));

            availableSpace = availableSpace + 1;

            availableSpaceEl.textContent = letter;
        }
    }

    function buildSquares() {
        const gameBoard = document.getElementById("board")

        //A for loop for 30 sqaures (6x5) for the whole board
        for (let index = 0; index < 30; index++) { 
            
            let square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id", index+1);
            gameBoard.appendChild(square);
        }
    }
})