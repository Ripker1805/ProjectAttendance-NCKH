const containerLogin = document.querySelector(".containerLogin");
const login = document.getElementsByClassName("login");

login[0].addEventListener("submit", (event) => {
  console.log("chay");
  event.preventDefault();
  var email = login[0]["email"].value;
  var password = login[0]["password"].value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (response) {
      location.assign("/html/RoleAdmin/admin.html");
    })
    .catch(function (error) {});
});
console.log(this);
