

var player = document.getElementsByClassName('spartan')[0];


  function StartGame()
  {
    window.addEventListener('keydown', moveSelection);
    detectCollisions();

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


    function removePX(string){
      return parseInt(string.replace('px', ''));
    }
      function leftArrowPressed() {
      player.style.left = removePX(window.getComputedStyle(player,null).getPropertyValue('left')) - 5 + 'px';
      }

      function rightArrowPressed() {
      player.style.left = removePX(window.getComputedStyle(player,null).getPropertyValue('left')) + 5 + 'px';

      }

      function upArrowPressed() {
      player.style.top = removePX(window.getComputedStyle(player,null).getPropertyValue('top')) - 5 + 'px';
      }

      function downArrowPressed() {
      player.style.top = removePX(window.getComputedStyle(player,null).getPropertyValue('top')) + 5 + 'px';
      }




function detectCollisions() {
  var playerWidth = player.offsetWidth;
	var playerHeight = player.offsetHeight;
	var playerX = player.offsetLeft;
	var playerY = player.offsetTop;
	token1Width = token1.offsetWidth;
	token1Height = token1.offsetHeight;
	tokenX = token1.offsetLeft;
	tokenY = token1.offsetTop;


  if((playerX+playerWidth) > tokenX && playerX < (tokenX+token1Width) && (playerY+token1Height) > tokenY && playerY < (tokenY+token1Height)){
    console.log("Collision detected");
    var token2 = document.getElementById('token1');
    		token2.style.display = "none";


    	}
      window.requestAnimationFrame(detectCollisions);

    }
