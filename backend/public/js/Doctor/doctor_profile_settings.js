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
        document.getElementById("Doctor_name").innerHTML = "Dr. " + data.result.name;
        document.getElementById("speciality").innerHTML = data.result.specialty;

      } else {
        document.getElementById("Doctor_name").innerHTML = "Dr. NA";
      }
    });

}

const getData = (id) => {
  console.log("Doctor Id: ", id)
  doctor_data(id);
};
