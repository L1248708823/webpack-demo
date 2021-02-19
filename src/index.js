import url from '../static/2.jpg'
import style from  './index.scss'
import createdImage from './created'
const img = new Image()
img.src = url
img.classList.add(style.img)
const root = document.getElementById('root')
root.append(img)
// createdImage()
