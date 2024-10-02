function addUser() {
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const outerDiv = document.createElement("div");
  outerDiv.innerHTML = name;
  document.getElementById("Cred").appendChild(outerDiv);
  
}
