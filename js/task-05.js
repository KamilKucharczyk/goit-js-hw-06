const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (event) => {
  const name = nameInput.value;
  nameOutput.textContent = name ? name : "Anonymous";
});
