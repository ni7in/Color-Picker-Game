  var numSquare = 6
  var colors = [];
  var pickedColor;
  var squares = document.querySelectorAll(".square");
  var colorDisplay = document.querySelector("#colorDisplay");
  var messageDisplay = document.querySelector("#message");
  var h1 = document.querySelector('h1');
  var resetButton = document.querySelector("#reset");
  var modeButtons = document.querySelectorAll('.mode');

  init();

  function init() {
    setupModeButtons();
    setupSquares();
    reset();
  }

  function setupModeButtons() {
    //mode buttons event listeners.
    for (var i = 0; i < modeButtons.length; i++) {
      modeButtons[i].addEventListener('click', function() {
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        this.classList.add('selected');
        this.textContent === 'Easy' ? numSquare = 3 : numSquare = 6;
        reset();
      });
    }
  }

  function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
      //add click listener to squares
      squares[i].addEventListener('click', function() {
        // grab colors of a single clicked square
        var clickedColor = this.style.background;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
          messageDisplay.textContent = 'Correct';
          h1.style.background = pickedColor;
          resetButton.textContent = 'Play-Again?'
          //loop through the all the squares and set all square's colors to the picked colors
          for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = pickedColor;
          }
        } else {
          this.style.background = "#232323";
          messageDisplay.textContent = 'Try Again';
        }
      });
    }
  }

  function reset() {
    //generate all new colors
    colors = randomColorGenerator(numSquare);
    //pick a new random color from arary
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
      if (colors[i]) {
        squares[i].style.display = "block";
        squares[i].style.background = colors[i];
      } else {
        squares[i].style.display = "none";
      }
      squares[i].style.background = colors[i];
    }
    h1.style.background = 'steelblue';
    resetButton.textContent = 'New Colors';
    //setting the correct/incorrect message to blank, when user hits reset.
    messageDisplay.textContent = '';
  }

  resetButton.addEventListener('click', function() {
    reset();
  });

  function pickColor() {
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
  }

  function randomColorGenerator(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push(individualRandomColor());
    }
    return arr;
  }

  // this function will be generate 3 set of random numbers from 0 - 255 for red, green & blue
  function individualRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
