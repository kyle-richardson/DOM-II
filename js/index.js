// Your code goes here


let buttons = document.querySelectorAll('.btn');
let pics = document.querySelectorAll('img');
let logo = document.querySelector(".logo-heading");
let footer = document.querySelector("footer p");
let header = document.querySelector(".main-navigation");
let destination = document.querySelector(".content-destination");
let destinationH2 = document.querySelector(".content-destination h2");
let body = document.querySelector("body");
let letsGoH2 = document.querySelector(".text-content h2");
let anchors = document.querySelectorAll("a");


document.addEventListener('wheel', ()=> {
    body.style.backgroundColor = "lightpink";
    logo.textContent = "OW. That hurts! Click here"
});

buttons.forEach (ele => {
    ele.addEventListener('mouseenter', () => {
        ele.style.backgroundColor = 'rgb(65, 216, 240)';
        ele.style.color = "rgb(15, 90, 102)";
    });
    ele.addEventListener('mouseleave', () => {
        ele.style.backgroundColor = '#17A2B8';
        ele.style.color = "#FFFFFF";
        ele.style.borderColor = '#C0C0C0';
    });
    ele.addEventListener('mousedown', () => {
        ele.style.borderColor = 'red';
        ele.style.color = "#FFFFFF";
    });
    ele.addEventListener('mouseup', () => {
        ele.style.borderColor = '#C0C0C0';
        ele.style.color = "rgb(15, 90, 102)";
    });
});

pics.forEach ((ele, ind) => {
    ele.addEventListener('dblclick', () => {
        ele.style.display = "none";
    });
    ele.addEventListener('mouseenter', () => {
        ele.style.border = '3px solid rgb(15, 90, 102)';
    });
    ele.addEventListener('mouseleave', () => {
        ele.style.border = '0px';
    });
    if(ind===1) {
        ele.addEventListener('mousedown', () => {
            ele.style.borderColor = 'red';
        })
    }

});

header.addEventListener('click', e => {
    if(logo.textContent == "Hint: touch the footer"){
        logo.textContent = "Fun Bus";
    }
    else if (logo.textContent == "OW. That hurts! Click here"){
        logo.textContent = "Whew. That's better";
        body.style.backgroundColor = "white";
    }
    else {
        logo.textContent = "Hint: touch the footer";
    }
    
});

footer.addEventListener('mouseover', () => {
    if(footer.textContent == "OooooOOoohhhh.  Spooky right? Hint: double click pictures"){
        footer.textContent = "Copyright Fun Bus 2018";
    }
    else {
        footer.textContent = "OooooOOoohhhh.  Spooky right? Hint: double click pictures";
    }
    
});

destination.addEventListener('mousemove', e => {
    if (destination.style.color == "blue") {
        destination.style.color = "black";
    }
    else {
        destination.style.color = "blue";
    }
});
destinationH2.addEventListener('mousemove', e => {
    e.stopPropagation()
    destinationH2.style.border = "2px dotted blue"
    destination.style.color = "gray"
})

letsGoH2.addEventListener('drag', () => {
    letsGoH2.textContent = "Wait, where are you taking me!";
})

letsGoH2.addEventListener('drop', () => {
    letsGoH2.textContent = "Let's Go!";
})

letsGoH2.addEventListener('wheel', () => {
    letsGoH2.textContent = "Hint: Select, then drag me"
})

anchors.forEach(ele => {
    ele.addEventListener('click', e => {
        e.preventDefault();
        e.target.textContent = "CLICKED";
    })
})

