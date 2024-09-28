function PopulateDiv() {
  const a = document.getElementById("First").value;
  const b = document.getElementById("Second").value;
  const element = document.getElementById("Finalsum");
  element.innerHTML = parseInt(a) + parseInt(b);
}
