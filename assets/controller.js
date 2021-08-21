class Controller {
    constructor(game, view) {
        this.game = game;
        this.view = view;
        
        document.addEventListener('keydown', this.controlKey.bind(this));
        
        this.startGame();
    }
    
    startGame() {
        this.game.createBlock();
        this.game.createBlock();
        this.view.render(this.game.getState());
    }
    
    controlKey(Event) {
        switch(Event.keyCode) {
            case 37:
                this.game.moveLeft();
                this.view.render(this.game.getState());
                break;
            case 38:
                this.game.moveTop();
                this.view.render(this.game.getState());
                break;
            case 39:
                this.game.moveRight();
                this.view.render(this.game.getState());
                break;
            case 40:
                this.game.moveDown();
                this.view.render(this.game.getState());
                break;
        }
    }
}












