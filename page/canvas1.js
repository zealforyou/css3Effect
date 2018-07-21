let canvas = document.getElementById('canvas');
let value = 0;
let duration = 5000;
let startTime = new Date().getTime();
let progress = 0;
let id;
let repeat = true;
//确认浏览器是否支持<canvas>元素
if (canvas.getContext) {
   var context = canvas.getContext('2d');
   context.fillStyle = '#333';
   context.font = "oblique small-caps bold 50px Arial";

   id = requestAnimationFrame(animation)
}

function animation() {
   let currentTime = new Date().getTime();
   if (currentTime - startTime >= duration) {
      if (repeat) {
         startTime = currentTime;
      } else {
         console.log("close");
         cancelAnimationFrame(id);
         return;
      }
   }
   progress = Math.pow((currentTime - startTime) / duration, 2);
   value = progress * 100;
   console.log(value);
   draw(context);
   // id = requestAnimationFrame(animation)
}

function draw(context) {
   context.clearRect(0, 0, canvas.width, canvas.height);
   let text = "zeal for you";
   let totalWidth = context.measureText(text);
   let temp = 0;
   for (let i = 0; i < text.length; i++) {
      let char = text.charAt(i);
      let tm = context.measureText(char);
      let x = canvas.width / 2 - totalWidth.width / 2 + temp;
      let y = canvas.height / 2;
      if (i === text.length - 1) {
         context.textBaseline = "bottom";
         y = y - 75 + value;
         // if (value > 50)
         context.fillText(char, x,50);
      } else {
         context.textBaseline = "middle";
         context.fillText(char, x, y);
      }
      temp += tm.width;
   }
}