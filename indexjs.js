


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