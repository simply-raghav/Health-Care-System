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

            // monday render
            let starttime_mon = document.getElementById('mondayStartTime');
            let endtime_mon = document.getElementById('mondayEndTime');
            let check_mon = document.getElementById('mondayHolidayCheckbox');
            if ( data.result.timings.Monday.startTime === '' || data.result.timings.Monday.endtime === '' ) {
                check_mon.checked = true;
                check_mon.checked.dispatchEvent(new Event('change'));
            } else{
                console.log("Data", data);
                check_mon.checked = false;
                check_mon.dispatchEvent(new Event('change'))
                let startTime  = data.result.timings.Monday.startTime;
                let endTime  = data.result.timings.Monday.endTime;
                startTime = startTime.toString().padStart(5,'0');
                endTime = endTime.toString().padStart(5,'0');
                console.log("Start Time : ", startTime, " End Time : ", endTime);
                starttime_mon.value = startTime;
                starttime_mon.dispatchEvent(new Event('change'));
                endtime_mon.value = endTime;
                endtime_mon.dispatchEvent(new Event('change'));

            }
            
            // monday render


            // tuesday render

            let starttime_tue = document.getElementById('tuesdayStartTime');
            let endtime_tue = document.getElementById('tuesdayEndTime');
            let check_tue = document.getElementById('tuesdayHolidayCheckbox');
            console.log("Data", data);
            if ( data.result.timings.Tuesday.startTime === '' || data.result.timings.Tuesday.endtime === '' ) {
                check_tue.checked = true;
                check_tue.checked.dispatchEvent(new Event('change'));
            } else{
                check_tue.checked = false;
                check_tue.dispatchEvent(new Event('change'))
                let startTime  = data.result.timings.Tuesday.startTime;
                let endTime  = data.result.timings.Tuesday.endTime;
                startTime = startTime.toString().padStart(5,'0');
                endTime = endTime.toString().padStart(5,'0');
                console.log("Start Time : ", startTime, " End Time : ", endTime);
                starttime_tue.value = startTime;
                starttime_tue.dispatchEvent(new Event('change'));
                endtime_tue.value = endTime;
                endtime_tue.dispatchEvent(new Event('change'));

            }


            // tuesday render








            
            //   document.getElementById("doctor_name").innerHTML =
            //     "Dr. " + data.result.name;
            //   document.getElementById("doctor_degree").innerHTML = data.result.degree;
            //   document.getElementById("doctor_username").value = data.result.name;
            //   document.getElementById("doctor_email").value = data.result.email;
        //   document.getElementById("doctor_name_form").value = data.result.name;
        //   document.getElementById("doctor_phone_number").value =
        //     data.result.contact;
        //   document.getElementById("doctor_address_form").value =
        //     data.result.address;
        //   console.log(data.result.gender);
        //   const gender = document.getElementById("gender_form")
        //   gender.value = data.result.gender;
        //   gender.dispatchEvent(new Event('change'));
  
  
        //   // document.getElementById("doctor_dob_form").value= data.result.DOB;
        // } else {
        //   document.getElementById("doctor_name").innerHTML = "NA";
        //   document.getElementById("doctor_degree").innerHTML = "NA";
        }
      });
  };
  
  const getData = (id) => {
    console.log("Doctor Id: ", id);
    doctor_data(id);
  };
  
  const update_doctor_data = (id) => {
    const starttime_mon = document.get.getElementById('mondayStartTime').value;
    const starttime_tue = document.get.getElementById('tuesdayStartTime').value;
    const starttime_wed = document.get.getElementById('wednesdayStartTime').value;
    const starttime_thu = document.get.getElementById('thursdayStartTime').value;
    const starttime_fri = document.get.getElementById('fridayStartTime').value;
    const starttime_sat = document.get.getElementById('saturdayStartTime').value;
    const starttime_sun = document.get.getElementById('sundayStartTime').value;


    const endtime_mon = document.get.getElementById('mondayEndTime').value;
    const endtime_tue = document.get.getElementById('tuesdayEndTime').value;
    const endtime_wed = document.get.getElementById('wednesdayEndTime').value;
    const endtime_thu = document.get.getElementById('thursdayEndTime').value;
    const endtime_fri = document.get.getElementById('fridayEndTime').value;
    const endtime_sat = document.get.getElementById('saturdayEndTime').value;
    const endtime_sun = document.get.getElementById('sundayEndTime').value;

  } 
  
  const setData = (id) => {
    console.log("Doctor Id: ", id);
    update_doctor_data(id);
  };





