let mm = gsap.matchMedia()

mm.add('(max-width: 960px)', () => {
    const body = document.body,
    mobile_overflow = document.querySelector('.mobile_overfolw');

    mobile_overflow.style.overflowX = 'hidden';
    mobile_overflow.style.width = window.innerWidth + 'px';
    mobile_overflow.style.height = window.innerHeight + 'px';
});