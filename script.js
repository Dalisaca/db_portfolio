function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}
/*SCROLL ANIMATION*/
function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

/*EMAILJS*/
function sendEmail() {
  const params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  emailjs
    .send('service_t819w6j', 'template_o5x09bf', params)
    .then((response) => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    })
    .catch((error) => {
      console.log('Email sending failed:', error);
    });
}

/*ENTER SUBMIT*/
// var input = document.querySelector('.form-group');

// input.addEventListener('keypress', function (event) {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//     document.querySelector('.submit-btn').click();
//   }
// });

/*COURSOR CIRCLE*/
document.addEventListener('DOMContentLoaded', function () {
  const cursorCircle = document.querySelector('.cursor-circle');

  document.addEventListener('mousemove', function (event) {
    // Update the position of the circle to match the cursor position
    cursorCircle.style.left =
      event.clientX - cursorCircle.offsetWidth / 1 + 'px';
    cursorCircle.style.top =
      event.clientY - cursorCircle.offsetHeight / 1 + 'px';
  });

  // Show the circle when the mouse is moved
  document.addEventListener('mouseover', function () {
    cursorCircle.style.display = 'block';
  });

  // Hide the circle when the mouse is not moving
  document.addEventListener('mouseout', function () {
    cursorCircle.style.display = 'none';
  });

  // Hide the circle when the mouse hovers over the map container
  mapContainer.addEventListener('mouseover', function () {
    cursorCircle.style.display = 'none';
  });
});
