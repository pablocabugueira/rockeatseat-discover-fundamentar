const body = document.querySelector("body")
const div = document.createElement("div")
const divOpen = document.querySelector("#open")
const buttonClick = document.querySelector("#openButton")

buttonClick.addEventListener("click", click);

function click() {
    divOpen.remove()
    body.prepend(div)
    div.innerText = "Aperte ESC para fechar"
    div.setAttribute("id", "close")
}

document.addEventListener("keydown", function(event) {
    const isEscKey = event.key === "Escape"
    
    if (isEscKey) {
        div.remove()
        body.prepend(divOpen)
    }
})