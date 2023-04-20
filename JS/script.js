const pictures = ["img/cake1.png","img/cake2.png","img/cake3.png"];
const slide = document.getElementById("slide");
let num = 0;

function slideshow_timer() {
  if(num === 2){
    num = 0;
  } else {
    num++;
  }
  slide.src = pictures[num];
}
setInterval(slideshow_timer, 3000);