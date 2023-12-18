const {Square, Circle, Triangle} = require('./Shapes.js');

const MOCK_DATA = [
    `<?xml version="1.0" encoding="UTF-8" ?>
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <style>
    .logo-shape {
        fill: #000000;
    }

    .logo-text {
        fill: #FFFFFF;
        font-size: 4em

    }
    </style>
    <g>
    <circle class="logo-shape" cx="150" cy="100" r="80" />
    <text class="logo-text" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">NBC</text>
    </g>
    </svg>`,
    `<?xml version="1.0" encoding="UTF-8" ?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <style>
    .logo-shape {
        fill: #000000;
    }

    .logo-text {
        fill: #FFFFFF;
        font-size: 4em;

    }
    </style>
    <g>
    <rect class="logo-shape" x="50" width="200" height="200" />
    <text class="logo-text" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">ABC</text>
    </g>
    </svg>`,
    `<?xml version="1.0" encoding="UTF-8" ?>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="300" height="200">
    <style>
    .logo-shape {
        fill: #000000;
        transform: scale(4);
    }

    .logo-text {
        fill: #FFFFFF;
        font-size: 2.5em;

    }
    </style>
    <g>
    <polygon class="logo-shape" points="50,16 85,85 15,85 50,16" />
    <text class="logo-text" x="67%" y="84%" dominant-baseline="middle" text-anchor="middle">CBS</text>
    </g>
    </svg>`];


describe('Circle', () => {
    //A test to verify the results of the render method of the Circle class
    describe('render', () => {
        it('should create a template literal that represents the XML of the Circle SVG you wish to create. It calls upon the properites of the class to define the custom SVG', () => {
            const circle = new Circle();
            circle.setText('NBC');
            circle.setTextColor('#FFFFFF');
            circle.setShapeColor('#000000');
            expect(circle.render()).toEqual(MOCK_DATA[0]);
        })
    })
})


describe('Square', () => {
    //A test to verify the results of the render method of the Square class
    describe('render', () => {
        it('should create a template literal that represents the XML of the Square SVG you wish to create. It calls upon the properites of the class to define the custom SVG', () => {
            const square = new Square();
            square.setText('ABC');
            square.setTextColor('#FFFFFF');
            square.setShapeColor('#000000');
            expect(square.render()).toEqual(MOCK_DATA[1]);
        })
    })
})

describe('Triangle', () => {
    //A test to verify the results of the render method of the Circle class
    describe('render', () => {
        it('should create a template literal that represents the XML of the Triangle SVG you wish to create. It calls upon the properites of the class to define the custom SVG', () => {
            const triangle = new Triangle();
            triangle.setText('CBS');
            triangle.setTextColor('#FFFFFF');
            triangle.setShapeColor('#000000');
            expect(triangle.render()).toEqual(MOCK_DATA[2]);
        })
    })
})