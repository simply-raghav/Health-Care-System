const doctor_data = (id) => {
  fetch("/authDoctor/users", {
    method: "POST",
    body: JSON.stringify({
      id: id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data: ", data);
      if (data.status === "success") {
        document.getElementById("doctor_name").innerHTML = "Dr. " + data.result.name;
        document.getElementById("doctor_degree").innerHTML = data.result.degree;
        document.getElementById("doctor_username").placeholder= data.result.name;
        document.getElementById("doctor_email").placeholder= data.result.email;
        document.getElementById("doctor_name_form").value= data.result.name;
        document.getElementById("doctor_phone_number").value= data.result.contact;
        document.getElementById("doctor_address_form").value= data.result.address;
        // document.getElementById("doctor_dob_form").value= data.result.DOB;
        
        
      } else {
        document.getElementById("doctor_name").innerHTML = "NA";
        document.getElementById("doctor_degree").innerHTML = "NA";
      }
    });

}

const getData = (id) => {
  console.log("Doctor Id: ", id)
  doctor_data(id);
};
