
function calculateFine(purchaseDate, returnDate) {
    const allowedDays = 7; 
    const fine = 500;

const daysDifference = (new Date(returnDate) - new Date(purchaseDate)) / (1000 * 60 * 60 * 24);

    if (daysDifference > allowedDays) {
        return `Late by ${daysDifference - allowedDays} days. Fine: ₹${fine}`;
    }
    return "Return is on time. No fine.";
}
console.log(calculateFine("2025-01-01", "2025-01-10")); 
console.log(calculateFine("2025-01-01", "2025-01-05"));
