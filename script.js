let userInputStr = "";
let leftSide = undefined;
let rightSide = undefined;
let selectedOperator = undefined;

const mainInput = document.querySelector('#mainInput');

document.body.addEventListener('click', function (event) {
   const { target, currentTarget } = event;

   if (target.value) {
      userInputStr += target.value;
      mainInput.value = userInputStr;
   } else if (target.classList.contains('numbersUp')) {
      selectedOperator = target.id;
      leftSide = Number.parseFloat(userInputStr);

      userInputStr = '';
   } else if (target.id === 'even') {
      rightSide = Number.parseFloat(userInputStr);
      const result = applyOperator(leftSide, rightSide, selectedOperator);
      mainInput.value = result;
   }
   else if (target.id === "reset") {
      userInputStr = '';
      mainInput.value = '';
      rightSide = undefined;
      leftSide = undefined;
      selectedOperator = undefined;

   }

});


function applyOperator(leftSide, rightSide, operator) {
   switch (operator) {
      case 'mulOpertaor':
         return leftSide * rightSide;
         break;

      case 'pluOpertaor':
         return leftSide + rightSide;
         break;

      case 'divOpertaor':
         return leftSide / rightSide;
         break;

      case 'minosOpertaor':
         return leftSide - rightSide;
         break;

   }
}