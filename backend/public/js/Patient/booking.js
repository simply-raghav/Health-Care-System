const patient_data = (id) => {
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
      document.getElementById("docName").innerHTML = "Dr. " + data.result.name;
      document.getElementById("address").innerHTML = data.result.hospital.name + ", " + data.result.hospital.address;   
    });
};

const getData = (id) => {
  console.log("Patient Id: ", id);
  patient_data(id);
};
