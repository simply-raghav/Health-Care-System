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

            // sunday render
            let starttime_sun = document.getElementById('startTime');
            let endtime_sun = document.getElementById('endTime');
            let check_sun = document.getElementById('holidayCheckbox');
            console.log("Data1", data);
            if ( data.result.timings.Sunday.startTime === '' || data.result.timings.Sunday.endtime === '' ) {
                check_sun.checked = true;
                check_sun.dispatchEvent(new Event('change'));
            } else{
                check_sun.checked = false;
                check_sun.dispatchEvent(new Event('change'))
                let startTime  = data.result.timings.Sunday.startTime;
                let endTime  = data.result.timings.Sunday.endTime;
                console.log(startTime, endTime);
                startTime = startTime.toString().padStart(5,'0');
                endTime = endTime.toString().padStart(5,'0');
                console.log("Start Time : ", startTime, " End Time : ", endTime);
                starttime_sun.value = startTime;
                starttime_sun.dispatchEvent(new Event('change'));
                endtime_sun.value = endTime;
                endtime_sun.dispatchEvent(new Event('change'));
            }
            // sunday render

            // monday render
            let starttime_mon = document.getElementById('mondayStartTime');
            let endtime_mon = document.getElementById('mondayEndTime');
            let check_mon = document.getElementById('mondayHolidayCheckbox');
            if ( data.result.timings.Monday.startTime === '' || data.result.timings.Monday.endtime === '' ) {
                check_mon.checked = true;
                check_mon.dispatchEvent(new Event('change'));
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
            if ( data.result.timings.Tueday.startTime === '' || data.result.timings.Tueday.endtime === '' ) {
                check_tue.checked = true;
                check_tue.dispatchEvent(new Event('change'));
            } else{
                check_tue.checked = false;
                check_tue.dispatchEvent(new Event('change'))
                let startTime  = data.result.timings.Tueday.startTime;
                let endTime  = data.result.timings.Tueday.endTime;
                startTime = startTime.toString().padStart(5,'0');
                endTime = endTime.toString().padStart(5,'0');
                console.log("Start Time : ", startTime, " End Time : ", endTime);
                starttime_tue.value = startTime;
                starttime_tue.dispatchEvent(new Event('change'));
                endtime_tue.value = endTime;
                endtime_tue.dispatchEvent(new Event('change'));
            }
            // tuesday render

            // wednesday render
            let starttime_wed = document.getElementById('wednesdayStartTime');
            let endtime_wed = document.getElementById('wednesdayEndTime');
            let check_wed = document.getElementById('wednesdayHolidayCheckbox');
            if ( data.result.timings.Wednesday.startTime === '' || data.result.timings.wednesday.endtime === '' ) {
                console.log("Data Wed", data);
                check_wed.checked = true;
                check_wed.dispatchEvent(new Event('change'));
            } else{
                check_wed.checked = false;
                check_wed.dispatchEvent(new Event('change'))
                let startTime  = data.result.timings.wednesday.startTime;
                let endTime  = data.result.timings.wednesday.endTime;
                startTime = startTime.toString().padStart(5,'0');
                endTime = endTime.toString().padStart(5,'0');
                console.log("Start Time : ", startTime, " End Time : ", endTime);
                starttime_wed.value = startTime;
                starttime_wed.dispatchEvent(new Event('change'));
                endtime_wed.value = endTime;
                endtime_wed.dispatchEvent(new Event('change'));
            }
            console.log("Data2");
            // wednesday render



            // thursday


            let starttime_thu = document.getElementById('thursdayStartTime');
            let endtime_thu = document.getElementById('thursEndTime');
            let check_thu = document.getElementById('thursdayHolidayCheckbox');
            console.log("Data thurs", data);
            if ( data.result.timings.Thursday.startTime === '' || data.result.timings.Thursday.endtime === '' ) {
                check_thu.checked = true;
                check_thu.dispatchEvent(new Event('change'));
            } else{
                check_thu.checked = false;
                check_thu.dispatchEvent(new Event('change'))
                let startTime  = data.result.timings.Thursday.startTime;
                let endTime  = data.result.timings.Thursday.endTime;
                startTime = startTime.toString().padStart(5,'0');
                endTime = endTime.toString().padStart(5,'0');
                console.log("Start Time : ", startTime, " End Time : ", endTime);
                starttime_thu.value = startTime;
                starttime_thu.dispatchEvent(new Event('change'));
                endtime_thu.value = endTime;
                endtime_thu.dispatchEvent(new Event('change'));
            }




            // thursday






            // friday


            let starttime_fri = document.getElementById('fridayStartTime');
            let endtime_fri = document.getElementById('fridayEndTime');
            let check_fri = document.getElementById('fridayHolidayCheckbox');
            console.log("Data frirs", data);
            if ( data.result.timings.Friday.startTime === '' || data.result.timings.Friday.endtime === '' ) {
                check_fri.checked = true;
                check_fri.dispatchEvent(new Event('change'));
            } else{
                check_fri.checked = false;
                check_fri.dispatchEvent(new Event('change'))
                let startTime  = data.result.timings.Friday.startTime;
                let endTime  = data.result.timings.Friday.endTime;
                startTime = startTime.toString().padStart(5,'0');
                endTime = endTime.toString().padStart(5,'0');
                console.log("Start Time : ", startTime, " End Time : ", endTime);
                starttime_fri.value = startTime;
                starttime_fri.dispatchEvent(new Event('change'));
                endtime_fri.value = endTime;
                endtime_fri.dispatchEvent(new Event('change'));
            }




            // friday








            
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





