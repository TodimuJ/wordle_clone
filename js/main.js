document.addEventListener("DOMContentLoaded", () => {

    buildSquares();

    const guessedWords = [[]]

    const keys = document.querySelectorAll('.keyboard-row button');

    for (let index = 0; index < keys.length; index++) {
        keys[index].onclick = ({ target }) => {
            const key = target.getAttribute("data-key");

            console.log(key);
        };
    }

    function getCurrentWordArr(){
        const numberOfGuessedWords = guessedWords.length;

        return guessedWords[numberOfGuessedWords - 1 ]
    }

    function updateGuessedWords(letter) {

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