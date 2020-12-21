let board = (() => {
    let map = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
    let render = () => {
        let row1 = document.querySelector('.row1');
        let row2 = document.querySelector('.row2');
        let row3 = document.querySelector('.row3');

        row1.textContent = `${map[0]} | ${map[1]} | ${map[2]}`
        row2.textContent = `${map[3]} | ${map[4]} | ${map[5]}`
        row3.textContent = `${map[6]} | ${map[7]} | ${map[8]}`
    }
    return {
        render
    };
})();

let Player = (name, token) => {

}

let Game = () => {

}

board.render();
