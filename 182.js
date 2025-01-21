function checkAuthentication(user) {
    return new Promise((resolve, reject) => {
      console.log("Checking authentication...");
  
      setTimeout(() => {
        if (user && user.isAuthenticated) {
          resolve(`User ${user.name} is authenticated.`);
        } else {
          reject(new Error("User is not authenticated."));
        }
      }, 2000); 
    });
  }
  const authenticatedUser = { name: "John Doe", isAuthenticated: true };
  const unauthenticatedUser = { name: "Jane Doe", isAuthenticated: false };
  
  checkAuthentication(authenticatedUser)
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });

  checkAuthentication(unauthenticatedUser)
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });

  checkAuthentication(null)
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  