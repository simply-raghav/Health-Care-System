const register = document.getElementById("doctor-form");
register.addEventListener("submit", async () => {
    const name      = document.getElementById("name").value;
    const password  = document.getElementById("password").value;
    const email     = document.getElementById("email").value;
    const contact   = document.getElementById("contact").value;
    const address   = document.getElementById("address").value;
    const gender    = document.getElementById("gender").value;
    const dob       = document.getElementById("dob").value;
    const degreeOverall   = document.getElementById("degreeOverall").value;
    const license   = document.getElementById("license").value;
    const profession = document.getElementById("profession").value;
    const experience= document.getElementById("experience").value;

  console.log(
    "Data in Register JS",
    "name",
    name,
    "password",
    password,
    "email",
    email,
    "contact",
    contact,
    "address",
    address,
    "gender",
    gender,
    "dob",
    dob,
    "degreeOverall",
    degreeOverall,
    "license",
    license,
    "profession",
    profession,
    "experience",
    experience
  );
    const data = {
      name,
      password,
      email,
      contact,
      address,
      gender,
      dob,
      degreeOverall,
      license,
      profession,
      experience,
    };
    console.log(data);
    fetch("/authDoctor/register", {
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
            alert(data.message);
          window.location.href = "/health_care/addDoc";
          return;
        } else if (data.status === "Failure") {
          alert(data.message);
          window.location.href = "/health_care/addDoc";
        }
        console.log("Data: ", data);
      });
});
