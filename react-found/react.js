function addUser() {
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const Cred = document.getElementById("Cred");
  console.log(name);
  console.log(password);
  Cred.innerHTML =
    Cred.innerHTML +
    `hi
        <div>${name}</div>
        <div>${password}</div>
        `;
}
