const card = document.createElement("div")
card.setAttribute("id","card")

const sketch = document.createElement("h1")
sketch.setAttribute("class","sketch")
sketch.textContent = "Etch-A-Sketch"

const control_panel = document.createElement("div")
sketch.setAttribute("id","controls")

const buttons = document.createElement("div")
buttons.setAttribute("class","buttons")

const clear_btn = document.createElement("span")
clear_btn.setAttribute("class","btn")
clear_btn.textContent = "Clear Grid"

const erase_btn = document.createElement("span")
erase_btn.setAttribute("class","btn")
erase_btn.textContent = "Eraser" 

const drag_btn = document.createElement("span")
drag_btn.setAttribute("class","btn")
drag_btn.textContent = "Click & Drag"


const container = document.createElement("div")
container.setAttribute("id","container")


if(container){for (let i = 0; i < 256; i++) {
const square = document.createElement("div")
square.setAttribute("class","square")    
container.appendChild(square)}}
else{
    console.log("ERROR")
}





card.appendChild(sketch)
card.appendChild(control_panel)
control_panel.appendChild(buttons)
buttons.appendChild(clear_btn)
buttons.appendChild(erase_btn)
buttons.appendChild(drag_btn)
card.appendChild(container)

document.body.appendChild(card)