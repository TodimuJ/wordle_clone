document.addEventListener("DOMContentLoaded", () => {

    function buildSquares() {
        const gameBoard = document.getElementById("board")

        //A for loop for 30 sqaures (5x6) for the whole board
        for (let index = 0; index < 30; index++) { 
            
            let square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id", index+1);
            gameBoard.appendChild(square);
        }
    }
})