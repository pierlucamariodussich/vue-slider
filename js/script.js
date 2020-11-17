const imagesArray = [
{
  name: 'mountain' ,
  src: 'img/image1.jpg',
},
{
  name: 'waterfall',
  src: 'img/image2.jpg',
},
{
  name: 'meadows',
  src: 'img/image3.jpg',
},
{
  name: 'lake',
  src: 'img/image4.jpg',
}
];


const sliderApp = new Vue ({
   el: '#root',
   data:{
     images: imagesArray.map( e => e.src),
     imagesIndexArray: 0,
   },
   methods:{
     prev: function(){
       this.imagesIndexArray = (this.imagesIndexArray === 0) ?
                                   this.imagesIndexArray = this.images.length - 1 :
                                   this.imagesIndexArray - 1;
     },
     next: function(){
       this.imagesIndexArray = (this.imagesIndexArray === this.images.length -1) ?
                                   this.imagesIndexArray = 0 :
                                   this.imagesIndexArray + 1; ;
     },

   }

});
