const sbmtDetails = () => {
    let usrname = document.getElementById("usrName");
    let pass = document.getElementById("pswrd");

    if ((localStorage.key(0) == "userName") && (localStorage.getItem("userName") == usrname.value)) {
        alert("Account already exist!");
    } else {
        localStorage.setItem("userName", usrname.value);
        localStorage.setItem("password", pass.value);
    }
}