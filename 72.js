function find(decimal_number)
{
    if (decimal_number == 0) 
        return 0; 
    else
        return ((decimal_number % 2) + 10 * 
                find(parseInt(decimal_number / 2)));
}

var decimal_number = 10;
console.log( find(decimal_number));