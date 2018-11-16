var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 50;
window.onresize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 50;
    c.clearRect(0, 0, innerHeight, innerWidth);
     circleArr = [];
for (var i = 0; i <innerHeight/10; i++) {    
    var radius = getRandoNum(innerWidth*.012,innerWidth*.015);
    var x = getRandoNum((radius*2)+10, innerWidth-((radius*2)+50));// starting x position.
    var y = getRandoNum((radius*2)+10, (innerHeight-130)-((radius*2)+50));
    var xVelocity = (Math.random() - 0.5) *3; // moving at 3 pixels * random -0.5 which makes a negative or positive
    var yVelocity = (Math.random() - 0.5) *3; 
    circleArr.push(new Circle(x,y,xVelocity,yVelocity,radius));
}
};// end window.onresize


function Circle(x, y, xVelocity, yVelocity, radius) {
    this.x = x;
    this.y = y; 
    this.xVelocity = xVelocity;
    this.yVelocity = yVelocity;
    this.radius = radius;
    
    this.draw = function() {
        c.beginPath(); // start of flower of life
        c.arc(this.x,this.y+this.radius,this.radius*2,Math.PI*2,false); // surrounding circle
        c.strokeStyle = "black";
        c.stroke();
        c.beginPath();
        c.arc(this.x,this.y, this.radius, 0, Math.PI *2,false); // first circle
        c.strokeStyle = "rgb(138,43,226)";
        c.stroke();
        c.stroke();
        c.beginPath();
        c.arc(this.x,this.y+this.radius,this.radius,0,Math.PI *2,false); // first circle below
        c.stroke();
        c.stroke();
        c.beginPath();
        c.arc(this.x+(this.radius -(this.radius/8)),this.y+(this.radius/2), this.radius, 0, Math.PI * 2, false); // first circle to the right
        c.stroke();
        c.stroke();
        c.beginPath();
        c.arc(this.x-(this.radius -(this.radius/8)),this.y+(this.radius/2), this.radius, 0, Math.PI * 2, false); // first circle to the left
        c.stroke();
        c.stroke();
        c.beginPath();
        c.arc(this.x+(this.radius -(this.radius/8)), this.y+(this.radius+(this.radius/2)), this.radius, 0, Math.PI * 2, false); // 2nd right circle down
        c.stroke();
        c.stroke();
        c.beginPath();
        c.arc(this.x-(this.radius -(this.radius/8)), this.y+(this.radius+(this.radius/2)), this.radius, 0, Math.PI * 2, false); // 2nd left circle down
        c.stroke();
        c.stroke();
        c.beginPath();
        c.arc(this.x,this.y+(this.radius*2),this.radius,0,Math.PI *2,false); // center bottom circle
        c.stroke();
        c.stroke();
    };// end this.draw function - creates flower of life
    this.update = function () {
        if( this.x + this.radius *2 > innerWidth -this.radius | this.x -(this.radius*2) < 0) {
            this.xVelocity = -this.xVelocity;
        }
        if (this.y + this.radius *2 > innerHeight -((this.radius*2)+115)| this.y -(this.radius *2) < 0){
            this.yVelocity = -this.yVelocity;
        }
        this.x+= this.xVelocity;
        this.y+= this.yVelocity; 
        this.draw();
    };// end this.update function - checker for perimiter hits then changes direction
}; // end Circle object orriented function. 
function getRandoNum (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}; // end random number range function. 
var circleArr = []; // global array to add new flowers too. 
for (var i = 0; i <innerHeight/10; i++) {    
    var radius = getRandoNum(innerWidth*.012,innerWidth*.015);
    var x = getRandoNum((radius*2)+10, innerWidth-((radius*2)+20));// starting x position.
    var y = getRandoNum((radius*2)+10, (innerHeight-130)-((radius*2)+20));
    var xVelocity = (Math.random() - 0.5) *3; // moving at 3 pixels * random 
    var yVelocity = (Math.random() - 0.5) *3; 
        circleArr.push(new Circle(x,y,xVelocity,yVelocity,radius));
        // var circle = new Circle(200,200, 3,3,30);
} // end for loop for generating X ammount of flowers - dependant on screen height 10%.
function animate() {
    requestAnimationFrame(animate); // requets function for animation refresh.
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i = 0; i < circleArr.length; i++) {
        circleArr[i].update();
    }// loops through array of circles/flowers and runs update which draws new positions 
}; // end animate function which is called on initial load and calls itself with animationFrames.
animate();

