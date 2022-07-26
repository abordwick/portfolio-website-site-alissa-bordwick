console.log("Hey there, welcome to my portfolio site!")

// Function that opens the menu when it is closed, and closes the menu when it is open
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
