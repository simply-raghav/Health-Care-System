// Data Rendering for page starts here

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
        document.getElementById("doctor_name").innerHTML =
          "Dr. " + data.result.name;
        document.getElementById("doctor_degree").innerHTML = data.result.degree;
        document.getElementById("doctor_username").value = data.result.name;
        document.getElementById("doctor_email").value = data.result.email;
        document.getElementById("doctor_name_form").value = data.result.name;
        document.getElementById("doctor_phone_number").value =
          data.result.contact;
        document.getElementById("doctor_address_form").value =
          data.result.address;
        console.log(data.result.gender);
        document.getElementById("gender_form").value = data.result.gender;

        // document.getElementById("doctor_dob_form").value= data.result.DOB;
      } else {
        document.getElementById("doctor_name").innerHTML = "NA";
        document.getElementById("doctor_degree").innerHTML = "NA";
      }
    });
};

const getData = (id) => {
  console.log("Doctor Id: ", id);
  doctor_data(id);
};
// Data Render for page completes here

// Data Updating for page starts here

const update_doctor_profile = (id) => {
  const doctor_name = document.getElementById("doctor_name").value;
  const doctor_degree = document.getElementById("doctor_degree").value;
  const doctor_username = document.getElementById("doctor_username").value;
  const doctor_email = document.getElementById("doctor_email").value;
  const doctor_name_form = document.getElementById("doctor_name_form").value;
  const doctor_phone_number = document.getElementById("doctor_phone_number").value;
  const doctor_address_form = document.getElementById("doctor_address_form").value;
  const gender_form = document.getElementById("gender_form").value;
  const doctor_dob_form = document.getElementById("doctor_dob_form").value;
  const about_me = document.getElementById("about_me").value;
  const services = document.getElementById("services").value.split(",");
  const specialist = document.getElementById("specialist").value.split(",");
  console.log("Update Files: ", 
    "\ndoctor_name",doctor_name,
    "\ndoctor_degree",doctor_degree,
    "\ndoctor_username",doctor_username,
    "\ndoctor_email",doctor_email,
    "\ndoctor_name_form",doctor_name_form,
    "\ndoctor_phone_number",doctor_phone_number,
    "\ndoctor_address_form",doctor_address_form,
    "\ngender_form",gender_form,
    "\ndoctor_dob_form",doctor_dob_form,
    "\nabout_me",about_me,
    "\nservices",services,
    "\nspecialist",specialist,
  )

}

const updateData = (id) => {
  console.log("ID: ", id);
  update_doctor_profile(id);
};

doctor_name;
doctor_degree;
doctor_username;
doctor_email;
doctor_name_form;
doctor_phone_number;
doctor_address_form;
gender_form;
doctor_dob_form;
about_me;
Button_group = {
  price_free,
  price_custom,
};
services;
specialist;
