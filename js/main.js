document.addEventListener("DOMContentLoaded", () => {

    buildSquares();

    const keys = document.querySelectorAll('keyboard-row button')

    for (let index = 0; index < keys.length; index++) {
        keys[i].onclick = ({ target }) => {
            
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