function checkBalance(account) {
    return new Promise((resolve, reject) => {
      console.log("Checking balance...");
      setTimeout(() => {
        if (account.balance >= 0) {
          resolve(account.balance);
        } else {
          reject(new Error("Account balance is negative or unavailable."));
        }
      }, 1000);
    });
  }
  function withdrawMoney(account, amount) {
    return new Promise((resolve, reject) => {
      console.log(`Processing withdrawal of $${amount}...`);
      setTimeout(() => {
        if (account.balance >= amount) {
          account.balance -= amount;
          resolve(account.balance);
        } else {
          reject(new Error("Insufficient funds."));
        }
      }, 1000);
    });
  }
  function updateBalance(account) {
    return new Promise((resolve) => {
      console.log("Updating balance...");
      setTimeout(() => {
        console.log(`New balance: $${account.balance}`);
        resolve(account.balance);
      }, 1000);
    });
  }
  const account = { holder: "John Doe", balance: 500 };
  checkBalance(account)
    .then((balance) => {
      console.log(`Current balance: $${balance}`);
      return withdrawMoney(account, 300); 
    })
    .then((updatedBalance) => {
      console.log(`Withdrawal successful. Remaining balance: $${updatedBalance}`);
      return updateBalance(account);
    })
    .then(() => {
      console.log("Transaction completed.");
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  
    