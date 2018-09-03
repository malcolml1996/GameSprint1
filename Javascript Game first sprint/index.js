
// CanvasWidth = 465;
  
  function StartGame()
  {
    window.addEventListener('keydown', moveSelection);
  }

    function moveSelection(evt) {
    switch (evt.keyCode) {
    case 37:
    leftArrowPressed();
    break;
    case 39:
    rightArrowPressed();
    break;
    case 38:
    upArrowPressed();
    break;
    case 40:
    downArrowPressed();
    break;
    }
    };


      function leftArrowPressed() {
      var element = document.getElementByClass("spartan");
      console.log(element);
      element.style.left = parseInt(element.style.left) - 5 + 'px';
      }

      function rightArrowPressed() {
      var element = document.getElementById("player");
      element.style.left = parseInt(element.style.left) + 5 + 'px';

      }

      function upArrowPressed() {
      var element = document.getElementById("player");
      element.style.top = parseInt(element.style.top) - 5 + 'px';
      }

      function downArrowPressed() {
      var element = document.getElementById("player");
      element.style.top = parseInt(element.style.top) + 5 + 'px';
      }
