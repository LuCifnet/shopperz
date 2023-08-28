const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});

document.getElementById("input").addEventListener("keyup", function (event) {
  // Check if the Enter key (key code 13) is pressed
  if (event.keyCode === 13) {
    // Get the input value
    const inputValue = this.value.trim(); // Trim to remove leading/trailing spaces

    // Define the expected word (change this to your desired flag value)
    // Obfuscated expected word
  const expectedWord = "i" + "i" + "m" + "s" + "_" + "c" + "y" + "b" + "e" + "r" + "s" + "e" + "c" + "u" + "r" + "i" + "t" + "y";


    // Check if the input value matches the expected word
    if (inputValue === expectedWord) {
      // If they match, display a congratulatory alert
      alert(
        "Congratulations! You've completed your 5th flag. your flag is {murrrrraaaaa}"
      );
    } else {
      // If they don't match, display an error message
      document.getElementById("flagArea").textContent =
        "Incorrect input. Try again.";
    }

    // Clear the input field
    this.value = "";
  }
});
