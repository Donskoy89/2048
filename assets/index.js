const root = document.getElementById('root');

const game = new Game();
const view = new View(root, 300, 300, 4, 4);
const controller = new Controller(game, view);

window.game = game;
window.view = view;

document.querySelector('#restart').onclick = () => window.location.reload();
