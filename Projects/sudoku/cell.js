class Cell {
    constructor(x, y, num) {
        this.x = x;
        this.y = y;
        this.num = num;
    }

    show() {
        // Cell Style
        noFill();
        stroke(0);
        strokeWeight(2)
        rect(this.x, this.y, width / 9, height / 9)

        // Cell Text
        textAlign(CENTER, CENTER)
        textFont('Helvetica')
        textSize((width / 9 * .5))
        textStyle(ITALIC)
        fill(255)
        noStroke()
        text(this.num, this.x + (width / 9) / 2, this.y + (height / 9) / 2)
    }
}