// add variables inside a functions so i can use it all over.

// add clicks listiners for sqaures and connect it to the board array.

// do a dialog for user entries - names, and game choice.

const Game = (() => {

    const newGame = () => {
        document.querySelector('.newGameDialog').showModal();
    
        // if (document.querySelector('[name="choice"').id != 'human') {
        //     document.querySelector('.playerOname').setAttribute('disabled', '');
        // }
    }

    return {
        newGame,
    }
})();

const newGameBtn = document.querySelector('.newGame');
newGameBtn.addEventListener('click', Game.newGame)