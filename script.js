(() => {
  const $ = (s, c=document) => c.querySelector(s);
  const $$ = (s, c=document) => [...c.querySelectorAll(s)];
  $('#year').textContent = new Date().getFullYear();

  const menuButton = $('.menu-toggle');
  const mobileMenu = $('.mobile-menu');
  menuButton.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });
  $$('.mobile-menu a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }));

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const loader = $('.loader');
  const progress = $('.progress-bar');

  function basicMotion() {
    loader?.classList.add('loaded');
    if (loader) {
      loader.style.transition = 'opacity .65s ease, visibility .65s ease';
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
    }
    $$('.reveal').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    progress.style.width = '100%';
  }

  if (!reduced && window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({onComplete: () => { if(loader) loader.style.display='none'; }});
    tl.to('.loader-line i', {scaleX:1, duration:.75, ease:'power2.inOut'})
      .to('.loader-mark, .loader p', {opacity:0, y:-8, duration:.25}, '-=.15')
      .to('.loader', {yPercent:-100, duration:.8, ease:'power4.inOut'});
    tl.from('.site-header', {y:-30, opacity:0, duration:.7, ease:'power3.out'}, '-=.3')
      .from('.hero-eyebrow', {opacity:0, y:20, duration:.6}, '-=.35')
      .from('.hero-kicker', {opacity:0, y:18, duration:.6}, '-=.35')
      .from('.hero-title span, .hero-title em', {yPercent:110, opacity:0, stagger:.12, duration:1, ease:'power4.out'}, '-=.3')
      .from('.hero-intro', {opacity:0, y:20, duration:.7}, '-=.5')
      .from('.hero-image-wrap img', {scale:1.28, duration:1.5, ease:'power2.out'}, '-=1.2')
      .from('.hero-stamp', {scale:0, rotation:25, duration:.7, ease:'back.out(1.7)'}, '-=.8');

    $$('.reveal').forEach((el) => {
      gsap.fromTo(el, {y:35, opacity:0}, {
        y:0, opacity:1, duration:.85, ease:'power3.out',
        scrollTrigger:{trigger:el, start:'top 88%', once:true}
      });
    });
    gsap.to('.hero-image-wrap img', {
      yPercent:12, ease:'none',
      scrollTrigger:{trigger:'.hero', start:'top top', end:'bottom top', scrub:true}
    });
    gsap.to('.process-line-fill', {
      width:'100%', ease:'none',
      scrollTrigger:{trigger:'.process', start:'top 70%', end:'bottom 65%', scrub:true}
    });
    gsap.to('.bridge-line b', {
      left:'65%', yoyo:true, repeat:-1, duration:2.2, ease:'sine.inOut'
    });
    ScrollTrigger.create({
      start:0, end:'max',
      onUpdate:self => progress.style.width = `${self.progress*100}%`
    });
    window.addEventListener('load', () => ScrollTrigger.refresh());
  } else {
    basicMotion();
  }

  // Contact destination is intentionally a placeholder until the business email is supplied.
  const contact = $('#contact-email');
  contact?.addEventListener('click', (event) => {
    if (contact.getAttribute('href') === 'mailto:YOUR_EMAIL_ADDRESS') {
      event.preventDefault();
      alert('Please add your preferred business email address to the contact link in index.html before publishing.');
    }
  });
})();