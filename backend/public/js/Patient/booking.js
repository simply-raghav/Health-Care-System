let finaldate;
let finaltime;

function gettimings (slot_interval, timings) {
  slot_interval = parseInt(slot_interval);
  console.log(slot_interval, timings);
  let currentDateIndex = 0; // Index of the first displayed date
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  const datesList = document.querySelector('.day-slot ul');
  const prevButton = document.getElementById('prev_button');
  const proceedButton = document.getElementById('payButton'); // Get the proceed button

  // Initially hide the "Proceed to Pay" button
  proceedButton.style.display = 'none';

  // Function to generate dates for the next 7 days excluding Saturdays and Sundays
  // Function to generate dates for the next 7 days including Sundays
function generateDates() {
  datesList.innerHTML = ''; // Clear previous dates
  for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(currentDate.getDate() + currentDateIndex + i);
      const day = days[currentDate.getDay()];
      const date = currentDate.getDate();
      const month = currentDate.toLocaleString('default', { month: 'short' });
      const year = currentDate.getFullYear();
      const li = document.createElement('li');
      li.innerHTML = `
          <span>${day}</span>
          <span class="slot-date">${date} ${month} <small class="slot-year">${year}</small></span>
      `;
      // Add click event listener to select date
      li.addEventListener('click', function() {
          // Hide the message
          const message = document.querySelector('.time-slot-message');
          message.style.display = 'none';
          // Remove previously selected dates
          const selectedDates = document.querySelectorAll('.day-slot li.selected');
          selectedDates.forEach(date => date.classList.remove('selected'));
          // Highlight the selected date
          li.classList.add('selected');
          const selectedDateString = currentDate.toDateString();
            finaldate = selectedDateString;
          console.log('Selected Date:', selectedDateString);
          // You can add your logic to handle the selected date here
          // Generate time slots with different values based on the selected day
          if (day === 'Sun') {
              console.log(slot_interval, timings.Sunday.startTime, timings.Sunday.endTime);
              generateTimeSlots(slot_interval, timings.Sunday.startTime, timings.Sunday.endTime); // Example values for Sunday
              proceedButton.style.display = "none";
              // generateTimeSlots(15, '12:00', '18:00'); 
          } else if (day === 'Mon') {
              generateTimeSlots(slot_interval, timings.Monday.startTime, timings.Monday.endTime); // Example values for Monday
              proceedButton.style.display = "none";
              // generateTimeSlots(15, '9:00', '17:00'); // Example values for Monday
          } else if (day === 'Tue') {
              generateTimeSlots(slot_interval, timings.Tueday.startTime, timings.Tueday.endTime); // Example values for Tuesday
              proceedButton.style.display = "none";  
          } else if (day === 'Wed') {
              generateTimeSlots(slot_interval, timings.Wednesday.startTime, timings.Wednesday.endTime); // Example values for Wednesday
              proceedButton.style.display = "none";
          } else if (day === 'Thu') {
              generateTimeSlots(slot_interval, timings.Thursday.startTime, timings.Thursday.endTime); // Example values for Thursday
              proceedButton.style.display = "none";
          } else if (day === 'Fri') {
              generateTimeSlots(slot_interval, timings.Friday.startTime, timings.Friday.endTime); // Example values for Friday
              proceedButton.style.display = "none";
          } else if (day === 'Sat') {
              generateTimeSlots(slot_interval, timings.Saturday.startTime, timings.Saturday.endTime); // Example values for Saturday
              proceedButton.style.display = "none";
          }
      });
      datesList.appendChild(li);
  }
}


  // Function to generate time slots dynamically based on parameters
  // Function to generate time slots dynamically ba sed on parameters
function generateTimeSlots(slotDuration, startTime, endTime) {
  console.log(typeof(slot));
  console.log(typeof(start));
  console.log(typeof(end));
  const timeSlotsList = document.querySelector('.time-slot ul');
  timeSlotsList.innerHTML = ''; // Clear previous time slots

  // Check if it's a holiday (no time slots)
  if (startTime === '' || endTime === '') {
      const message = document.querySelector('.time-slot-message');
      message.textContent = 'Doctor is on holiday';
      message.style.display = 'block';
      return; // Exit the function
  }

  // Convert start and end time to minutes
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);
  const startTotalMinutes = startHour * 60 + startMinute;
  const endTotalMinutes = endHour * 60 + endMinute;

  for (let totalMinutes = startTotalMinutes; totalMinutes <= endTotalMinutes; totalMinutes += slotDuration) {
      const hour = Math.floor(totalMinutes / 60);
      const minute = totalMinutes % 60;
      const period = hour < 12 ? 'AM' : 'PM';
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      const displayMinute = minute.toString().padStart(2, '0');

      const li = document.createElement('li');
      li.innerHTML = `
          <a class="timing" href="#">
              <span>${displayHour}:${displayMinute}</span> <span>${period}</span>
          </a>
      `;
      // Add click event listener to select time slot
      li.addEventListener('click', function() {
          // Remove previously selected time slots
          const selectedSlots = document.querySelectorAll('.time-slot ul li.selected');
          selectedSlots.forEach(slot => slot.classList.remove('selected'));
          // Highlight the selected time slot
          li.classList.add('selected');
          const selectedTime = li.textContent.trim();
          finaltime = selectedTime;
          console.log('Selected Time:', selectedTime);
          // You can add your logic to handle the selected time slot here
          // Show the "Proceed to Pay" button when both date and time slot are selected
          enableProceedButton();
      });
      timeSlotsList.appendChild(li);
  }
}

  // Function to enable the "Proceed to Pay" button when both a date and a time slot are selected
  function enableProceedButton() {
      const selectedDate = document.querySelector('.day-slot li.selected');
      const selectedTime = document.querySelector('.time-slot ul li.selected');
      if (selectedDate && selectedTime) {
          proceedButton.style.display = 'block';
      } else {
          proceedButton.style.display = 'none';
      }
  }

  // Generate initial set of dates when the page loads
  generateDates();

  // Disable the previous button initially if currentDateIndex is 0 (today's date)
};


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
      document.getElementById("address").innerHTML = data.result.hospital.name + ", " + data.result.hospital.address;   
      console.log(data.result.slot_interval);
      console.log(data.result.timings.Sunday);
    slot = data.result.slot_interval;
    start = data.result.timings.Sunday.startTime;
    end = data.result.timings.Sunday.endTime;
    gettimings(data.result.slot_interval, data.result.timings);
    });
};
const getData = (id) => {
    console.log("Patient Id: ", id);
    patient_data(id);
};

const proceedPay = (id) => {
    console.log("Selected Date:", finaldate);
    console.log("Selected Time:", finaltime);
    

}