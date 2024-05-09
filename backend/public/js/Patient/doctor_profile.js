// const getCardFormat = (result) => {
//   let card = "";
//   for (let i = 0; i < result.length; i++) {
        
//   card += ``;
//   }
//   return card;
// }










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
      document.getElementById("speciality").innerHTML = "Degree: " +  data.result.degree;
      document.getElementById("address").innerHTML = data.result.hospital.name + ", "+ data.result.hospital.address;
      if (data.result.hospital.about_me) {
        document.getElementById("about_me").innerHTML = data.result.hospital.about_me;
    } else {
        // If the data doesn't exist, you can choose to do nothing or show a placeholder message
        // For example:
        document.getElementById("about_me").innerHTML = "No information available";
        // Or simply leave it blank
        // document.getElementById("address").innerHTML = "";
    }
    
    });
};

const getData = (id) => {
  console.log("Patient Id: ", id);
  patient_data(id);
};
