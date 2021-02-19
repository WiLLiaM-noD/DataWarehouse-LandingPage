// Nav Link
const navs = document.querySelectorAll('.nav__links');

navs.forEach(nav => {
  nav.addEventListener('click', e => {
    e.preventDefault();
    let childLink = nav.childNodes[1].getAttribute('href');
    // console.log(childLink);
    document.querySelector(childLink).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Date
const dateLabel = document.querySelector('#date');

// Getting Year
const currentYear = new Date().getFullYear();
dateLabel.textContent = currentYear;
