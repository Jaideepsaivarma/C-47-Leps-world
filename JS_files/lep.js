class Lep{
    constructor(x, y) {
        var options = {
         isStatic : true
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/lep1.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}