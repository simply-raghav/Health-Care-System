const register = document.getElementById("registerForm");
register.addEventListener("submit", async () => {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const registration_number = document.getElementById("reg_no").value;
  const owner_name = document.getElementById("owner_name").value;
  const license_number = document.getElementById("license_number").value;
  const password = document.getElementById("password").value;
  const cnfrmPassword = document.getElementById("cnfrmPassword").value;

  console.log("Data in Register JS", 
    "name: ",
    name,
    "address: ",
    address,
    "owner_name: ",
    owner_name,
    "email: ",
    email,
    "contact: ",
    contact,
    "reg_no: ",
    registration_number,
    "license_number : ",
    license_number,
    "password : ",
    password,
    "cnfrmPassword : ",
    cnfrmPassword
  );
  if (!(password === cnfrmPassword)) {
    alert("Password and Confirm Password Mismatch");
    window.location = window.location;
    return false;
  }
  const OTPinput = document.getElementById("OTPinput");
  const emailInput = document.getElementById("email");
  console.log(OTPinput.display, emailInput.disabled);
  if (!(OTPinput.value === global_OTP) || emailInput.disabled == false) {
    alert("Email OTP not verified");
    return false;
  } 
   {
    const data = {
      name,
      address,
      email,
      contact,
      owner_name,
      registration_number,
      license_number,
      password,
      cnfrmPassword,
    };
    console.log(data);
    fetch("/authHospital/register", {
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
        } else if (data.status === "Failure") {
          alert(data.message);
          window.location.href = "/health_care/registerHos";
        }
        console.log("Data: ", data);
      });
  }
});




let global_OTP;

document.getElementById("verifyEmail").addEventListener("click", () => {
  const email = document.getElementById("email");
  const OTPinput = document.getElementById("OTPinput");
  const OTPLabel = document.getElementById("OTPLabel");
  const verifyOTP = document.getElementById("verifyOTP");
  if (email.value.length == 0) {
    alert("Blank email can't be verified");
    return;
  }
  fetch("/auth/email", {
    method: "POST",
    body: JSON.stringify({
      email: email.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data: ", data);
      if (data.status === "success") {
        global_OTP = data.OTP;
        return;
      } else if (data.status === "Failure") {
        alert(data.message);
      }
      console.log("Data: ", data);
    });
  email.disabled = "true";
  OTPinput.removeAttribute("class", "hide");
  OTPLabel.removeAttribute("class", "hide");
  verifyOTP.removeAttribute("class", "hide");
});

document.getElementById("verifyOTP").addEventListener("click", () => {
  const OTPinput = document.getElementById("OTPinput");
  const OTPLabel = document.getElementById("OTPLabel");
  const verifyOTP = document.getElementById("verifyOTP");
  console.log();
  if (OTPinput.value === global_OTP) {
    alert("OTP Verified");
    OTPinput.setAttribute("class", "hide");
    OTPLabel.setAttribute("class", "hide");
    verifyOTP.setAttribute("class", "hide");
  } else {
    alert("OTP entered Incorrect");
  }
});

