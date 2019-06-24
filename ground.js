class Ground {
    constructor() {
        this.x = width/2;
        this.y = height;
        this.height = 10;
        this.options = {
            isStatic: true
        }
        ground = Bodies.rectangle(this.x, this.y, width, this.height, this.options);
        World.add(world, ground);
    }

    show() {     
        fill(200);
        rectMode(CENTER);
        rect(this.x, this.y, width, this.height);
    }
}