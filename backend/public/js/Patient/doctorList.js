const getCardFormat = (result) => {
  let card = "";
  for (let i = 0; i < result.length; i++) {
        
  card += `<div class="card-body">
                                <div class="doctor-widget">
                                    <div class="doc-info-left">
                                        <div class="doctor-img" id="doctor_image">
                                            <a href="doctor-profile.html">
													<img src="/img/blank.webp" class="img-fluid" alt="User Image">
												</a>
                                        </div>
                                        <div class="doc-info-cont" id="doctor_info">
                                            <h4 class="doc-name"><a href="doctor-profile.html">Dr. ${result[i].name}</a></h4>
                                            <p class="doc-speciality">${result[i].specialty}</p>
                                            <h5 class="doc-department"><img src="/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality">Dentist</h5>
                                            <div class="rating">
                                            </div>
                                            <div class="clinic-details">
                                                <p class="doc-location"><i class="fas fa-map-marker-alt"></i> ${result[i].hospital.name}, ${result[i].hospital.address}</p>
                                                <ul class="clinic-gallery">
                                                    <li>
                                                        <a href="/img/feature/feature-01.jpg" data-fancybox="gallery">
																<img src="/img/feature/feature-01.jpg" alt="Feature">
															</a>
                                                    </li>
                                                    <li>
                                                        <a href="/img/feature/feature-02.jpg" data-fancybox="gallery">
																<img  src="/img/feature/feature-02.jpg" alt="Feature">
															</a>
                                                    </li>
                                                    <li>
                                                        <a href="/img/feature/feature-03.jpg" data-fancybox="gallery">
																<img src="/img/feature/feature-03.jpg" alt="Feature">
															</a>
                                                    </li>
                                                    <li>
                                                        <a href="/img/feature/feature-04.jpg" data-fancybox="gallery">
																<img src="/img/feature/feature-04.jpg" alt="Feature">
															</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="clinic-services">
                                                <span>Dental Fillings</span>
                                                <span> Whitneing</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="doc-info-right">
                                        <!-- <div class="clini-infos">
                                            <ul>
                                                <li><i class="far fa-thumbs-up"></i> 98%</li>
                                                <li><i class="far fa-comment"></i> 17 Feedback</li>
                                                <li><i class="fas fa-map-marker-alt"></i> Delhi, India</li>
                                                <li><i class="far fa-money-bill-alt"></i> 300 rs - 1000 rs <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i> </li>
                                            </ul>
                                        </div> -->
                                        <div class="clinic-booking">
                                            <a class="view-pro-btn" href="doctor-profile.html">View Profile</a>
                                            <a class="apt-btn" href="booking.html">Book Appointment</a>
                                        </div>
                                    </div>
                                </div>
                            </div> `;
  }
  return card;
}





const doctor_data = (id) => {
  fetch("/authDoctor/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data: ", data);
      if (data.status === "success") {
        
        let cards = getCardFormat(data.result);
        document.getElementById("doctorCardLists").innerHTML = cards;

      } else {
        
      }
    });
};

const getData = () => {
  doctor_data();
  // patient_appointments(id);
};
