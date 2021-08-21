var cursor = true;
var speed = 500;
$(document).ready(function() {
        setInterval(() => {
          if(cursor) {
            document.querySelector('.cursor').style.opacity = 0;
            cursor = false;
          }else {
            document.querySelector('.cursor').style.opacity = 1;
            cursor = true;
          }
        }, speed);
});
