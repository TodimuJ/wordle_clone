document.addEventListener("DOMContentLoaded", () => {

    buildSquares();

    let guessedWords = [[]]; //array to whole each letter of each word guessed
    let availableSpace = 1; //variable will store position of next letter

    const keys = document.querySelectorAll('.keyboard-row button');


    let word = "craze";
    let guessedWordCount = 0;

    function getCurrentWordArr(){
        const numberOfGuessedWords = guessedWords.length;

        return guessedWords[numberOfGuessedWords - 1];
    }

    function updateGuessedWords(letter) {
        const currentWordArr = getCurrentWordArr()

        if (currentWordArr && currentWordArr.length < 5) {
            currentWordArr.push(letter);

            const availableSpaceEl = document.getElementById(availableSpace);

            availableSpace = availableSpace + 1;

            availableSpaceEl.textContent = letter;
        }
    }

    function getTileColor(letter, index){
        const isCorrectLetter = word.includes(letter);

        if (!isCorrectLetter){
            return "rgb(58, 58, 60)";
        }

        const letterInThatPosition = word.charAt(index);
        const isCorrectPosition = letter === letterInThatPosition;

        if (isCorrectPosition){
            return "rgb(83, 141, 78)";
        }

        return "rgb(181, 159, 59)";
    };

    function handleSubmitWord() {
        const currentWordArr = getCurrentWordArr();

        //word has to be equal to 5 letters
        if (currentWordArr.length !== 5){
            window.alert("Word has to be 5 letters!");
        }

        const currentWord = currentWordArr.join('');


        const firstLetterId = (guessedWordCount * 5) + 1;
        const interval = 500;

        currentWordArr.forEach((letter, index) => {
            
            const tileColor = getTileColor(letter, index);
            const keyboardColor = document.getElementById(letter);    


            //sets the new word tiles' colors
            setTimeout(() => {
                
                const letterId = firstLetterId + index;
                const letterEl = document.getElementById(letterId);

                letterEl.classList.add("animate__flipInX");
                letterEl.style =  `background-color:${tileColor}; border-color:${tileColor}`;

            }, interval*index);
           
            setTimeout(() => { keyboardColor.style = `background-color: ${tileColor}`; }, 2500); //waits to update the new color of the keybaord
        });

        

        //congratulate user on guessing correct word
        if (currentWord === word) {

            const currentWordArr = getCurrentWordArr();

            currentWordArr.forEach((letter, index) => {

                setTimeout(() => {

                    const letterId = firstLetterId + index;
                    const letterEl = document.getElementById(letterId);

                    letterEl.classList.replace("animate__flipInX", "animate__bounce");      
    
                }, 2500); 

            });

            // window.alert("Impressive!");
        }

        


        if (guessedWords.length === 7){
            window.alert(`You have used up all your guesses! The word was ${word}.`);
        }
        
        guessedWords.push([]); //add new array to list to move to next line
        guessedWordCount = guessedWordCount + 1;
    }


    function buildSquares() {
        const gameBoard = document.getElementById("board")

        //A for loop for 30 sqaures (6x5) for the whole board
        for (let index = 0; index < 30; index++) { 
            
            let square = document.createElement("div");
            square.classList.add("square");
            square.classList.add("animate__animated");
            square.setAttribute("id", index+1);
            gameBoard.appendChild(square);
        }
    }

    // for (let index = 0; index < keys.length; index++) {
    //     keys[index].onclick = ({ target }) => {
    //         const letter = target.getAttribute("data-key");

    //         if (letter === "enter") {
    //             handleSubmitWord();
    //             return;      
    //         }

    //         // if (letter === "del") {

    //         //     return;
    //         // }


    //         updateGuessedWords(letter);
    //     };
    // }


    document.addEventListener('keypress', (event) => {
        var letter = event.key;

            if (event.keyCode === 13) {
                handleSubmitWord();
                return;      
         }

        updateGuessedWords(letter);

      }, false);

});