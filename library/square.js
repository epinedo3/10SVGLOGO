const Shape = require("./shapes")
class Square extends Shape{
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor)
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200" class=""><link xmlns="" type="text/css" id="dark-mode" rel="stylesheet" href=""/><style xmlns="" type="text/css" id="dark-mode-сustom-style"/><style xmlns="" type="text/css" id="dark-mode-theme-changer-style"/>

        <rect x="10" y="10" width="300" height="200" stroke="black" fill="${this.shapeColor}" stroke-width="5"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}
module.exports = Square