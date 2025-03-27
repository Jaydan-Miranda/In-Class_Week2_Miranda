/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Jaydan Miranda
      Date:   03/27/2025

      Filename: project02-01.js
 */
//Step: 3
function FarenheitToCelsius(degree) {
      return (degree - 32)/1.8;
}

//Step: 4
function CelsiusToFahrenheit(degree) {
      return degree*1.8+32;
}
//Step 5:
document.getElementById("cValue").onchange = function () {
      let cDegree = document.getElementById("cValue").value;
      document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree)
      }
//Step 6:
document.getElementById("fValue").onchange = function () {
      let fDegree = document.getElementById("fValue").value;
      document.getElementById("fValue").value = FarenheitToCelsius(fDegree)
      }