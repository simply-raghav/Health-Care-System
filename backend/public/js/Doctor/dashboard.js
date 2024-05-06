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

const doctor_appointments = (id) => {
    fetch("/appointment/viewAppointment_doctor", {
      method: "POST",
      body: JSON.stringify({
        doctor_id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        let appointment_body = "";
        console.log("data: ", data);
        for (let i = 0; i < data.result.length; i++) {
          appointment_body += `<tr>
          <tbody id = "appointment_upcoming_list">
          <tr>
            <td>
              <h2 class="table-avatar">
                <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/img/patient/patient1.jpg" alt="User Image"></a>
                <a href="patient-profile.html">${result[i].name} <span>#PT0001</span></a>
              </h2>
            </td>
            <td>3 jan 2023 <span class="d-block text-info">11.00 AM</span></td>
            <!-- <td>General</td> -->
            <!-- <td>Old Patient</td> -->
            <td class="text-center">Rs.${result[i].name}</td>
            <td class="text-right">
              <div class="table-action">
                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                  <i class="far fa-eye"></i> View
                </a>
                
                <!-- <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                  <i class="fas fa-check"></i> Accept
                </a>
                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                  <i class="fas fa-times"></i> Cancel
                </a> -->
              </div>
            </td>
          </tr>
          
        </tbody>
          `;
        }

        console.log(appointment_body);
        if (appointment_body)
          document.getElementById("appointment_upcoming_list").innerHTML +=
            appointment_body;
      });

}


const getData = (id) => {
  console.log("Doctor Id: ", id)
  doctor_data(id);
  doctor_appointments(id);
  
};
