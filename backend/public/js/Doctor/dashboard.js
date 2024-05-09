// Function to fetch and display doctor data
const doctor_data = (id) => {
  // Fetch doctor data from the server
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
      // Update UI with doctor information
      if (data.status === "success") {
        document.getElementById("Doctor_name").innerHTML =
          "Dr. " + data.result.name;
        document.getElementById("speciality").innerHTML = data.result.degree;
      } else {
        document.getElementById("Doctor_name").innerHTML = "Dr. NA";
      }
    });
};

// Function to render upcoming appointment
const upcoming_apt = (apt) => {
  // Extract year, month, and day from apt.dateofAppointment
  var date = new Date(apt.dateofAppointment);
  var year = date.getFullYear();
  var month = date.getMonth() + 1; // Months are zero-based, so we add 1
  var day = date.getDate();

  // Generate HTML for the appointment
  const appointment = `<tr>
    <td>
      <h2 class="table-avatar">
        <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/img/patient/patient1.jpg" alt="User Image"></a>
        <a href="patient-profile.html">${apt.patientId.name} <span>#PT0001</span></a>
      </h2>
    </td>
    <td>${day}:${month}:${year} <span class="d-block text-info">${apt.timeofAppointment}</span></td>
    <td class="text-center">Rs.${apt.amount}</td>
    <td class="text-right">
      <div class="table-action">
        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
          <i class=""></i> ${apt.status}
        </a>
      </div>
    </td>
  </tr>`;

  // Append the appointment HTML to the list
  document.getElementById("appointment_upcoming_list").innerHTML += appointment;
};

// Function to render today's appointment
const today_apt = (apt) => {
  // Extract year, month, and day from apt.dateofAppointment
  var date = new Date(apt.dateofAppointment);
  var year = date.getFullYear();
  var month = date.getMonth() + 1; // Months are zero-based, so we add 1
  var day = date.getDate();

  // Generate HTML for the appointment
  const appointment = `<tr>
    <td>
      <h2 class="table-avatar">
        <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/img/patient/patient6.jpg" alt="User Image"></a>
        <a href="patient-profile.html">${apt.patientId.name} <span>#PT0006</span></a>
      </h2>
    </td>
    <td>${day}:${month}:${year} <span class="d-block text-info">6.00 PM</span></td>
    <td class="text-center">Rs.${apt.amount}</td>
    <td class="text-right">
      <div class="table-action">
        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
          <i class=""></i> ${apt.status}
        </a>
      </div>
    </td>
  </tr>`;

  // Append the appointment HTML to the list
  document.getElementById("appointment_today_list").innerHTML += appointment;
};

// Function to render past appointment
const past_apt = (apt) => {
  // Extract year, month, and day from apt.dateofAppointment
  var date = new Date(apt.dateofAppointment);
  var year = date.getFullYear();
  var month = date.getMonth() + 1; // Months are zero-based, so we add 1
  var day = date.getDate();

  // Generate HTML for the appointment
  const appointment = `<tr>
    <td>
      <h2 class="table-avatar">
        <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/img/patient/patient.jpg" alt="User Image"></a>
        <a href="patient-profile.html">${apt.patientId.name} <span>#PT0016</span></a>
      </h2>
    </td>
    <td>${day}:${month}:${year} <span class="d-block text-info">10.00 AM</span></td>
    <td class="text-center">Rs.${apt.amount}</td>
    <td class="text-right">
      <div class="table-action">
        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
          <i class=""></i> ${apt.status}
        </a>
      </div>
    </td>
  </tr>`;

  // Append the appointment HTML to the list
  document.getElementById("appointment_past_list").innerHTML += appointment;
};

// Function to fetch doctor appointments and render them
const doctor_appointments = (id) => {
  // Fetch doctor appointments from
