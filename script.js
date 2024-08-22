const path_to_images = [
  "assets/image_1.jpg",
  "assets/image_2.jpeg",
  "assets/image_3.jpeg",
];

const image = document.getElementById("image");
let imageNumber = 0;
const right_button = document.getElementById("right-button");
const left_button = document.getElementById("left-button");
image.src = path_to_images[imageNumber];
left_button.disabled=true;
function check(){
    if(image!== 0){
        left_button.disabled=false;
      }
      if (imageNumber == (path_to_images.length - 1)) {
        right_button.disabled = true;
      }
      if (imageNumber == 0) {
        left_button.disabled = true;
        right_button.disabled= false;
      }
}
right_button.addEventListener("click", function () {
  imageNumber++;
  image.src = path_to_images[imageNumber];
  check();
});

left_button.addEventListener("click", function () {
  imageNumber--;
  image.src = path_to_images[imageNumber];
  check();
});

right_button.addEventListener("mouseover", function() {
    button.style.background;
})

