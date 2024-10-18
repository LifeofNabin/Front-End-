function addUser() {
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const outerDiv = document.createElement("div");
  outerDiv.innerHTML = (name, password);
  document.getElementById("Cred").appendChild(outerDiv);
  
}
