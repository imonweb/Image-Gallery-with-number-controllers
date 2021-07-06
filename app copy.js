const btn = document.querySelectorAll('.btn');
const gallery = document.querySelector('#gallery');

// let current = document.querySelector('.active');

const images = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg"
];


// btn.forEach(b => b.addEeventListener('click', imgClick));

// function imgClick() {

// }



for(let i = 0; i < btn.length; i++){
 
  btn[i].addEventListener('click', () => {
    
    gallery.src = images[i];
    
    let current = document.querySelector('.active');
    current[0].className = current[0].className.replace('active', '');
    this.className += ' active';
  });

  

/*
  btn[i].onclick = function() {
    gallery.src = images[i];
    let current = document.querySelector('.active');
    current[0].className = current[0].className.replace('active', '');
    this.className += ' active';
  }
*/
}