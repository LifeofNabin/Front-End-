function populateData() {
  const principal = document.getElementById("P").value;
  const Rate = document.getElementById("I").value;
  const Time = document.getElementById("Y").value;
  const element = document.getElementById("finalCal");
  element.innerHTML =
    parseInt(principal) * parseFloat(Rate) * parseFloat(Time) * 0.01;
}
