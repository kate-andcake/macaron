gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, CustomEase)
CustomEase.create('al_out', 'M0,0 C0,0 0.5,1 1,1')
CustomEase.create('opacity_show', 'M0,0 C0.27,0.01 0.83,1 1,1')
CustomEase.create('slide_show_opacity', 'M0,0 C0.67,0 0.33,1 1,1')
CustomEase.create('slide_move', 'M0,0 C0.12,0.87 0.15,1 1,1')
CustomEase.create('gglease', 'M0,0 C0.5,0.06 0.01,0.99 1,1')
CustomEase.create('ease', 'M0,0 C0.25,0.1 0.25,1 1,1')
CustomEase.create('gg_scale_clip_in', 'M0,0 C0.55,0.75 0.1,1 1,1')
CustomEase.create('gg_scale_out', 'M0,0 C0.4,1 0.92,0 1,1')
CustomEase.create('apl_accordion_in1', 'M0,0 C0.12,0 0.38,0 1,1')
CustomEase.create('apl_accordion_out1', 'M0,0 C0.2,1 0.68,1 1,1')
CustomEase.create('apl_accordion_in2', 'M0,0 C0.2,0 0.68,0 1,1')
CustomEase.create('apl_accordion_out2', 'M0,0 C0.2,1 0.68,1 1,1')
CustomEase.create('al_slide', 'M0,0 C0.26,0.67 0.48,0.91 1,1') 
CustomEase.create('easeOutQuad', 'M0,0 C0.5,1 0.89,1 1,1') 
CustomEase.create('easeOutQuint', 'M0,0 C0.22,1 0.36,1 1,1') 
CustomEase.create('easeOutSine', 'M0,0 C0.61,1 0.88,1 1,1') 
CustomEase.create('easeInOutSine', 'M0,0 C0.37,0 0.63,1 1,1') 

const first_screen_label = document.querySelector('.first_screen__content_title-label');

const first_screen_title = document.querySelector('.first-screen__content_title-text');
const first_screen_text = document.querySelector('.first-screen__content_text');
const first_screen_button = document.querySelector('.first-screen__content_button');

const first_screen_video = document.querySelector('.first-screen__video');
const first_screen_img = document.querySelector('.first-screen__img');
const first_screen_img_background = document.querySelector('.first-screen__img_background');

gsap.set([first_screen_video, first_screen_img, first_screen_img_background], { autoAlpha: 0 });

first_screen_media_tl = gsap.timeline()
.fromTo(first_screen_img_background, { autoAlpha: 1, clipPath: 'inset(100% 0 0 0)', scale: 1.2, }, { clipPath: 'inset(0px 0px 0px 0px)', scale: 1, autoAlpha: 1, duration: 1, ease: 'gg_scale_clip_in'})
.set(first_screen_video, { autoAlpha: 1 })
.fromTo(first_screen_img_background, { autoAlpha: 1, clipPath: 'inset(0px 0px 0px 0px)', scale: 1.2, }, { clipPath: 'inset(0 0 100% 0)', scale: 1, autoAlpha: 1, duration: 1, ease: 'gg_scale_clip_in'})
first_screen_video.play();

// .fromTo(image, { zIndex: 2, scale: 1, }, { zIndex: 2, scale: .9, duration: .72, ease: 'gg_scale_out', immediateRender: false })
//         .fromTo(image, { zIndex: 2, opacity: 1, }, { zIndex: 2, opacity: 0, duration: .72, ease: 'gg_scale_clip_in', immediateRender: false }, '<')
    
// .addPause()
// .addLabel('showFromRightSideStart')
// .fromTo(image, { zIndex: 3, opacity: 1, clipPath: 'inset(0 0 100% 0)', scale: 1.2, }, { zIndex: 3, clipPath: 'inset(0px 0px 0px 0px)', scale: 1, opacity: 1, duration: 1.2, ease: 'gg_scale_clip_in', immediateRender: false })


gsap.set(first_screen_label, { overflow: 'visible' });

first_screen_content_tl =  gsap.timeline()
.from(first_screen_title, { y: '50%', ease: 'easeOutSine', autoAlpha: 0, duration: .5 }, '<.1')
.from(first_screen_text, { y: '25%', ease: 'easeOutSine', autoAlpha: 0, duration: .5 }, '<.1.5')
.from(first_screen_button, { ease: 'easeOutSine', autoAlpha: 0, duration: .5 }, '.')
.from(first_screen_label, { ease: 'al_slide', autoAlpha: 0, duration: .4 }, '>.1')
.to(first_screen_label, { rotate: '-35deg', ease: 'easeOutSine', duration: .2 }, '<')
.to(first_screen_label, { scale: 1.5, ease: 'easeInOutSine', repeat: 1, duration: .3, yoyo: true, }, '<')
.to(first_screen_label, { rotate: '-5deg', ease: 'easeOutSine', duration: .2 }, '<.3');