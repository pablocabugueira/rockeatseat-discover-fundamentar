const timeout = 3000
const finished = () => console.log("Done!")
const timer = setTimeout(finished, timeout)

clearTimeout(timer)