/*
 * Main Js File
 */

class Player {
  valueButton;

  constructor(btnValue) {
    this.valueButton = btnValue;
  }

  changeboxValue() {
    console.log(`Value ${this.valueButton}`);
    let selectedBox = document.querySelector(".first-row td");
    console.log(typeof selectedBox);
    console.log(selectedBox);
    selectedBox.innerText = this.valueButton;

    if (!selectedBox.innerText) {
      let selectedBox = document.querySelector(".first-row td");
    }
  }
}

let crossButton = document.getElementById("icon-choice-multiply");
let zeroButton = document.getElementById("icon-choice-zero");

console.log(crossButton.innerText);
console.log(zeroButton.innerText);

window.addEventListener("DOMContentLoaded", (event) => {
  if (crossButton.innerText === "X") getdomValue(crossButton.innerText);
  if (zeroButton.innerText === "0") getdomValue(zeroButton.innerText);

  function getdomValue(buttonValue) {
    if (buttonValue === "X") {
      const playerOne = new Player(buttonValue);
      crossButton.addEventListener("click", function () {
        playerOne.changeboxValue();
      });
    } else {
      const playerTwo = new Player(buttonValue);
      zeroButton.addEventListener("click", function () {
        playerTwo.changeboxValue();
      });
    }
  }
});
