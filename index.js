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
   
    let clickedBox = document.getElementById('gb-tl');

    console.log(typeof clickedBox)
 //   console.log(clickedBox)

    clickedBox.addEventListener('click' ,({ target }) => {

      const currentRow = target.closest('tr');
      const rowNum = currentRow.dataset.id;

      const currentBox  = target.closest('td')
    //  console.log(currentBox.innerText)

    currentBox.innerText  = this.valueButton
  
   //   console.clear();
      console.log('rowNum: ', rowNum);
    })

    

    
  

  
  }
}

let crossButton = document.getElementById("icon-choice-multiply");
let zeroButton = document.getElementById("icon-choice-zero");
let crossbuttonCom = document.getElementById("icon-choice-multiply-com");
let zerobuttonCom = document.getElementById("icon-choice-zero-com");

console.log(crossButton.innerText);
console.log(zeroButton.innerText);

window.addEventListener("DOMContentLoaded", (event) => {
  if (crossButton.innerText === "X") getdomValue(crossButton.innerText);
  // if (crossbuttonCom.innerText === "X") getdomValue(crossbuttonCom.innerText);
  if (zeroButton.innerText === "0") getdomValue(zeroButton.innerText);
 // if (zerobuttonCom.innerText === "0") getdomValue(zerobuttonCom.innerText);

  function getdomValue(buttonValue) {
    if (buttonValue === "X") {
      const playerOne = new Player(buttonValue);
      crossButton.addEventListener("click", function () {
        playerOne.changeboxValue();
        crossButton.style.backgroundColor = '#00b451';
        zeroButton.style.display = 'none';
        crossbuttonCom.style.display  = 'none'
      });
    } else {
      const playerTwo = new Player(buttonValue);
      zeroButton.addEventListener("click", function () {
        playerTwo.changeboxValue();
        zeroButton.style.backgroundColor = '#955f5f';
        crossButton.style.display = 'none';
        zerobuttonCom.style.display  = 'none'
      });
    }
  }
});
