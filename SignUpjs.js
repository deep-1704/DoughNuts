const register_acc = () => {
    let cred_entry = document.getElementsByClassName("cred_entry");

    // Creating warning element ::
    let warning = document.createElement("div");
    warning.innerHTML = "Please provide this information";
    warning.style.fontFamily = "'Quicksand', sans-serif";
    warning.style.padding = "2px 0 2px 0";
    warning.style.fontSize = "15px";
    warning.style.color = "red";
    warning.style.animation = "warn 0.5s linear";

    // Adding warning element for unfilled cred::
    for (let entry of cred_entry) {
        if(entry.nextElementSibling != null){
            entry.nextElementSibling.remove();
            entry.style.border = "0.3px solid rgb(71,71,71)";
        }
        if (entry.value == '') {
            entry.style.border = "1px solid red";
            entry.after(warning);
            return;
        }
        else{
            if(entry.nextElementSibling != null){
                entry.nextElementSibling.remove();
                entry.style.border = "0.3px solid rgb(71,71,71)";
            }
        }
    }

    // Confirm password match check ::
    let npass = document.getElementById("signup_npass").value;
    let cpass = document.getElementById("signup_cpass").value;
    if(npass !== cpass){
        warning.innerHTML = "Enter valid password!";
        document.getElementById("signup_cpass").after(warning);
        return;
    }

    // Finally registering ::
    let usrname = document.getElementById("signup_usrname").value;
    let pass = document.getElementById("signup_npass").value;
    let fn = document.getElementById("signup_fn").value;

    localStorage.setItem("username",usrname);
    localStorage.setItem("password",pass);
    localStorage.setItem("firstName",fn);
    location.replace("index.html");
}
