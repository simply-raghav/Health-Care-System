const login = document.getElementById("loginform");
login.addEventListener("submit",async ()=>{
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const data ={email,pass}
    console.log(data);
    fetch("/authDoctor/login",{
        method : "POST", 
        body : JSON.stringify(data), 
        headers : {
            "Content-Type" : "application/json",
        },
    }).then((res)=>res.json())
    .then((data)=>{
        if(data.status === "Success"){
            window.location.href = "/health_care"
        }
    console.log("Data: ", data)
})
    
})
