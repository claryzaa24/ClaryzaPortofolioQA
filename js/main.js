//const { CgSpaceBetween } = require("react-icons/cg");

/* ==== Toggle Menu ==== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Saat tombol menu diklik */
navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

/* Saat tombol close diklik */
navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

/*=============== HOME SPLIT TEXT ===============*/
const { animate, splitText, stagger } = anime

const { chars: chars1 } = splitText('.home__profession-1', { chars: true})
const { chars: chars2 } = splitText('.home__profession-2', { chars: true})

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

/*=============== SWIPER PROJECTS ===============*/


/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

console.log(tabs);

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetSelector = tab.dataset.target,
          targetContent = document.querySelector(targetSelector)
    console.log(targetSelector)

    // Disable all content and active tabs
    tabContents.forEach((content) => content.classList.remove('work-active'))
    tabs.forEach((t) => t.classList.remove('work-active'))

    // Active the tab and corresponding content
    tab.classList.add('work-active')
    targetContent.classList.add('work-active')
  })
})


/*=============== SERVICES ACCORDION ===============*/
const servicesButtons = document.querySelectorAll('.services__button');

servicesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const servicesCards = document.querySelectorAll('.services__card');
    const currentCard = button.parentNode;
    const currentInfo = currentCard.querySelector('.services__info');
    const isCardOpen = currentCard.classList.contains('services-open');

    // Tutup semua kartu terlebih dahulu
    servicesCards.forEach(card => {
      card.classList.remove('services-open');
      card.classList.add('services-close');
      const info = card.querySelector('.services__info');
      info.style.height = '0';
    });

    // Buka kartu yang diklik (jika belum terbuka)
    if (!isCardOpen) {
      currentCard.classList.remove('services-close');
      currentCard.classList.add('services-open');
      currentInfo.style.height = currentInfo.scrollHeight + 'px';
    }
  });
});


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/
// duplikat img utk animasi
// Duplicate images to make the animation work
const tracks = document.querySelectorAll('.testimonials__content')

tracks.forEach(track => {
  const cards = [...track.children] // spread to make a static copy

  // Duplicate cards only once
  for (const card of cards) {
    track.appendChild(card.cloneNode(true))
  }
})


/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById('contact-btn'),
      copyEmail = document.getElementById('contact-email').textContent

copyBtn.addEventListener('click', () => {
  // Use the Clipboard API to copy text
  navigator.clipboard.writeText(copyEmail).then(() => {
    copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>'

    // Restore the original text after 2 seconds
    setTimeout(() => {
      copyBtn.innerHTML = 'Copy email <i class="ri-file-copy-line"></i>'
    }, 2000)
  })
})

/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 
// Automatically update the current year of the footer
const textYear = document.getElementById('footer-year'),
      currentYear = new Date().getFullYear()

// Each year it is updated to the current year
textYear.textContent = currentYear


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  // We get the position by scrolling down
  const scrollY = window.scrollY

  sections.forEach(section => {
    const id = section.id, // id of each section
          top = section.offsetTop - 50, // Distance from the top edge
          height = section.offsetHeight, // Element height
          link = document.querySelector('.nav__menu a[href*=' + id + ']') // id nav link

    if (!link) return

    link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
  })
}

window.addEventListener('scroll', scrollActive)


/*=============== CUSTOM CURSOR ===============*/


/* Hide custom cursor on links */


/*=============== SCROLL REVEAL ANIMATION ===============*/
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
  reset: true // Animations repeat when scrolling
})

sr.reveal('.home__image, .projects__container, .work__container, .testimonials__container, .contact__container')
sr.reveal('.home__data', { delay: 900, origin: 'top' })
sr.reveal('.home__info', { delay: 1200, origin: 'top' })
sr.reveal('.home__social, .home__cv', { delay: 1500, origin: 'bottom' })
sr.reveal('.about__data', { origin: 'left' })
sr.reveal('.about__image', { origin: 'right' })
sr.reveal('.services__card', { interval: 100 })

