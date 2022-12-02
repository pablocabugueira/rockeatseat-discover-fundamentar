// Callback Function

function turtle(name) {
    console.log("Antes do Call back")
    name()
    console.log("Depois do Call back")
}

turtle(
    () => {
        console.log("Callback")
    }
)