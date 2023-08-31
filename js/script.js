const nameSpan = document.getElementById("name");
const name = prompt("Please enter your name:");
if (name) {
  nameSpan.textContent = name;
}
const date = new Date();
document.getElementById("date").innerHTML = date;
document.getElementById("submitForm").addEventListener("click", send_message);
function send_message() {
  var nilai_username = document.getElementById("username").value;
  var nilai_birthdate = document.getElementById("birthdate").value;
  var nilai_gender = document.getElementById("gender").value;
  var nilai_message = document.getElementById("message").value;
  document.getElementById("hasil_username").innerHTML = nilai_username;
  document.getElementById("hasil_birthdate").innerHTML = nilai_birthdate;
  document.getElementById("hasil_gender").innerHTML = nilai_gender;
  document.getElementById("hasil_message").innerHTML = nilai_message;
}
