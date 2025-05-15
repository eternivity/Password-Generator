const gen = document.querySelector('.generate');
const input = document.querySelector("input");
const copy = document.querySelector(".fa-copy");
const copyAlert = document.querySelector(".copyAlert");

copy.addEventListener("click", copyPass);

function copyPass() {
  if (input.value) {
    input.select();
    navigator.clipboard.writeText(input.value);
    copyAlert.classList.remove("active");
    setTimeout(() => {
      copyAlert.classList.add("active");
    }, 1500);
  }
}

gen.addEventListener("click", generatePassword);

function generatePassword() {
  const passLength = 14;
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyz@#$%&*_!-.ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";
  for (let index = 0; index < passLength; index++) {
    const random = Math.floor(Math.random() * characters.length);
    password += characters[random];
  }

  input.value = password;
}
