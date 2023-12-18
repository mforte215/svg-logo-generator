class Shape {
    constructor() {
        this.shapeColor = '';
        this.textColor = '';
        this.text = '';
    }
    setShapeColor(newColor) {
        this.shapeColor = newColor;
    }

    setTextColor(newColor) {
        this.textColor = newColor;
    }

    setText(newText) {
        this.text = newText;
    }
}


class Circle extends Shape {

    render() {
        return `<?xml version="1.0" encoding="UTF-8" ?>
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <style>
    .logo-shape {
        fill: ${this.shapeColor};
    }

    .logo-text {
        fill: ${this.textColor};
        font-size: 4em

    }
    </style>
    <g>
    <circle class="logo-shape" cx="150" cy="100" r="80" />
    <text class="logo-text" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${this.text}</text>
    </g>
    </svg>`;
    }
}

class Square extends Shape {

    render() {
        return `<?xml version="1.0" encoding="UTF-8" ?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <style>
    .logo-shape {
        fill: ${this.shapeColor};
    }

    .logo-text {
        fill: ${this.textColor};
        font-size: 4em;

    }
    </style>
    <g>
    <rect class="logo-shape" x="50" width="200" height="200" />
    <text class="logo-text" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${this.text}</text>
    </g>
    </svg>`;
    }
}

class Triangle extends Shape {

    render() {
        return `<?xml version="1.0" encoding="UTF-8" ?>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="300" height="200">
    <style>
    .logo-shape {
        fill: ${this.shapeColor};
        transform: scale(4);
    }

    .logo-text {
        fill: ${this.textColor};
        font-size: 2.5em;

    }
    </style>
    <g>
    <polygon class="logo-shape" points="50,16 85,85 15,85 50,16" />
    <text class="logo-text" x="67%" y="84%" dominant-baseline="middle" text-anchor="middle">${this.text}</text>
    </g>
    </svg>`;
    }
}


module.exports = {
    Square: Square,
    Triangle: Triangle,
    Circle: Circle,
}

