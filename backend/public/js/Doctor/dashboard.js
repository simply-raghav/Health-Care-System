const doctor_data = (doctor_id) => {
  fetch("/doctorDashboard/user", {
    method: "POST",
    body: JSON.stringify({
      doctor_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "success") {
        document.getElementById("Doctor_name").innerHTML = data.result.name;
      } else {
        document.getElementById("Doctor_name").innerHTML = "Jonny Sins";
      }
    });

}

const doctor_appointments = (doctor_id) => {
    fetch("/appointment/viewAppointment", {
      method: "POST",
      body: JSON.stringify({
        doctor_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let appointment_body; 
        for(let i = 0; i<data.result.length; i++){
          appointment_body += `<tr>
            <td>
              <h2 class="table-avatar">
                <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/img/patients/patient.jpg" alt="User Image"></a>
                <a href="patient-profile.html"><span>#PT0016</span></a>
              </h2>
            </td>
            <td>11 dec 2023 <span class="d-block text-info">10.00 AM</span></td>
            <td>General</td>
            <td>New Patient</td>
            <td class="text-center">Rs.150</td>
            <td class="text-right">
              <div class="table-action">
                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                  <i class="far fa-eye"></i> View
                </a>
              </div>
            </td>
          </tr>
          `
        }
          
        console.log(appointment_body)
        document.getElementById("appointment_upcoming_list").innerHTML += appointment_body;
      });

}


const getData = (doctor_id) => {
  console.log("Doctor Id: ", doctor_id)
  doctor_data(doctor_id);
  doctor_appointments(doctor_id);
  
};



const login = document.getElementById("loginform");
login.addEventListener("submit", async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const data = { email, pass };
  console.log(data);
  fetch("/authDoctor/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "Success") {
        window.location.href = "/health_care";
      }
      console.log("Data: ", data);
    });
});
