const addStudent = document.getElementById("add-Student");
console.log(addStudent);
const homepage = document.getElementById("homepage");
const allStudents = document.getElementById("all-Students");

const iFrame = document.querySelector(".iFrame");

const addTeacher = document.getElementById("add-Teacher");
const listTeacher = document.getElementById("all-Teachers");

let url = "home";
const formLogout = document.querySelector(".formLogout"); // form hien thi log out
const btnLogout = document.querySelector("#btnLogout"); // button hien thi form
const agreeLogout = document.querySelector("#agreeLogout"); // dong y dang xuat

const makeAdmin = document.querySelector(".makeAdmin");
makeAdmin.addEventListener("submit", (event) => {
  event.preventDefault();
  let email = makeAdmin["email"].value;
});
btnLogout.addEventListener("click", (event) => {
  console.log("chay btn");
  formLogout.classList.add("open"); // hien thi forms
  console.log();
});

function closeFormLogout() {
  // dong forms
  formLogout.classList.remove("open");
}
agreeLogout.addEventListener("click", (event) => {
  event.preventDefault();
  firebase
    .auth()
    .signOut()
    .then(() => {
      location.assign("/index.html");
    })
    .catch((error) => {
      // An error happened.
    });
});
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    location.assign("/index.html");
  } else {
    homepage.classList.remove("non_active");
    // ...
  }
});

addStudent.addEventListener("click", (event) => {
  iFrame.src = "./../RoleAdmin/Student/addStudent.html";
});

allStudents.addEventListener("click", (event) => {
  iFrame.src = "./../RoleAdmin/Student/allStudents";
});

addTeacher.addEventListener("click", (event) => {
  iFrame.src = "./../RoleAdmin/Teacher/addTeacher.html";
});
listTeacher.addEventListener("click", (event) => {
  iFrame.src = "./../RoleAdmin/Teacher/allTeacher.html";
});
