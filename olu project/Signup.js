const form= document.querySelector(".parents");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const firstname=document.getElementById("firstname").value;
    const lastname=document.getElementById("firstname").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const confirmpassword=document.getElementById("confirmpassword").value;

    if(firstname && lastname && email && password && confirmpassword){
        if (password ===confirmpassword){
            localStorage.setItem("users", JSON.stringify([{firstname,lastname,email,password}
            ]));
            // form.reset();
            // alert("Sign up successful!");
            window.location.href="login.html";
            }else{
                alert("password do not match");
            }
          }else{
            alert("please fill in all required fields");
          }
});
        if(localStorage.getItem("users")){
            const users =JSON.parse(localStorage.getItem("users"));
            console.log(users);
        }