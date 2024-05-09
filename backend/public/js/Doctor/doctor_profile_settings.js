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
        const gender = document.getElementById("gender_form")
        gender.value = data.result.gender;
        gender.dispatchEvent(new Event('change'));
        
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
  const doctor_name = document.getElementById("doctor_name_form").value;
  const doctor_degree = document.getElementById("doctor_degree").value;
  const doctor_username = document.getElementById("doctor_username").value;
  const doctor_email = document.getElementById("doctor_email").value;
  const doctor_phone_number = document.getElementById("doctor_phone_number").value;
  const doctor_address_form = document.getElementById("doctor_address_form").value;
  const gender_form = document.getElementById("gender_form").value;
  const doctor_dob_form = document.getElementById("doctor_dob_form").value;
  const about_me = document.getElementById("about_me").value;
  const services = document.getElementById("services").value.split(",");
  const specialist = document.getElementById("specialist").value.split(",");

  const degree = document.querySelectorAll(".degree_class");
  const institute = document.querySelectorAll(".institute_class");
  const year_of_completion = document.querySelectorAll(".year_of_completion_class");
  let education = [];
  
  for (let i = 0; i < degree.length; i++) {
    const edu = {}; // Create an empty object first

    // Check conditions and set properties only if necessary
    if ( degree[i].value.length > 0 && institute[i].value.length > 0 && year_of_completion[i].value.length > 0) {
      edu.degree = degree[i].value;
      edu.institute = institute[i].value;
      edu.year_of_completion = year_of_completion[i].value;
    }
    education.push(edu);
  }

  const data = {
    name: doctor_name,
    email: doctor_email,
    contact: doctor_phone_number,
    address: doctor_address_form,
    gender: gender_form,
    DOB: doctor_dob_form,
    degree: doctor_degree,
    about_me: about_me,
    // pricing: doctor_pricing,
    services: services,
    Specialization: specialist,
  };

  console.log(data);

}

const updateData = (id) => {
  console.log("ID: ", id);
  update_doctor_profile(id);
};

