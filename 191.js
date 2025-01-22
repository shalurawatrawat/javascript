async function performAsyncTask() {
    try {
      const result = await someAsyncOperation();
      console.log('Operation succeeded:', result);
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  }
  async function someAsyncOperation() {
    throw new Error('Something went wrong during the operation');
  }
  performAsyncTask();