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









// patient apt render

const patient_apt = (apt) => {
  var today = new Date();
  var date = new Date(apt.dateofAppointment);
  if(date < today) return;
  if(apt.timeofAppointment < new Date().getTime()) return ;
  var book_date = new Date(apt.dateOfBooking);
  console.log(book_date);
  var book_day =book_date.getDate();
  var book_month = book_date.getMonth()+1;
  var book_year = book_date.getFullYear();
  var year = date.getFullYear();
  var month = date.getMonth() + 1; // Months are zero-based, so we add 1
  var day = date.getDate();

  const appointment = `<tr>
  <td>
    <h2 class="table-avatar">
      <a href="doctor-profile.html" class="avatar avatar-sm mr-2" id="doctor_img">
        <img class="avatar-img rounded-circle" src="/img/doctor/doctor-01.jpg" alt="doctor Image">
      </a>
      <a href="doctor-profile.html" id="doctor_name">${apt.doctorId.name}<span id="specility">Dental</span></a>
    </h2>
  </td>
  <td>${day}:${month}:${year}<span class="d-block text-info">${apt.timeofAppointment}</span></td>
  <td>${book_day}:${book_month}:${book_year}</td>
  <td>&#x20B9 ${apt.amount}</td>
  
  
    </div>
  </td>
</tr>
`;

document.getElementById("appointments_list").innerHTML += appointment;
};

// patient apt render




{/* <td><span class="badge badge-pill bg-success-light">Confirm</span></td>
  <td class="text-right">
    <div class="table-action">
      <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
        <i class="fas fa-print"></i> Print
      </a>
      <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
        <i class="far fa-eye"></i> View
      </a> */}











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
          console.log(sortedres);
          patient_apt(sortedres[i]);
        }
        
        
      });

}


const getData = (id) => {
  console.log("Patient Id: ", id)
  patient_data(id);
  console.log("ID: ", id);
  patient_appointments(id);
};

