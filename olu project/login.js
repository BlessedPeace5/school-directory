const form=document.querySelector(".loginbox");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    if (email && password){
        const users=JSON.parse(localStorage.getItem("users"));
        const user =users.find((user)=> user.email === email);
        if (user && user.password === password){
            window.location.href="dashboard.html";
        }else{
            alert("Invalid email or password");
        }
    }else{
        alert("Please fill in all required fields");
    }
});