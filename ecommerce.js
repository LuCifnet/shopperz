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
  
  if (event.keyCode === 13) {

    const inputValue = this.value.trim(); 


   
  const expectedWord = "i" + "i" + "m" + "s" + "_" + "c" + "y" + "b" + "e" + "r" + "s" + "e" + "c" + "u" + "r" + "i" + "t" + "y";


    
    if (inputValue === expectedWord) {

      alert(
        "Congratulations! You've completed your 5th flag. your flag is {9071458253}"
      );
    } else {
      
      document.getElementById("flagArea").textContent =
        "Incorrect input. Try again.";
    }

    
    this.value = "";
  }
});
