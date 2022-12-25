


var menu_btn = document.getElementById("menu_btn");
var menu_btn_div = document.getElementsByClassName("menu_btn")[0];

menu_btn_div.onmouseover = () => {
    menu_btn.style.color = "white";
}
menu_btn_div.onmouseleave = () => {
    menu_btn.style.color = "black";
}

var rev_all = document.getElementsByClassName("review");
let i = -1;
let count = 0;

if (count < rev_all.length) {
    let j = ++i;
    count++;
    rev_all[j].classList.toggle("inac_cls");
    setTimeout(() => {
        rev_all[j].classList.toggle("inac_cls");
    }, 7000);
}
else{
    count = 0;
    i = -1;
}
if (count < rev_all.length) {
    let j = ++i;
    count++;
    rev_all[j].classList.toggle("inac_cls");
    setTimeout(() => {
        rev_all[j].classList.toggle("inac_cls");
    }, 7000);
}
else{
    count = 0;
    i = -1;
}

setInterval(() => {
    if (count < rev_all.length) {
        let j = ++i;
        count++;
        rev_all[j].classList.toggle("inac_cls");
        setTimeout(() => {
            rev_all[j].classList.toggle("inac_cls");
        }, 7000);
    }
    else{
        count = 0;
        i = -1;
    }
    if (count < rev_all.length) {
        let j = ++i;
        count++;
        rev_all[j].classList.toggle("inac_cls");
        setTimeout(() => {
            rev_all[j].classList.toggle("inac_cls");
        }, 7000);
    }
    else{
        count = 0;
        i = -1;
    }
}, 7000);

// Star Highlighter ::

let hlgt_prev_star = (e,idx) => {
    let curr_ele = document.getElementsByClassName("str")[idx];

    let sibling = curr_ele.previousElementSibling;
    while (sibling) {
        sibling.innerHTML = `<i class="fa-solid fa-star"></i>`;
        sibling = sibling.previousElementSibling;
    }

    var start_x = (window.innerWidth/2) + (((window.innerWidth/2) - 207.5)/2);
    var x_cor = e.clientX - (start_x + (idx*41.5));
    if(x_cor < 5){
        curr_ele.innerHTML = `<i class="fa-regular fa-star"></i>`;
    }   
    else if((x_cor > 5) && (x_cor < 18.25)){
        curr_ele.innerHTML = `<i class="fa-solid fa-star-half-stroke"></i>`;
    } 
    else{
        curr_ele.innerHTML = `<i class="fa-solid fa-star"></i>`;
    }
    // console.log(x_cor);
    sibling = curr_ele.nextElementSibling;
    while (sibling) {
        sibling.innerHTML = `<i class="fa-regular fa-star"></i>`;
        sibling = sibling.nextElementSibling;
    }
}
