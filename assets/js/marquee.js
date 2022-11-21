
let spaceInterval = 1;
let timeInterval = 10; // `speed`
let max;
let firstRun = true;
let elementOne = document.getElementById("marquee");
let elementTwo = document.getElementById("marqueeTwo");
let elementThree = document.getElementById("marqueeThree");

function gallery(){
    var elem = document.getElementById("marquee");
    if (elem && elem.clientWidth < elem.scrollWidth) {
    if (firstRun) {
    max = elem.scrollWidth;
    // Clone the children of the container until the
    // scrollWidth is at least twice as large as max.
    while (elem.scrollWidth < max * 2) {
    var length = elem.children.length;
    for (var i = 0; i < length; ++i) {
        elem.appendChild(elem.children[i].cloneNode(true));
    }
    break;
    }
    firstRun = false;
    }
    if (elem.scrollLeft >= max) {
    elem.scrollLeft -= max;
    } else {
    elem.scrollLeft += spaceInterval;
    }
    }
};
window.setInterval(function (){
    gallery()
}, timeInterval);
// window.setInterval(function (){
//     gallery(elementTwo)
// }, timeInterval);
// window.setInterval(function (){
//     gallery(elementThree)
// }, timeInterval);







const element = document.getElementById("marquee");

  
animate(element);
let marquee_interval
  
function animate(element) {
    let elementWidth = ((element.offsetWidth));
    let parentWidth = element.parentElement.offsetWidth;
    // alert(parentWidth)
    let flag = 0;
    let elem = element
    if (elem && elem.clientWidth < elem.scrollWidth) {
        if (firstRun) {
        max = elem.scrollWidth;
        // Clone the children of the container until the
        // scrollWidth is at least twice as large as max.
        while (elem.scrollWidth < max * 2) {
        var length = elem.children.length;
        for (var i = 0; i < length; ++i) {
            elem.appendChild(elem.children[i].cloneNode(true));
        }
        break;
        }
        firstRun = false;
        }
        if (elem.scrollLeft >= max) {
        elem.scrollLeft -= max;
        } else {
        elem.scrollLeft += spaceInterval;
        }
        }
    
        marquee_interval = setInterval(() => {
        element.style.marginLeft = --flag + "px";
        if (elementWidth == -flag) {
            flag = parentWidth;
        }
    }, 10);
}
// element.parentElement.onmouseenter = () =>{
//     alert('yes')
//     clearInterval(marquee_interval)
// }
