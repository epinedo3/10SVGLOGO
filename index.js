const Triangle = require("./library/triangle")
const Square = require("./library/square")
const Circle = require("./library/circle")
const fs = require("fs")
const inquirer = require("inquirer")

inquirer.prompt([{
    type: 'input',
    name: 'text',
    message: 'What 3 Characters would you like in the shape? '
},{
    type: 'input',
    name: 'textColor',
    message: 'What color text would you like in the shape? '
},{
    type: 'list',
    name: 'shape',
    message: 'What shape would you like? ',
    choices: ['circle', 'triangle', 'square']

},{
    type: 'input',
    name: 'shapeColor',
    message: 'What color shape would you like?'
}])

.then(response => {
    if(response.shape === "circle"){
        const circle = new Circle (response.text, response.textColor, response.shape, response.shapeColor)
        fs.writeFileSync("./dist/logo.svg",circle.render())
    }

    if(response.shape === "triangle"){
        const triangle = new Triangle (response.text, response.textColor, response.shape, response.shapeColor)
        fs.writeFileSync("./dist/logo.svg",triangle.render())
    }

    if(response.shape === "square"){
        const square = new Square (response.text, response.textColor, response.shape, response.shapeColor)
        fs.writeFileSync("./dist/logo.svg",square.render())
    }
})