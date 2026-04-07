
const textInput = document.getElementById("text-input");

const charCount = document.getElementById("char-count");


textInput.addEventListener("input", () => {
  let maxLength = 50;

  let text = textInput.value;

  if(text.length > maxLength) {
    text = text.slice(0, maxLength)
    textInput.value = text;
  }

  const currentLength = text.length;

  charCount.textContent = `Character Count: ${currentLength}/50`


  if (currentLength === maxLength) {

    textInput.style.borderColor = "red";
    charCount.style.color = "red";("limit-reached")
  }  else {
    textInput.style.borderColor = "#141414";
    textInput.style.outline = "none";
    charCount.style.color = "#141414"
  }
  })