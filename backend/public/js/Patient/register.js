const register = document.getElementById("registerForm");
register.addEventListener("submit", async () => {
  const fstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const DOB = document.getElementById("DOB").value;
//   const bloodGrp = document.getElementById("bloodGrp").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const pincode = document.getElementById("pincode").value;
  const password = document.getElementById("password").value;
  const cnfrmPassword = document.getElementById("cnfrmPassword").value;

  console.log("fstName: ", fstName,
"lastName : ", lastName,
"DOB: ", DOB,
// "bloodGrp : ", bloodGrp,
"email: ", email,
"contact: ", contact,
"address: ", address,
"city: ", city,
"state: ", state,
"pincode: ", pincode,
"password: ", password,
"cnfrmPassword: ", cnfrmPassword);
  if(!(password === cnfrmPassword)){
    alert("Password and Confirm Password Mismatch");
    window.location = window.location;
    return false;
  }else{
    const data = { fstName, lastName, password, email, contact};
  console.log(data);
  fetch("/authPatient/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data: ", data);
      if (data.status === "success") {
        window.location.href = "/health_care/dashboard";
        return;
      }else if (data.status === "Failure"){
        alert(data.message);
        window.location.href = "/health_care/registerPat";
      } 
      console.log("Data: ", data);
    });
  }
});


  