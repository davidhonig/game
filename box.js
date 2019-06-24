class Box {
    constructor(x,y,w,h) {
        const options = {
            friction: 1,
            restitution: 1
        }
        this.body = Bodies.rectangle(x, y, w, h, this.options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    } 

    isInvalid() {
        if (this.body.position.x < -20) {
            return true;
        }
        if (this.body.position.x > width +20) {
            return true;
        }
        if (this.body.position.y > height) {
            return true;
        }
        return false;
    };

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h)
        textSize(8);
        fill(255);
        textAlign(CENTER);
        text(this.w+'x'+this.h, 0, 3);

        pop();
    }
}