// Billing ::
var totalPrice = 0;

let add_to_bill = (dish, price) => {
    let dish_div = document.createElement("div");
    dish_div.className = "pur_item";

    let dish_name = document.createElement("div");
    dish_name.className = "p_dish";

    let pr = document.createElement("div");
    pr.className = "p_cost";

    dish_name.innerHTML = dish;
    pr.innerHTML = price;
    totalPrice += Number.parseInt(price);

    dish_div.appendChild(dish_name);
    dish_div.appendChild(pr);

    let ttl = document.getElementById("D_bill");
    document.getElementById("D_bill").lastElementChild.innerHTML = totalPrice;
    ttl.before(dish_div);
}