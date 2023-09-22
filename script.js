'use strict';
/*
	WEB 230 Winter 2022
	Assignment 6
	{GHANBODE EBIEREDE, 0835765, 21-07-2023}
*/
$(document).ready(function () {
	// Event handler for the change or keyup events on salary and percent fields
	$('#salary, #percent').on('change keyup', function () {
	  // Get the values from the input fields
	  const salary = parseFloat($('#salary').val());
	  const percent = parseFloat($('#percent').val());
  
	  // Check if both values are valid numbers
	  if (!isNaN(salary) && !isNaN(percent)) {
		// Calculate the amount
		const amount = (salary * percent) / 100;
  
		// Round the amount to two decimal places using toFixed() method
		const roundedAmount = amount.toFixed(2);
  
		// Display the amount with a dollar sign in the span#amount element
		$('#amount').text('$' + roundedAmount);
	  } else {
		// Display an error message if either input is not a valid number
		$('#amount').text('Invalid input');
	  }
	});
  });