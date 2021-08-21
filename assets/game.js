class Game {
    constructor() {
        this.playfield = this.createPlayfield();
        this.score = 0;
        this.overBlock = false;
    }
    
    getState() {
        return {
            playfield: this.playfield,
            score: this.score,
            isGameOver: this.overBlock
        };
    }
    
    createPlayfield() {
        let playfield = [];
        for(let i=0; i<4; i++) {
            playfield[i] = new Array(4).fill(0);
        }
        return playfield;
    }
    
    createBlock() {
        let arr = [];
        for(let y=0; y<this.playfield.length; y++) {
            for(let x=0; x<this.playfield[y].length; x++) {
                if(this.playfield[y][x] === 0) {
                    arr.push([y,x]);
                }
            }
        }
        
        if(arr.length == 0) {
            alert('Game Over');
            return;
        }
//        } else {
            function getRandom() {
                return Math.floor(Math.random()*arr.length);
            }
            
            let chance = (Math.random() < 0.9);
            
            let index = getRandom();
            
            this.playfield[arr[index][0]][arr[index][1]] = chance ? 2 : 4;
//        }
    }
    
    moveTop() {
        let moved = false;
        for(let i=0; i<3; i++) {
            for(let y=1; y<this.playfield.length; y++) {
                for(let x=0; x<this.playfield[y].length; x++) {
                    if(this.playfield[y][x] !== 0 && this.playfield[y-1][x] === 0) {
                        this.playfield[y-1][x] = this.playfield[y][x];
                        this.playfield[y][x] = 0;
                        moved = true;
                    }
                }
            }
        }
        
        for(let y=1; y<this.playfield.length; y++) {
            for(let x=0; x<this.playfield[y].length; x++) {
                if(this.playfield[y][x] !== 0 && this.playfield[y][x] === this.playfield[y-1][x]) {
                    this.playfield[y-1][x] += this.playfield[y][x];
                    this.playfield[y][x] = 0;
                    this.score += this.playfield[y-1][x];
                    moved = true;
                }
            }
        }
        
        for(let y=1; y<this.playfield.length; y++) {
            for(let x=0; x<this.playfield[y].length; x++) {
                if(this.playfield[y][x] !== 0 && this.playfield[y-1][x] === 0) {
                    this.playfield[y-1][x] = this.playfield[y][x];
                    this.playfield[y][x] = 0;
                    moved = true;
                }
            }
        }
        
        if(moved) {
            this.createBlock();
        }
    }
    
    moveDown() {
        let moved = false;
        for(let i=0; i<3; i++) {
            for(let y=this.playfield.length-2; y>=0; y--) {
                for(let x=0; x<this.playfield[y].length; x++) {
                    if(this.playfield[y][x] !== 0 && this.playfield[y+1][x] === 0) {
                        this.playfield[y+1][x] = this.playfield[y][x];
                        this.playfield[y][x] = 0;
                        moved = true;
                    }
                }
            }
        }
        
        for(let y=this.playfield.length-2; y>=0; y--) {
            for(let x=0; x<this.playfield[y].length; x++) {
                if(this.playfield[y][x] !== 0 && this.playfield[y][x] === this.playfield[y+1][x]) {
                    this.playfield[y+1][x] += this.playfield[y][x];
                    this.playfield[y][x] = 0;
                    this.score += this.playfield[y+1][x];
                    moved = true;
                }
            }
        }
        
        for(let y=this.playfield.length-2; y>=0; y--) {
            for(let x=0; x<this.playfield[y].length; x++) {
                if(this.playfield[y][x] !== 0 && this.playfield[y+1][x] === 0) {
                    this.playfield[y+1][x] = this.playfield[y][x];
                    this.playfield[y][x] = 0;
                    moved = true;
                }
            }
        }
        if(moved) {
            this.createBlock();
        }
    }
    
    moveLeft() {
        let moved = false;
        for(let i=0; i<3; i++) {
            for(let y=0; y<this.playfield.length; y++) {
                for(let x=1; x<this.playfield[y].length; x++) {
                    if(this.playfield[y][x] !== 0 && this.playfield[y][x-1] === 0) {
                        this.playfield[y][x-1] = this.playfield[y][x];
                        this.playfield[y][x] = 0;
                        moved = true;
                    }
                }
            }
        }
        
        for(let y=0; y<this.playfield.length; y++) {
            for(let x=1; x<this.playfield[y].length; x++) {
                if(this.playfield[y][x] !== 0 && this.playfield[y][x] === this.playfield[y][x-1]) {
                    this.playfield[y][x-1] += this.playfield[y][x];
                    this.playfield[y][x] = 0;
                    this.score += this.playfield[y][x-1];
                    moved = true;
                }
            }
        }
        
        for(let y=0; y<this.playfield.length; y++) {
            for(let x=1; x<this.playfield[y].length; x++) {
                if(this.playfield[y][x] !== 0 && this.playfield[y][x-1] === 0) {
                    this.playfield[y][x-1] = this.playfield[y][x];
                    this.playfield[y][x] = 0;
                    moved = true;
                }
            }
        }
        if(moved) {
            this.createBlock();
        }
    }
    
    moveRight() {
        let moved = false;
        for(let i=0; i<3; i++) {
            for(let y=0; y<this.playfield.length; y++) {
                for(let x=this.playfield[y].length-2; x>=0; x--) {
                    if(this.playfield[y][x] !== 0 && this.playfield[y][x+1] === 0) {
                        this.playfield[y][x+1] = this.playfield[y][x];
                        this.playfield[y][x] = 0;
                        moved = true;
                    }
                }
            }
        }
        
        for(let y=0; y<this.playfield.length; y++) {
            for(let x=this.playfield[y].length-2; x>=0; x--) {
                if(this.playfield[y][x] !== 0 && this.playfield[y][x] === this.playfield[y][x+1]) {
                    this.playfield[y][x+1] += this.playfield[y][x];
                    this.playfield[y][x] = 0;
                    this.score += this.playfield[y][x+1];
                    moved = true;
                }
            }
        }
        
        for(let y=0; y<this.playfield.length; y++) {
            for(let x=this.playfield[y].length-2; x>=0; x--) {
                if(this.playfield[y][x] !== 0 && this.playfield[y][x+1] === 0) {
                    this.playfield[y][x+1] = this.playfield[y][x];
                    this.playfield[y][x] = 0;
                    moved = true;
                }
            }
        }
        if(moved) {
            this.createBlock();
        }
    }
}
































