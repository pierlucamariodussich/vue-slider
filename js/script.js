const imagesArray = [
{ name: mountain ,
  src: 'img/immagine1.jpg'
},
{ name: waterfall,
  src: 'img/immagine2.jpg'
},
{ name: meadows,
  src: 'img/immagine3.jpg'
},
{ name: lake,
  src: 'img/immagine4.jpg'
}];


const sliderApp = new Vue ({
   el: '#root',
   data:{
     img: imagesArray.map( e => e.src),
     imagesIndexArray: 0,
   }
});
