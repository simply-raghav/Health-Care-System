const patient_data = (id) => {
  fetch("/authPatient/users", {
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
      let dt = new Date(data.result.DOB);
      if (data.status === "success") {
        document.getElementById("patient_name").innerHTML = data.result.name;
        console.log(dt.toLocaleDateString());
        document.getElementById("DOB").innerHTML = dt.toLocaleDateString().toString();
        document.getElementById("address").innerHTML = data.result.city + ", " + data.result.state; 

      } else {
        document.getElementById("patient_name").innerHTML = "ABC";
      }
    });

}

const patient_appointments = (id) => {
    fetch("/appointment/viewAppointment_patient", {
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
        console.log("Data: ");
        const result = data.result;
        console.log(result);
        const sortedres = result.sort( (a, b) => new Date(a.dateofAppointment) - new Date(b.dateofAppointment) );
        console.log("Sorted: ", sortedres);
        for (let i = 0; i < data.result.length; i++) {
          console.log(data.result[i]);
        }
      });

}


const getData = (id) => {
  console.log("Patient Id: ", id)
  patient_data(id);
  console.log("ID: ", id);
  patient_appointments(id);
};

