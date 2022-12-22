const check_cred = () =>{
    if((localStorage.key(0) != null) && (localStorage.getItem("userName") == document.getElementById("usrName").value) && (localStorage.getItem("password") == document.getElementById("pswrd").value)){
        
    }
    else{
        alert("Invalid Username/Password!");
    }
}