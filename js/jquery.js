<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>


.navtoggle li:not(:last-child) {
  display: none;
}

function menuToggle () {
  var x = document.getElementById('mynavtoggle')
  // Below changes class name based on existing class name, so that the proper version of the menu (shown or hidden) will be displayed.
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}
