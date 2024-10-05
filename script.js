// Set the countdown date to October 2, 2024, 00:00:00
const countdownDate = new Date("October 2, 2024 00:00:00").getTime();

// Get the timer element by ID
const timerElement = document.getElementById("timer");

// Function to update the countdown every second
const updateTimer = () => {
  const now = new Date().getTime(); // Get the current time
  const distance = now - countdownDate; // Calculate the time elapsed since October 2

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the timer element
  timerElement.innerHTML = `Each ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds will be counted 😂 since Oct 2, 2024`;

  // If the countdown date hasn't passed, display a message
  if (distance < 0) {
    clearInterval(timerInterval);
    timerElement.innerHTML = "It's not October 2nd yet!";
  }
};

// Call the updateTimer function every 1 second
const timerInterval = setInterval(updateTimer, 1000);
