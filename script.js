let board = (() => {
    let map = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];

    let render = () => {
        let cells = document.querySelectorAll('td');
        cells.forEach((cell, index) => {
            cell.classList.add(`cell${index + 1}`);
            cell.textContent = map[index];
        });
    }

    return {
        render
    };
})();

let Player = (name, token) => {
    let turn = 0;
    let choices = [];

    let play = (position) => {
        let target = document.querySelector(`.cell${position}`);
        target.textContent = token;
        choices.push(position);
    }

    let checkWin = () => {
        let winCon = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
        let result = false;
        
        winCon.forEach(arr => {
            if (choices.includes(arr[0]) && choices.includes(arr[1]) && choices.includes(arr[2])) {
                result = true;
            }
        })
        return result;
    }

    let checkTie = () => {
        let result = true;

        let cells = document.querySelectorAll('td');
        cells.forEach(cell => {
            if (cell.textContent == '-') {
                result = false;
            }
        })
        return result;
    } // Try to work with the win and tie

    return {
        name,
        turn,
        choices,
        play,
        checkWin,
        checkTie
    };
}

let Game = () => {
    board.render();
    
    let p1Name = window.prompt('P1 Enter Your Name:');
    let p1Token = window.prompt('P1 Enter Your Token:');
    alert(`Your details are (${p1Name}, ${p1Token})`);
    let p1 = Player(p1Name, p1Token);
    
    let p2Name = window.prompt('P2 Enter Your Name:');
    let p2Token = window.prompt('P2 Enter Your Token:');
    alert(`Your details are (${p2Name}, ${p2Token})`);
    let p2 = Player(p2Name, p2Token);

    let reset = () => {
        p1 = Player(p1Name, p1Token);
        p2 = Player(p2Name, p2Token);
        board.render();
    }
    
    let cells = document.querySelectorAll('td');
    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            let target = document.querySelector(`.cell${index + 1}`);

            if (target.textContent != '-') {
                alert('Invalid Play'); // logic to prevent double plays on a position
            } else if (p1.turn == p2.turn) {
                p1.play(index + 1);
                p1.turn++;
                if (p1.checkWin()) {
                    alert(`${p1.name} Wins!`);
                    reset();
                } else if (p1.checkTie()) {
                    alert("It's a Tie!");
                    reset();
                }
            } else if (p1.turn > p2.turn) {
                p2.play(index + 1);
                p2.turn++;
                if (p2.checkWin()) {
                    alert(`${p2.name} Wins!`);
                    reset();
                } else if (p2.checkTie()) {
                    alert("It's a Tie!");
                    reset();
                }
            }            
        })
    })
}


