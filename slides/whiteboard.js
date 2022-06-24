/*
Módulo de pizarra blnaca o negra, para notas

- `n`: pizarra transparente
- `k`: pizarra negra
- `c`: limpia la pizarra
- `1`, `2`, `3`, `4`, `5`: colores

Para usarlo: añade en la última transparencia y activa el html
No funciona en previsialización VSCode
*/

class WhiteBoard {
    constructor(canvas, lineColor='#f00f', lineWidth = 5) {
        this.canvas = canvas
        this.canvas.addEventListener('mousemove', (e) => { this.mousemove(e) })
        this.canvas.addEventListener('mousedown', (e) => { this.mousedown(e) })
        this.canvas.addEventListener('mouseup', (e) => { this.mouseup(e) })
        this.isMouseDown = false
        this.started = false
        this.lineColor = lineColor
        this.lineWidth = lineWidth
        this.mode = 'hidden'
    }

    clear() {
        let ctx = this.canvas.getContext("2d");
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillStyle = this.background;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // mouse
    mousedown(e) {
        let ctx = this.canvas.getContext("2d");
        this.isMouseDown = true;
        ctx.beginPath();
        ctx.lineWidth = this.lineWidth;
        this.canvasX = e.pageX - this.canvas.offsetLeft;
        this.canvasY = e.pageY - this.canvas.offsetTop;
        ctx.moveTo(this.canvasX, this.canvasY);
    }

    mousemove(e) {
        let ctx = this.canvas.getContext("2d");
        if(this.isMouseDown !== false) {
            this.canvasX = e.pageX - this.canvas.offsetLeft;
            this.canvasY = e.pageY - this.canvas.offsetTop;
            ctx.lineTo(this.canvasX, this.canvasY);
            ctx.strokeStyle = this.lineColor;
            ctx.stroke();
        }
    }

    mouseup(e) {
        let ctx = this.canvas.getContext("2d");
        this.isMouseDown = false;
        ctx.closePath();
    }

    // touch
    start(evt) {
        let ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(
            evt.touches[0].pageX,
            evt.touches[0].pageY
        );
        this.started = true;
    }

    move(evt) {
        let ctx = this.canvas.getContext("2d");
        if (this.started) {
            ctx.lineTo(
                evt.touches[0].pageX,
                evt.touches[0].pageY
            );

            ctx.strokeStyle = this.lineColor;
            ctx.lineWidth = 5;
            ctx.stroke();
        }
    }

    end(evt) {
        let ctx = this.canvas.getContext("2d");
        this.started = false;
    }

    /**
     * @param {string} m
     */
    set mode(m) {
        switch(m) {
            case 'whiteboard':
                this.background = '#0000'
                this.canvas.style.display = 'block'
                this.clear()
                break
            case 'backboard':
                this.background = '#000f'
                this.canvas.style.display = 'block'
                this.clear()
                break
            default:
                this.background = '#0000'
                this.clear()
                this.canvas.style.display = 'none'
        }
    }
}

let canvas = document.createElement("canvas");
document.body.appendChild(canvas)
canvas.style.position = 'absolute';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style['z-index'] = 100;
let wb = new WhiteBoard(canvas)

document.addEventListener('keydown', e => {
    switch(e.which){
        case 49: wb.lineColor='#f00f'; break; // 1
        case 50: wb.lineColor='#0f0f'; break; // 2
        case 51: wb.lineColor='#00ff'; break; // 3
        case 52: wb.lineColor='#000f'; break; // 4
        case 53: wb.lineColor='#ffff'; break; // 5
        case 75: wb.mode = 'backboard'; break; // k
        case 78: wb.mode = 'whiteboard'; break; // n
        default: wb.mode = 'hidden'
    }
});
window.addEventListener('resize', () => wb.clear())