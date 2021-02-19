import url from '../static/2.jpg'
 export default function createdImage() {
  const img = new Image()
  img.src = url
  img.classList.add('img')
  const root = document.getElementById('root')
  root.append(img)
}