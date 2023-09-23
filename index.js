const Triangle = require("./library/triangle")
const Square = require("./library/square")
const Circle = require("./library/circle")
const fs = require("fs")
const inquirer = require("inquirer")

inquirer.prompt([{
    type: 'input',
    name: 'text',
    message: 'What text would you need in your shape? '
},{
    type: 'input',
    name: 'textColor',
    message: 'What text color would you need in your shape? '
},{
    type: 'list',
    name: 'shape',
    message: 'What shape would you need? ',
    choices: ['circle', 'triangle', 'square']

},{
    type: 'input',
    name: 'shapeColor',
    message: 'What shape color would you need?'
}])

.then(response => {
    if(response.shape === "circle"){
        const circle = new Circle (response.text, response.textColor, response.shape, response.shapeColor)
        fs.writeFileSync("./dist/logo.svg",circle.render())
    }
})