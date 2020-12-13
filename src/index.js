import hello from './hello'
import world from './world'
import img from './images/selfPortrait_500x500.jpg'
import './css/index.scss'
console.log(img)
console.log(hello + world)
const myImg = document.createElement('img')
myImg.src = img
document.body.appendChild(myImg)
