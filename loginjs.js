const check_cred = () =>{
    let sub_usrname = document.getElementById("login_usrname").value;
    let sub_pass = document.getElementById("login_pass").value;

    if((localStorage.length < 3) || (localStorage.getItem("username") != sub_usrname) || (localStorage.getItem("password") != sub_pass)){
        alert("User don't exist! / Invalid credentials!");
    }
    else{
        alert(`Welcome ${localStorage.getItem("firstName")}`);
        localStorage.setItem("login",true);
        location.replace("index.html")
    }
}
