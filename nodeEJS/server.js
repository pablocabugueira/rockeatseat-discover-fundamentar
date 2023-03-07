const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", function(req, res) {
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações"
        },
        {
            title: "E",
            message: "JS usa JavaScript para rodar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title: "I",
            message: "nstall 'ejs'"
        },
        {
            title: "S",
            message: "intaxe simples"
        },
    ]
    res.render("pages/index", {
        qualities: items,
    })
})

app.get("/sobre", function(req, res) {
    res.render("pages/about")
})

app.listen(8080)
console.log("Rodando!")