const canvas = document.getElementsByTagName('canvas')[0]

const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight

const _ = canvas.getContext('2d')

let paused = false

document.addEventListener('click', () => {
  paused = !paused
})

const centerX = width / 2
const centerY = height / 2
const radius = 450

_.strokeStyle = 'deepskyblue'
_.beginPath()
_.arc(centerX, centerY, radius, 0, 2 * Math.PI)
_.closePath()
_.stroke()

let rho = 0
const phi = (Math.sqrt(5) + 1) / 2
// const phi = (Math.sqrt(5) + 1) / 2

setInterval(() => {
  if (!paused) {
    _.strokeStyle = getColor(rho / (phi * 2 * Math.PI) / 1000)
    _.beginPath()
    _.moveTo(centerX, centerY)
    _.lineTo(centerX + radius * Math.cos(rho), centerY + radius * Math.sin(rho))
    _.closePath()
    _.stroke()

    rho += phi * 2 * Math.PI
  }
}, 21)

function getColor(value){
  return `hsl(${((1 - value) * 256).toString(10)},100%,50%)`
}
