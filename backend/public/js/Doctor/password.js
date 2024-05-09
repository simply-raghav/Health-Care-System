// page to change doctor's password

const changePassword = () => {
    const old_password = document.getElementById("old_password").value;
    const new_password = document.getElementById("new_password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    if(!(confirm_password === new_password)){
        alert("New Password and Confirm Password Mismatch");
        return false;
    }
    const data = {
      old_password : old_password,
      new_password : new_password,
    };
    // API call to change password.
    fetch("/authDoctor/changePassword", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
        console.log("data : " , data);
        if (data.status === "success") {
          alert(data.message);
          window.location.href = "/health_care/dashboard";
          return;
        } else {
          alert(data.message);
          return false;
        }
    });
}