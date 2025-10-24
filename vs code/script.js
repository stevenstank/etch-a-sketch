const card = document.createElement("div")
card.setAttribute("id","card")

const sketch = document.createElement("h1")
sketch.setAttribute("class","sketch")
sketch.textContent = "Etch-A-Sketch"

const control_panel = document.createElement("div")
control_panel.setAttribute("id","controls")

const color_options = document.createElement("div")
color_options.setAttribute("class","options")

const pick_color = document.createElement("span")
pick_color.setAttribute("class","pick")
pick_color.textContent = "Pick Color:  BOX"

const rainbow = document.createElement("span")
rainbow.setAttribute("class","color rainbow")
rainbow.textContent = "Rainbow" 

const solid_color = document.createElement("span")
solid_color.setAttribute("class","color solid")
solid_color.textContent = "Solid Color"

const shading = document.createElement("span")
shading.setAttribute("class","color shading")
shading.textContent = "Shading"

const buttons = document.createElement("div")
buttons.setAttribute("class","buttons")

const clear_btn = document.createElement("span")
clear_btn.setAttribute("class","btn clear")
clear_btn.textContent = "Clear Grid"

const erase_btn = document.createElement("span")
erase_btn.setAttribute("class","btn erase")
erase_btn.textContent = "Eraser" 

const drag_btn = document.createElement("span")
drag_btn.setAttribute("class","btn drag")
drag_btn.textContent = "Click & Drag"


const container = document.createElement("div")
container.setAttribute("id","container")


if(container){for (let i = 0; i < 256; i++) {
const square = document.createElement("div")
square.setAttribute("class","square")    
container.appendChild(square)}}
else{
    console.log("BHONDU")
}





card.appendChild(sketch)
card.appendChild(control_panel)
control_panel.appendChild(color_options)
color_options.appendChild(pick_color)
color_options.appendChild(solid_color)
color_options.appendChild(rainbow)
color_options.appendChild(shading)
control_panel.appendChild(buttons)
buttons.appendChild(clear_btn)
buttons.appendChild(erase_btn)
buttons.appendChild(drag_btn)
card.appendChild(container)

document.body.appendChild(card)


