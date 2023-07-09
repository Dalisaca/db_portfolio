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
