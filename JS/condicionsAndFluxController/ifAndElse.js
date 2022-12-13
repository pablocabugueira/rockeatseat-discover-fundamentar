// If e Else

let temperature = 36.9

if(temperature >= 37.5) {
    console.log("Febre Alta")
}
else if(temperature < 37.5 && temperature >= 37) {
    console.log("Febre")
}
else {
    console.log("Saudável")
}

// Better method

let temperature2 = 36.9
let mediumTemperature = temperature2 < 37.5 && temperature2 >= 37
let highTemperature = temperature2 >= 37.5

if(highTemperature) {
    console.log("Febre Alta")
}
else if(mediumTemperature) {
    console.log("Febre")
}
else {
    console.log("Saudável")
}