function registerUser(userDetails, callback) {
    console.log("Registering user...");
    setTimeout(() => {
      console.log(`User ${userDetails.name} registered successfully.`);
      callback(userDetails);
    }, 2000); 
  }
  function sendEmail(userDetails, callback) {
    console.log("Sending email...");
    setTimeout(() => {
      console.log(`Email sent to ${userDetails.email}`);
      callback(userDetails);
    }, 1500); 
  }
  
  function displayWelcomeMessage(userDetails) {
    console.log(`Welcome, ${userDetails.name}!`);
  }
  const userDetails = { name: "John Doe", email: "john.doe@example.com" };
  registerUser(userDetails, (userDetails) => {
    sendEmail(userDetails, (userDetails) => {
      displayWelcomeMessage(userDetails);
    });
  });
  