document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    form.addEventListener('reset', function () {
      // Reset the result and clear any error messages
      document.getElementById('output').value = '';
  });


    //to get input values
    var inputDegree = parseFloat(document.getElementById('inputdegree').value);
    var inputType = document.getElementById('inputtype').value;
    var conversionType = document.getElementById('conversiontype').value;


    //conversion
    var result = convertTemperature(inputDegree, inputType, conversionType);

    //result display
    document.getElementById('output').value = result;
  });
});

//function to convert temperature

function convertTemperature(inputDegree, inputType, conversionType) {
  if (inputType == conversionType) {
    return inputDegree;
  }
  //Celsius to Fahrenheit and Kelvin
  
  if( inputType == 'C') {
    if(conversionType == 'F'){
      return (inputDegree * 9 / 5) + 32;
    } else if(conversionType == 'K') {
      return  inputDegree + 273.15;
    }
  } else if( inputType == 'F') {   //Fahnrenheit to Celsius and Kelvin
    if(conversionType == 'C'){
      return (inputDegree -32) * 5 / 9;
    } else if(conversionType == 'K') {
      return (inputDegree -32) * 5 / 9 + 273.15;
    } 
  } else if( inputType == 'K') {  //Kelvin to Celsius and Fahrenheit
    if(conversionType == 'C'){
      return inputDegree - 273.15;
    } else if(conversionType == 'F') {
      return (inputDegree - 273.15) * 9 / 5 + 32;
    }
  }

  return inputDegree;
}






