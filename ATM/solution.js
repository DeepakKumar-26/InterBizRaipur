let inputValue = 5000;
let maxValue = 2000;
let minValue = 100;

if (inputValue) {
  let maximumNotes = inputValue / minValue;
  let minimumNotes = inputValue / maxValue;
  console.log(maximumNotes);
  console.log(minimumNotes);
} else {
  alert("Please enter valid number");
}
