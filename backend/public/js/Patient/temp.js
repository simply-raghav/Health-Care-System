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
      });
  };
  
  
  
  
  
  
  
  
  let slot, start, end;
  
  
  // generate date and time slots
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
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
              console.log('Selected Date:', selectedDateString);
              // You can add your logic to handle the selected date here
              // Generate time slots with different values based on the selected day
              if (day === 'Sun') {
                  console.log(slot, start, end);
                  // generateTimeSlots(slot, start, end); // Example values for Sunday
                  generateTimeSlots(15, '12:00', '18:00'); 
              } else if (day === 'Mon') {
                  generateTimeSlots(15, '9:00', '17:00'); // Example values for Monday
              } else if (day === 'Tue') {
                  generateTimeSlots(45, '8:00', '16:00'); // Example values for Tuesday
              } else if (day === 'Wed') {
                  generateTimeSlots(60, '-', '18:00'); // Example values for Wednesday
              } else if (day === 'Thu') {
                  generateTimeSlots(15, '2:00', '18:00'); // Example values for Thursday
              } else if (day === 'Fri') {
                  generateTimeSlots(45, '13:00', '18:00'); // Example values for Friday
              } else if (day === 'Sat') {
                  generateTimeSlots(60, '-', '18:00'); // Example values for Saturday
              }
          });
          datesList.appendChild(li);
      }
  }
  
  
      // Function to generate time slots dynamically based on parameters
      // Function to generate time slots dynamically based on parameters
  function generateTimeSlots(slotDuration, startTime, endTime) {
      console.log(typeof(slot));
      console.log(typeof(start));
      console.log(typeof(end));
      const timeSlotsList = document.querySelector('.time-slot ul');
      timeSlotsList.innerHTML = ''; // Clear previous time slots
  
      // Check if it's a holiday (no time slots)
      if (startTime === '-' || endTime === '-') {
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
  
      // Event listener for the ">" (greater than) sign to generate the next 7 days
      const nextButton = document.getElementById('next_button');
      nextButton.addEventListener('click', function() {
          currentDateIndex += 7; // Increment the index by 7 to get the next set of dates
          generateDates();
          // Enable the previous button when navigating forward
          prevButton.disabled = false;
      });
  
      // Event listener for the "<" (less than) sign to generate the previous 7 days
      prevButton.addEventListener('click', function() {
          if (currentDateIndex === 0) {
              // Prevent navigating back to today's date or any past date
              return;
          }
          currentDateIndex -= 7; // Decrement the index by 7 to get the previous set of dates
          generateDates();
          // Disable the previous button if currentDateIndex is 0 (today's date)
          if (currentDateIndex === 0) {
              prevButton.disabled = true;
          }
      });
  
      // Disable the previous button initially if currentDateIndex is 0 (today's date)
      if (currentDateIndex === 0) {
          prevButton.disabled = true;
      }
  });
  
  
  
  
  
  
  
  
  
          // generate date and time slots
  
  
  
  
  
  
  
  
  
  
  
  
  
  
          
          
          const getData = (id) => {
            console.log("Patient Id: ", id);
            patient_data(id);
            
            
            
  
  };
  