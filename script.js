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
    let play = (position) => {
        let target = document.querySelector(`.cell${position}`);
        target.textContent = token;
    }

    let turn = 0;

    return {
        name,
        turn,
        play
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
    alert(`Your token is (${p2Name}, ${p2Token})`);
    let p2 = Player(p2Name, p2Token);

    let cells = document.querySelectorAll('td');
    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            if (p1.turn == p2.turn) {
                p1.play(index + 1);
                p1.turn++;
            } else if (p1.turn > p2.turn) {
                p2.play(index + 1);
                p2.turn++;
            }
        })
    })
}

Game();
