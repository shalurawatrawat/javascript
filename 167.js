const {
    convertCurrency,
    listConversionRates
  } = require('./currencyConverter');
  
  try {
    const amountInUSD = 100;
    const amountInEUR = convertCurrency(amountInUSD, 'USD', 'EUR');
    console.log(`${amountInUSD} USD is equal to ${amountInEUR} EUR`);
  
    console.log('Available conversion rates:', listConversionRates());
  } catch (error) {
    console.error(error.message);
  }