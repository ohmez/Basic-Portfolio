var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = mainContent.clientHeight +100;


function Circle(x, y, xVelocity, yVelocity, radius) {
    this.x = x;
    this.y = y; 
    this.xVelocity = xVelocity;
    this.yVelocity = yVelocity;
    this.radius = radius;
    
    this.draw = function() {
        console.log()
        c.beginPath();
        c.arc(this.x,this.y, this.radius, 0, Math.PI *2,false);
        c.strokeStyle = "rgb(138,43,226)";
        c.stroke();
    };
    this.update = function () {
        if( this.x + this.radius > innerWidth | this.x -this.radius < 0) {
            this.xVelocity = -this.xVelocity;
        }
        if (this.y + this.radius > innerHeight | this.y -this.radius <0){
            this.yVelocity = -this.yVelocity;
        }
        this.x+= this.xVelocity;
        this.y+= this.yVelocity; 
        this.draw();

    };
};


var circleArr = [];
for (var i = 0; i <100; i++) {    
    var radius = 40;
    var x = Math.random() * (innerWidth - radius *2) + radius; // starting x position.
    var y = Math.random() * (innerHeight - radius *2) + radius;
    var xVelocity = (Math.random() - 0.5) *3; // moving at 3 pixels 
    var yVelocity = (Math.random() - 0.5) *3; 
        circleArr.push(new Circle(x,y,xVelocity,yVelocity,radius));
        var circle = new Circle(200,200, 3,3,40);

}
function animate() {
    requestAnimationFrame(animate); // requets function for animation refresh.
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i = 0; i < circleArr.length; i++) {
        circleArr[i].update();
    }

circle.update();
};
animate();
