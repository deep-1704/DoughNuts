// Order placing ::

var btn1 = document.getElementById("odr_conf");
var cans1 = document.getElementById("odr_cans");
var conf1 = document.getElementById("conf_odr");
var odr_modal = document.getElementById("om");

btn1.onclick = () => {
    if ((localStorage.key(0) != null) && (localStorage.getItem("userName") != '')) {
        odr_modal.style.display = "block";
        odr_modal.style.animation = "move_down 0.2s linear";
    }
    else{
        alert("Please SignUp to order!");
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