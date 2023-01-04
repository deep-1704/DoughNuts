// Order placing ::

var btn1 = document.getElementById("odr_conf");
var cans1 = document.getElementById("odr_cans");
var conf1 = document.getElementById("conf_odr");
var odr_modal = document.getElementById("om");

btn1.onclick = () => {
    if (localStorage.getItem("login")) {
        odr_modal.style.display = "block";
        odr_modal.style.animation = "move_down 0.2s linear";
    }
    else{
        alert("Please Login to order!");
    }
}
cans1.onclick = () => {
    odr_modal.style.animation = "move_up 0.5s linear";
    setTimeout(() => {
        odr_modal.style.display = "none";
    }, 500)
}
conf1.onclick = () => {
    odr_modal.style.animation = "move_up 0.5s linear";
    setTimeout(() => {
        odr_modal.style.display = "none";
    }, 500)
    setTimeout(() => {
        alert("Order recieved\nThanks for ordering :)");
    }, 1000)
}

// Categories selection ::

// By default category;
document.getElementsByClassName("d_cat_li")[0].classList.add("b_btm");
document.getElementById("assor_bev").classList.remove("inac_cat");
window.addEventListener("click", function (e) {
    if (document.getElementsByClassName("d_cat_li")[0].contains(e.target) || this.document.getElementsByClassName("menu_container")[0].contains(e.target)) {} else {
        document.getElementsByClassName("d_cat_li")[0].classList.remove("b_btm");
        document.getElementById("assor_bev").classList.add("inac_cat");
    }
})

const ab = () => {
    document.getElementsByClassName("d_cat_li")[0].classList.add("b_btm");
    document.getElementById("assor_bev").classList.remove("inac_cat");
    window.addEventListener("click", function (e) {
        if (document.getElementsByClassName("d_cat_li")[0].contains(e.target) || this.document.getElementsByClassName("menu_container")[0].contains(e.target)) {} else {
            document.getElementsByClassName("d_cat_li")[0].classList.remove("b_btm");
            document.getElementById("assor_bev").classList.add("inac_cat");
        }
    })
}
const sps = () => {
    document.getElementsByClassName("d_cat_li")[1].classList.add("b_btm");
    document.getElementById("soups").classList.remove("inac_cat");
    window.addEventListener("click", function (e) {
        if (document.getElementsByClassName("d_cat_li")[1].contains(e.target) || this.document.getElementsByClassName("menu_container")[0].contains(e.target)) {} else {
            document.getElementsByClassName("d_cat_li")[1].classList.remove("b_btm");
            document.getElementById("soups").classList.add("inac_cat");
        }
    })
}
const tt = () => {
    document.getElementsByClassName("d_cat_li")[2].classList.add("b_btm");
    document.getElementById("TT").classList.remove("inac_cat");
    window.addEventListener("click", function (e) {
        if (document.getElementsByClassName("d_cat_li")[2].contains(e.target) || this.document.getElementsByClassName("menu_container")[0].contains(e.target)) {} else {
            document.getElementsByClassName("d_cat_li")[2].classList.remove("b_btm");
            document.getElementById("TT").classList.add("inac_cat");
        }
    })
}
const rr = () => {
    document.getElementsByClassName("d_cat_li")[3].classList.add("b_btm");
    document.getElementById("RR").classList.remove("inac_cat");
    window.addEventListener("click", function (e) {
        if (document.getElementsByClassName("d_cat_li")[3].contains(e.target) || this.document.getElementsByClassName("menu_container")[0].contains(e.target)) {} else {
            document.getElementsByClassName("d_cat_li")[3].classList.remove("b_btm");
            document.getElementById("RR").classList.add("inac_cat");
        }
    })
}
const ic_ds = () => {
    document.getElementsByClassName("d_cat_li")[4].classList.add("b_btm");
    document.getElementById("I_D").classList.remove("inac_cat");
    window.addEventListener("click", function (e) {
        if (document.getElementsByClassName("d_cat_li")[4].contains(e.target) || this.document.getElementsByClassName("menu_container")[0].contains(e.target)) {} else {
            document.getElementsByClassName("d_cat_li")[4].classList.remove("b_btm");
            document.getElementById("I_D").classList.add("inac_cat");
        }
    })
}
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
// Feedback section ::

const rev_modal = () =>{
    let feedback = document.getElementsByClassName("review_modal")[0];
    feedback.style.display = "block";
    feedback.style.animation = "feed_ani 0.5s linear";
}

const rem_feedback = () =>{
    let feedback = document.getElementsByClassName("review_modal")[0];
    feedback.style.animation = "rem_feed_ani 0.5s linear";
    setTimeout(() => {
        feedback.style.display = "none";
    }, 499);
}

const sub_feedback = () =>{
    let feedback = document.getElementsByClassName("review_modal")[0];
    feedback.style.animation = "rem_feed_ani 0.5s linear";
    setTimeout(() => {
        feedback.style.display = "none";
        alert("Thanks for the feedback :)");
    }, 499);

}
