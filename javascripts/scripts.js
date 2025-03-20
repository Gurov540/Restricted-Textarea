const textarea = document.getElementById("textareaInput");
const charCounter = document.getElementById("charCount");
const maxCharCount = 225;

textarea.setAttribute("maxlength", maxCharCount);

function updateCharCount() {
  const currentLength = textarea.value.length;
  charCounter.textContent = `${currentLength} / ${maxCharCount}`;

  if (currentLength >= maxCharCount) {
    textarea.classList.add("char-limit");
    charCounter.classList.add("char-limit");
  } else {
    textarea.classList.remove("char-limit");
    charCounter.classList.remove("char-limit");
  }
}

updateCharCount();

textarea.addEventListener("input", updateCharCount);
