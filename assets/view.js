class View {
    constructor(element, width, height, cols, rows) {
        this.element = element;
        this.width = width;
        this.height = height;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.element.appendChild(this.canvas);
        
        this.blockWidth = this.width / cols;
        this.blockHeight = this.height / rows;
        this.lineWidth = 3;
        this.colorBlock = {
            2: 'red',
            4: 'orange',
            8: 'green',
            16: 'cyan',
            32: 'blue',
            64: 'purple',
            128: '#41a780',
            256: '#c43d61',
            512: '#93538c',
            1024: 'yellow',
            2048: '#880000'
        };
        this.colorStroke = {
            2: '#6f0000',
            4: '#6c4600',
            8: '#002c00',
            16: '#007b7b',
            32: '#020271',
            64: '#2c002c',
            128: '#1a4636',
            256: '#521928',
            512: '#2f1a2d',
            1024: '#6c6c00',
            2048: '#3e0000'
        };
    }
    
    render(state) {
        this.clearScreen();
        this.renderGrid();
        this.renderPlayfield(state);
        this.renderScore(state);
    }
    
    renderPlayfield({playfield}) {
        for(let y=0; y<playfield.length; y++) {
            for(let x=0; x<playfield[y].length; x++) {
                if(playfield[y][x] !== 0) {
                    this.renderBlock(
                        x*this.blockWidth,
                        y*this.blockHeight,
                        this.blockWidth,
                        this.blockHeight,
                        this.colorBlock[playfield[y][x]],
                        this.colorStroke[playfield[y][x]],
                        playfield[y][x]
                    );
                }
            }
        }
    }
    
    renderBlock(x,y,width,height,colorBlock,colorStroke,value) {
        this.ctx.fillStyle = colorBlock;
        this.ctx.fillRect(x,y,width,height);
        this.ctx.strokeStyle = colorStroke;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeRect(x,y,width,height);
        
        this.ctx.fillStyle = colorStroke;
        this.ctx.font = 'bold 24px Arial';
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(value, x+(width/2), y+(height/2));
    }
    
    renderGrid() {
        for(let y=0; y<4; y++) {
            for(let x=0; x<4; x++) {
                this.ctx.strokeStyle = '#ccc';
                this.ctx.lineWidth = this.lineWidth;
                this.ctx.strokeRect(x*this.blockWidth, y*this.blockHeight, this.blockWidth, this.blockHeight);
            }
        }
    }
    
    renderScore({score}) {
        document.getElementById('out_score').innerHTML = score;
        
        
        if(localStorage.getItem('score')) {
            if(localStorage.getItem('score') < score) {
                localStorage.setItem('score', score);
            }
        } else {
            localStorage.setItem('score', score);
        }
        document.getElementById('best').innerHTML = localStorage.getItem('score');
    }
    
    clearScreen() {
        this.ctx.clearRect(0,0,this.width,this.height);
    }
}




















