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
        c.beginPath(); // start of flower of life
        c.arc(this.x,this.y, this.radius, 0, Math.PI *2,false); // first circle
        c.strokeStyle = "purple";
        c.stroke();
        c.beginPath();
        c.arc(this.x,this.y+30,30,0,Math.PI *2,false); // first circle below
        c.strokeStyle = "purple";
        c.stroke();
        c.beginPath();
        c.arc(this.x+26.25,this.y+15, 30, 0, Math.PI * 2, false); // first circle to the right
        c.stroke();
        c.beginPath();
        c.arc(this.x-26.25,this.y+15, 30, 0, Math.PI * 2, false); // first circle to the left
        c.stroke();
        c.beginPath();
        c.arc(this.x+26.25, this.y+45, 30, 0, Math.PI * 2, false); // 2nd right circle down
        c.stroke();
        c.beginPath();
        c.arc(this.x-26.25, this.y+45, 30, 0, Math.PI * 2, false); // 2nd left circle down
        c.stroke();
        c.beginPath();
        c.arc(this.x,this.y+60,30,0,Math.PI *2,false); // center bottom circle
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
for (var i = 0; i <10; i++) {    
    var radius = 30;
    var x = Math.random() * (innerWidth - radius *2) + radius; // starting x position.
    var y = Math.random() * (innerHeight - radius *2) + radius;
    var xVelocity = (Math.random() - 0.5) *3; // moving at 3 pixels 
    var yVelocity = (Math.random() - 0.5) *3; 
        circleArr.push(new Circle(x,y,xVelocity,yVelocity,radius));
        var circle = new Circle(200,200, 3,3,30);

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
