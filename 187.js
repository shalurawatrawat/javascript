async function performDatabaseQueries() {
    try {
      console.log('Starting database queries...');
      const connection = await simulateDatabaseOperation('Connecting to the database');
      console.log(connection);
      const userData = await simulateDatabaseOperation('Fetching user data');
      console.log(userData);

      const updateStatus = await simulateDatabaseOperation('Updating user details');
      console.log(updateStatus);
  
      console.log('All database operations completed successfully.');
    } catch (error) {
      console.error('Error during database queries:', error.message);
    }
  }
  
  function simulateDatabaseOperation(description) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.2; // 80% chance of success
        if (isSuccess) {
          resolve(`${description} - Success`);
        } else {
          reject(new Error(`${description} - Failed`));
        }
      }, 1000);
    });
  }
  performDatabaseQueries();
  