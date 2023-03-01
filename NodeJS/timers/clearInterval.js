const intervalTime = 1000
const checking = () => console.log("Checked!")

const Interval = setInterval(checking, intervalTime)

setTimeout( () => clearInterval(Interval), 4000)