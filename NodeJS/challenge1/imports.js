const getFlagValue = require("./exports")

console.log(`Olá ${getFlagValue("--name")}, ${getFlagValue("--greeting")}.`)