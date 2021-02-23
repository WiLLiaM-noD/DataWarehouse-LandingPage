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

// Animation
const allSub = document.querySelectorAll('section');

const showSection = (entries, observer) => {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const subObserver = new IntersectionObserver(showSection, {
  root: null,
  threshold: 0.35,
});

allSub.forEach(sub => {
  subObserver.observe(sub);
  sub.classList.add('section--hidden');
});
