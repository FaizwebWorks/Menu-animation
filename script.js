let checkIcon = document.querySelector("#check-icon");
let menuAnim = document.querySelector(".menu-anim");
let outer = document.querySelector(".page");

checkIcon.addEventListener("change", function () {
  if (this.checked) {
    menuAnim.style.right = 0;
  } else {
    menuAnim.style.right = "-50%";
  }
});

let modal = document.querySelector(".sign-in-modal")

let signInBtn = document.querySelector("#signInBtn")
let close = document.querySelector("#close")
let body = document.querySelector("body")

signInBtn.addEventListener("click", function() {
  modal.style.display = "block"
  modal.style.visibility = "visible"
})

close.addEventListener("click", function() {
  modal.style.display = "none"
  modal.style.visibility = "hidden"
})

body.addEventListener("click", function() {
  if(event.target == modal) {
    modal.style.display = "none"
    modal.style.visibility = "hidden"
  }
})