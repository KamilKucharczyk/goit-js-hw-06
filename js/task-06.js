const validationInput = document.getElementById("validation-input");
const requiredLength = parseInt(validationInput.dataset.length);

validationInput.addEventListener("blur", function () {
  const inputValue = validationInput.value;
  const isValid = validationInput.length === requiredLength;

  if (isValid) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
