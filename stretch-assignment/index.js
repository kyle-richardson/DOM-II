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


function goRight(ele, ind) {
    currentX = getRelativeClientRect(ele).left;
    if (currentX < 600) {
        ele.style.left = currentX + "px";
    }
    else {
        clearInterval(xPos[ind]);
    }
}

function goLeft(ele, ind) {
    currentX = getRelativeClientRect(ele).left;
    if (currentX > 10){
        ele.style.left = (currentX-15) + "px";
    }
    else {
        clearInterval(xPos[ind]);
    }
   
}

function move(element, ind) {
    if (holdingDown) {
        goRight(element, ind);
        }
    else {
        goLeft(element, ind);
    }
}

boxes.forEach((ele, ind) => {
    ele.style.position = 'relative';
    ele.addEventListener('mousedown', e => {
        e.stopPropagation();
        if (holdingDown){
            //do nothing
        }
        else {
            holdingDown = true;
            clearInterval(xPos[ind]);
            xPos[ind] = setInterval(function() {
                move(ele, ind);
            }, 100);
        }
    });
    ele.addEventListener('mouseup', e => {
        e.stopPropagation();
        if(holdingDown){
            holdingDown = false;
            clearInterval(xPos[ind]);
            xPos[ind] = setInterval(function() {
                move(ele);
            }, 100);
        }  
    });
    ele.addEventListener('mouseleave', e => {
        e.stopPropagation();
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

  


