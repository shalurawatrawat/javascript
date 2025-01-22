async function retryOperation(operation, retries = 3, delay = 1000) {
    let attempts = 0;
  
    while (attempts < retries) {
      try {
        return await operation();
      } catch (error) {
        attempts++;
        console.error(`Attempt ${attempts} failed: ${error.message}`);
  
        if (attempts >= retries) {
          console.error('Max retries reached. Operation failed.');
          throw error;
        }
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  async function unreliableOperation() {
    if (Math.random() < 0.7) {
      throw new Error('Operation failed randomly');
    }
    return 'Operation succeeded!';
  }
  
  retryOperation(unreliableOperation)
    .then((result) => console.log(result))
    .catch((error) => console.error('Final Error:', error.message));
  