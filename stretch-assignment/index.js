let boxes = document.querySelectorAll(".block");
let red = boxes[0];
let blue = boxes[1];
let green = boxes[2];
let pink = boxes[3];
let gray = boxes[4];
let xPos = [];
let yPos = [];

var currentX = 0;
let holdingDown = false;


// let myFunc = setInterval(function() {
//     move(this);
// });


// const goRight = () => {
//     let tempX = 0;
//     return (ele) => {
//         tempX = ele.getBoundingClientRect().left;
//         tempX +=5;
//         ele.style.left = tempX;
//         return tempX;
//     }
// }
function goRight(ele) {
    currentX = getRelativeClientRect(ele).left;
    if (currentX < 600) {
        ele.style.left = currentX + "px";
    }
    else {
        clearInterval();
    }
}

function goLeft(ele) {
    currentX = getRelativeClientRect(ele).left;
    if (currentX > 10){
        ele.style.left = (currentX-15) + "px";
    }
    else {
        clearInterval();
    }
   
}

function move(element) {
    if (holdingDown) {
        goRight(element);
        }
    else {
        goLeft(element);
    }
}

boxes.forEach((ele, ind) => {
    ele.style.position = 'relative';
    ele.addEventListener('mousedown', e => {
        if (holdingDown){
            //do nothing
        }
        else {
            holdingDown = true;
            clearInterval(xPos[ind]);
            xPos[ind] = setInterval(function() {
                move(ele);
            }, 100);
        }
    });
    ele.addEventListener('mouseup', e => {
        if(holdingDown){
            holdingDown = false;
            clearInterval(xPos[ind]);
            xPos[ind] = setInterval(function() {
                move(ele);
            }, 100);
        }  
    });
    ele.addEventListener('mouseleave', e => {
        if(holdingDown){
            holdingDown = false;
            clearInterval(xPos[ind]);
            xPos[ind] = setInterval(function() {
                move(ele);
            }, 100);
        }
    });
});

function getRelativeClientRect(el) {
    var rect = el.getBoundingClientRect(),
        parentRect = el.offsetParent.getBoundingClientRect();
    return {
      bottom: parentRect.bottom - rect.bottom,
      height: rect.height,
      left: rect.left - parentRect.left,
      right: parentRect.right - rect.right,
      top: rect.top - parentRect.top,
      width: rect.width
    };
  }

  


