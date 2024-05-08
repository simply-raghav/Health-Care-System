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
            if (
              data.result.timings.Sunday.startTime === "" ||
              data.result.timings.Sunday.endtime === "" ||
              data.result.timings.Sunday.startTime === "-" ||
              data.result.timings.Sunday.endtime === "-"
            ) {
              check_sun.checked = true;
              check_sun.dispatchEvent(new Event("change"));
            } else {
              check_sun.checked = false;
              check_sun.dispatchEvent(new Event("change"));
              let startTime = data.result.timings.Sunday.startTime;
              let endTime = data.result.timings.Sunday.endTime;
              console.log(startTime, endTime);
              startTime = startTime.toString().padStart(5, "0");
              endTime = endTime.toString().padStart(5, "0");
              console.log("Start Time : ", startTime, " End Time : ", endTime);
              starttime_sun.value = startTime;
              starttime_sun.dispatchEvent(new Event("change"));
              endtime_sun.value = endTime;
              endtime_sun.dispatchEvent(new Event("change"));
            }
            // sunday render

            // monday render
            let starttime_mon = document.getElementById('mondayStartTime');
            let endtime_mon = document.getElementById('mondayEndTime');
            let check_mon = document.getElementById('mondayHolidayCheckbox');
            if (
              data.result.timings.Monday.startTime === "" ||
              data.result.timings.Monday.endtime === "" ||
              data.result.timings.Monday.startTime === "-" ||
              data.result.timings.Monday.endtime === "-"
            ) {
              check_mon.checked = true;
              check_mon.dispatchEvent(new Event("change"));
            } else {
              console.log("Data", data);
              check_mon.checked = false;
              check_mon.dispatchEvent(new Event("change"));
              let startTime = data.result.timings.Monday.startTime;
              let endTime = data.result.timings.Monday.endTime;
              startTime = startTime.toString().padStart(5, "0");
              endTime = endTime.toString().padStart(5, "0");
              console.log("Start Time : ", startTime, " End Time : ", endTime);
              starttime_mon.value = startTime;
              starttime_mon.dispatchEvent(new Event("change"));
              endtime_mon.value = endTime;
              endtime_mon.dispatchEvent(new Event("change"));
            }
            // monday render


            // tuesday render
            let starttime_tue = document.getElementById('tuesdayStartTime');
            let endtime_tue = document.getElementById('tuesdayEndTime');
            let check_tue = document.getElementById('tuesdayHolidayCheckbox');
            console.log("Data", data);
            if (
              data.result.timings.Tueday.startTime === "" ||
              data.result.timings.Tueday.endtime === "" ||
              data.result.timings.Tueday.startTime === "-" ||
              data.result.timings.Tueday.endtime === "-"
            ) {
              check_tue.checked = true;
              check_tue.dispatchEvent(new Event("change"));
            } else {
              check_tue.checked = false;
              check_tue.dispatchEvent(new Event("change"));
              let startTime = data.result.timings.Tueday.startTime;
              let endTime = data.result.timings.Tueday.endTime;
              startTime = startTime.toString().padStart(5, "0");
              endTime = endTime.toString().padStart(5, "0");
              console.log("Start Time : ", startTime, " End Time : ", endTime);
              starttime_tue.value = startTime;
              starttime_tue.dispatchEvent(new Event("change"));
              endtime_tue.value = endTime;
              endtime_tue.dispatchEvent(new Event("change"));
            }
            // tuesday render

            // wednesday render
            let starttime_wed = document.getElementById('wednesdayStartTime');
            let endtime_wed = document.getElementById('wednesdayEndTime');
            let check_wed = document.getElementById('wednesdayHolidayCheckbox');
            if (
              data.result.timings.Wednesday.startTime === "" ||
              data.result.timings.Wednesday.endtime === "" ||
              data.result.timings.Wednesday.startTime === "-" ||
              data.result.timings.Wednesday.endtime === "-"
            ) {
              console.log("Data Wed", data);
              check_wed.checked = true;
              check_wed.dispatchEvent(new Event("change"));
            } else {
              check_wed.checked = false;
              check_wed.dispatchEvent(new Event("change"));
              let startTime = data.result.timings.Wednesday.startTime;
              let endTime = data.result.timings.Wednesday.endTime;
              startTime = startTime.toString().padStart(5, "0");
              endTime = endTime.toString().padStart(5, "0");
              console.log("Start Time : ", startTime, " End Time : ", endTime);
              starttime_wed.value = startTime;
              starttime_wed.dispatchEvent(new Event("change"));
              endtime_wed.value = endTime;
              endtime_wed.dispatchEvent(new Event("change"));
            }
            console.log("Data2");
            // wednesday render



            // thursday


            let starttime_thu = document.getElementById('thursdayStartTime');
            let endtime_thu = document.getElementById('thursdayEndTime');
            let check_thu = document.getElementById('thursdayHolidayCheckbox');
            console.log("Data thurs", data);
            if (
              data.result.timings.Thursday.startTime === "" ||
              data.result.timings.Thursday.endtime === "" ||
              data.result.timings.Thursday.startTime === "-" ||
              data.result.timings.Thursday.endtime === "-"
            ) {
              check_thu.checked = true;
              check_thu.dispatchEvent(new Event("change"));
            } else {
              check_thu.checked = false;
              check_thu.dispatchEvent(new Event("change"));
              let startTime = data.result.timings.Thursday.startTime;
              let endTime = data.result.timings.Thursday.endTime;
              startTime = startTime.toString().padStart(5, "0");
              endTime = endTime.toString().padStart(5, "0");
              console.log("Start Time : ", startTime, " End Time : ", endTime);
              starttime_thu.value = startTime;
              starttime_thu.dispatchEvent(new Event("change"));
              endtime_thu.value = endTime;
              endtime_thu.dispatchEvent(new Event("change"));
            }




            // thursday






            // friday


            let starttime_fri = document.getElementById('fridayStartTime');
            let endtime_fri = document.getElementById('fridayEndTime');
            let check_fri = document.getElementById('fridayHolidayCheckbox');
            console.log("Data frirs", data);
            if (
              data.result.timings.Friday.startTime === "" ||
              data.result.timings.Friday.endtime === "" ||
              data.result.timings.Friday.startTime === "-" ||
              data.result.timings.Friday.endtime === "-"
            ) {
              check_fri.checked = true;
              check_fri.dispatchEvent(new Event("change"));
            } else {
              check_fri.checked = false;
              check_fri.dispatchEvent(new Event("change"));
              let startTime = data.result.timings.Friday.startTime;
              let endTime = data.result.timings.Friday.endTime;
              startTime = startTime.toString().padStart(5, "0");
              endTime = endTime.toString().padStart(5, "0");
              console.log("Start Time : ", startTime, " End Time : ", endTime);
              starttime_fri.value = startTime;
              starttime_fri.dispatchEvent(new Event("change"));
              endtime_fri.value = endTime;
              endtime_fri.dispatchEvent(new Event("change"));
            }




            // friday


            // saturday 


            let starttime_sat = document.getElementById('saturdayStartTime');
            let endtime_sat = document.getElementById('saturdayEndTime');
            let check_sat = document.getElementById('saturdayHolidayCheckbox');
            console.log("Data satrs", data);
            if (
              data.result.timings.Saturday.startTime === "" ||
              data.result.timings.Saturday.endtime === "" ||
              data.result.timings.Saturday.startTime === "-" ||
              data.result.timings.Saturday.endtime === "-"
            ) {
              check_sat.checked = true;
              check_sat.dispatchEvent(new Event("change"));
            } else {
              check_sat.checked = false;
              check_sat.dispatchEvent(new Event("change"));
              let startTime = data.result.timings.Saturday.startTime;
              let endTime = data.result.timings.Saturday.endTime;
              startTime = startTime.toString().padStart(5, "0");
              endTime = endTime.toString().padStart(5, "0");
              console.log("Start Time : ", startTime, " End Time : ", endTime);
              starttime_sat.value = startTime;
              starttime_sat.dispatchEvent(new Event("change"));
              endtime_sat.value = endTime;
              endtime_sat.dispatchEvent(new Event("change"));
            }







            // saturday 








            
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
        document.getElementById("doctor_name").innerHTML =
          "Dr. " + data.result.name;
        document.getElementById("degree").innerHTML =
          "Dr. " + data.result.degree;
      });
  };
  
  const getData = (id) => {
    console.log("Doctor Id: ", id);
    doctor_data(id);
  };
  
  const update_doctor_data = (id) => {
    let time_slot = document.getElementById("time_slot").value;
    let starttime_mon = document.getElementById('mondayStartTime').value;
    let starttime_tue = document.getElementById('tuesdayStartTime').value;
    let starttime_wed = document.getElementById('wednesdayStartTime').value;
    let starttime_thu = document.getElementById('thursdayStartTime').value;
    let starttime_fri = document.getElementById('fridayStartTime').value;
    let starttime_sat = document.getElementById('saturdayStartTime').value;
    let starttime_sun = document.getElementById('startTime').value;
    

    let endtime_mon = document.getElementById('mondayEndTime').value;
    let endtime_tue = document.getElementById('tuesdayEndTime').value;
    let endtime_wed = document.getElementById('wednesdayEndTime').value;
    let endtime_thu = document.getElementById('thursdayEndTime').value;
    let endtime_fri = document.getElementById('fridayEndTime').value;
    let endtime_sat = document.getElementById('saturdayEndTime').value;
    let endtime_sun = document.getElementById('endTime').value;



    const data = {
      slot_interval: time_slot,
      timings: {
        Sunday: {
          startTime: starttime_sun,
          endTime: endtime_sun,
        },
        Monday: {
          startTime: starttime_mon,
          endTime: endtime_mon,
        },
        Tueday: {
          startTime: starttime_tue,
          endTime: endtime_tue,
        },
        Wednesday: {
          startTime: starttime_wed,
          endTime: endtime_wed,
        },
        Thursday: {
          startTime: starttime_thu,
          endTime: endtime_thu,
        },
        Friday: {
          startTime: starttime_fri,
          endTime: endtime_fri,
        },
        Saturday: {
          startTime: starttime_sat,
          endTime: endtime_sat,
        },
      },
    };
    console.log("Updated Data: ", data);

    fetch("/authDoctor/updateTimings", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
            if(data.status === 'success'){
                alert("Timings Updated Successfully");
            }else{
                alert("Error Occurred");
            }
      });

  } 
  
  const setData = (id) => {
    console.log("Doctor Id: ", id);
    update_doctor_data(id);
  };





