
function startCharts(){

   for (let i = 1; i < 21; i++) {
    const body = document.querySelector('body')

     let div = document.createElement('div')
     div.className = "chart-music"
     body.appendChild(div)

     let img1 = document.createElement('img')
     let img2 = document.createElement('img')
     let img3 = document.createElement('img')
     let img4 = document.createElement('img')

     img1.className = 'img-canva'
     img2.className = 'img-canva'
     img3.className = 'img-canva'
     img4.className = 'img-canva'

     img1.src = `img/1/${i}.png`
     img2.src = `img/2/${i}.png`
     img3.src = `img/3/${i}.png`
     img4.src = `img/4/${i}.png`



     div.appendChild(img1)
     div.appendChild(img2)
     div.appendChild(img3)
     div.appendChild(img4)



   }



}


startCharts(1)



     img1.src = `img/1/1.png`
      img1.className = "img-canva"
     [img1.className, img2.className,img3.className,img4.className] = ['img-canva']

