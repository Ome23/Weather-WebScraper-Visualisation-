let temperatureElement;
let Temperature;
let hothot;

function setup() {
    createCanvas(400, 400); // Set the canvas size to your desired dimensions
    temperatureElement = select('#temperature');
    let temperatureData = temperatureElement.html();
    let stringWithoutDegreeSymbol = temperatureData.replace(/°/g, '');
    console.log(stringWithoutDegreeSymbol);
    Temperature = parseInt(stringWithoutDegreeSymbol);
    hothot = new Hothot(); // Create an instance of the Hothot class
}

function draw() {
    background(220); // Set the background color

    // Call the move function of the Hothot object with a speed parameter

    hothot.move(60 +Temperature); // Variable can be changed as per requirements
    if (Temperature <= 10) {
        fill(0, 0, 255);
    } else if (Temperature > 10 && Temperature < 15) {
        fill(0, 255, 0);
    } else if (Temperature >= 15 && Temperature < 23) {
        fill(255, 255, 0);
    } else if (Temperature >= 23 && Temperature < 30) {
        fill(255, 165, 0);
    } else {
        fill(255, 0, 0);
    }
    // Drawing the Hothot object
    ellipse(hothot.x, hothot.y, 20, 20); 

function Hothot() {
    this.angle = 0;
    this.radius = 50;
    this.direction = 1;
    this.x = width / 2;
    this.y = height / 2;

    this.move = function (speedVar) {
        this.speed = map(speedVar, 55, 61, 0.01, 0.05);
        this.angle += this.speed;
        this.radius += this.direction;

        // Making the circle spiral outward and then inward
        if (this.radius >= 100 || this.radius <= 50) {
            this.direction *= -1;
        }

        this.x = width / 2 + cos(this.angle) * this.radius;
        this.y = height / 2 + sin(this.angle) * this.radius;
    };
}