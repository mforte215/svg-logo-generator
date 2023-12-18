const inquirer = require('inquirer');
const fs = require('fs');
const {Square, Circle, Triangle} = require('./lib/Shapes/Shapes.js');

const questions = [
    {
        type: 'input',
        message: 'Enter 3 Characters For Your Company Logo (Extra Characters Will Be Removed):',
        name: 'companyLetters',
    },
    {
        type: 'input',
        message: 'Enter A Color For Your Company Logo Text (Color Name or Hex Value):',
        name: 'companyTextColor',
    },
    {
        type: 'list',
        message: 'Choose A Shape For Your Company Logo:',
        name: 'companyShape',
        choices: [
            'Circle',
            'Triangle',
            'Square',
        ]
    },
    {
        type: 'input',
        message: 'Enter A Color For Your Company Logo Shape (Color Name or Hex Value):',
        name: 'companyShapeColor',
    },
];



const generateSVG = (data) => {
    //get the answers out and santize the data 
    let answerArray = [];
    for (const [field, answer] of Object.entries(data)) {
        answerArray.push(answer);
    }

    let companyLetters = answerArray[0].substring(0, 3);
    let companyTextColor = answerArray[1];


    let companyShape = answerArray[2];
    let companyShapeColor = answerArray[3];
    let logo;
    switch (companyShape) {
        case 'Circle':
            logo = new Circle();
            logo.setShapeColor(companyShapeColor);
            logo.setTextColor(companyTextColor);
            logo.setText(companyLetters);
            break;
        case 'Triangle':
            //create triangle svg
            logo = new Triangle();
            logo.setShapeColor(companyShapeColor);
            logo.setTextColor(companyTextColor);
            logo.setText(companyLetters);
            break;
        case 'Square':
            //create square svg
            logo = new Square();
            logo.setShapeColor(companyShapeColor);
            logo.setTextColor(companyTextColor);
            logo.setText(companyLetters);
            break;
        default:
            break;
    }

    //return [`${companyShapeColor}_${companyLetters}.svg`, logo];
    return ['logo.svg', logo];
}



function init() {
    inquirer.prompt(questions).then((response) => {


        const [createdSVGName, createdSVGLogo] = generateSVG(response);
        if (createdSVGLogo) {

            try {
                if (!fs.existsSync('./examples')) {
                    fs.mkdirSync('./examples');
                }

                if (!fs.existsSync(`./examples/${createdSVGName}`)) {
                    let path = `./examples/${createdSVGName}`
                    fs.writeFile(path, createdSVGLogo.render(), (errorMessage) => {
                        errorMessage ? console.error(errorMessage) : console.log(`Generated ${createdSVGName}`);
                    });
                }

                else {
                    try {
                        //file already exists, need to overwrite.
                        let path = `./examples/${createdSVGName}`
                        fs.writeFileSync(path, createdSVGLogo.render(), {flag: 'w'});
                        console.log(`Generated ${createdSVGName}`);
                    }
                    catch (err) {
                        console.error(err);
                    }
                }

            }
            catch (err) {
                console.error(err);
            }



        }
        else {
            console.error("something went wrong");
        }

    });
}

init();