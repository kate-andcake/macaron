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

const first_screen_media_tl = gsap.timeline()
.fromTo(first_screen_img_background, { autoAlpha: 1, clipPath: 'inset(100% 0 0 0)', scale: 1.2, }, { clipPath: 'inset(0px 0px 0px 0px)', scale: 1, autoAlpha: 1, duration: 1, ease: 'gglease'})
.set(first_screen_video, { autoAlpha: 1 })
.fromTo(first_screen_img_background, { autoAlpha: 1, clipPath: 'inset(0px 0px 0px 0px)', scale: 1.2, }, { clipPath: 'inset(0 0 100% 0)', scale: 1, autoAlpha: 1, duration: 1, ease: 'gg_scale_clip_in'})
.add(() => {
    first_screen_video.play();
}, "-=1")


gsap.set(first_screen_label, { overflow: 'visible' });

const first_screen_content_tl =  gsap.timeline()
.from(first_screen_title, { y: '50%', ease: 'easeOutSine', autoAlpha: 0, duration: .5 }, '<.1')
.from(first_screen_text, { y: '25%', ease: 'easeOutSine', autoAlpha: 0, duration: .5 }, '<.15')
.from(first_screen_button, { ease: 'easeOutSine', autoAlpha: 0, duration: .5 })
.from(first_screen_label, { ease: 'al_slide', autoAlpha: 0, duration: .4 }, '>.1')
.to(first_screen_label, { rotate: '-35deg', ease: 'easeOutSine', duration: .2 }, '<')
.to(first_screen_label, { scale: 1.5, ease: 'easeInOutSine', repeat: 1, duration: .3, yoyo: true, }, '<')
.to(first_screen_label, { rotate: '-5deg', ease: 'easeOutSine', duration: .2 }, '<.3');



const subtitles = gsap.utils.toArray('.subtitle');

subtitles.forEach(title => {

    tl =  gsap.timeline({
        scrollTrigger: {
            trigger: title,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse',
        }
    })
    .from(title, { y: '50%', ease: 'al_slide', duration: .7 })
    .from(title, { ease: 'none', autoAlpha: 0, duration: .7 }, '<')

});


const description_titles = gsap.utils.toArray('.description_title')

description_titles.forEach(title => {

    tl =  gsap.timeline({
        scrollTrigger: {
            trigger: title,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse',
        }
    })
    .from(title, { y: '50%', ease: 'al_slide', duration: .7 })
    .from(title, { ease: 'none', autoAlpha: 0, duration: .7 }, '<')

});


const small_storys_boxes = gsap.utils.toArray('.small_story_box'),
small_storys = gsap.utils.toArray('.small_story'),
storys_backgrounds = gsap.utils.toArray('.small_story_background');

gsap.set(small_storys, { autoAlpha: 0 });
gsap.set(storys_backgrounds, { autoAlpha: 0 });


const first_small_story = small_storys_boxes[0].querySelector(".small_story");
const first_small_story_background = small_storys_boxes[0].querySelector(".small_story_background");

const first_small_story_tl =  gsap.timeline({
    scrollTrigger: {
        trigger: small_storys_boxes[0],
        start: 'top bottom-=5%',
        toggleActions: 'play none none reverse',
    }
})
.fromTo(first_small_story_background, { autoAlpha: 1, clipPath: 'inset(0 0 100% 0)', scale: 1.2 }, { clipPath: 'inset(0px 0px 0px 0px)', scale: 1, autoAlpha: 1, duration: 1, ease: 'gg_scale_clip_in' })
.set(first_small_story, { autoAlpha: 1 })
.fromTo(first_small_story_background, { autoAlpha: 1, clipPath: 'inset(0 0 0 0)', scale: 1.2 }, { clipPath: 'inset(100% 0 0 0)', scale: 1, autoAlpha: 1, duration: .5, ease: 'gglease' })
.call(() => {
    first_small_story.play()
}, null, ">-.5");


const second_small_story = small_storys_boxes[1].querySelector(".small_story");
const second_small_story_background = small_storys_boxes[1].querySelector(".small_story_background");

const second_small_story_tl =  gsap.timeline({
    scrollTrigger: {
        trigger: small_storys_boxes[1],
        start: 'top bottom-=5%',
        toggleActions: 'play none none reverse',
    }
})
.fromTo(second_small_story_background, { autoAlpha: 1, clipPath: 'inset(0 0 100% 0)', scale: 1.2 }, { clipPath: 'inset(0px 0px 0px 0px)', scale: 1, autoAlpha: 1, duration: 1, ease: 'gg_scale_clip_in' })
.set(second_small_story, { autoAlpha: 1 })
.fromTo(second_small_story_background, { autoAlpha: 1, clipPath: 'inset(0 0 0 0)', scale: 1.2 }, { clipPath: 'inset(100% 0 0 0)', scale: 1, autoAlpha: 1, duration: .5, ease: 'gglease' })
.call(() => {
    second_small_story.play()
}, null, ">-.5");


const third_small_story = small_storys_boxes[2].querySelector(".small_story");
const third_small_story_background = small_storys_boxes[2].querySelector(".small_story_background");

const third_small_story_tl =  gsap.timeline({
    scrollTrigger: {
        trigger: small_storys_boxes[2],
        start: 'top bottom-=5%',
        toggleActions: 'play none none reverse',
    }
})
.fromTo(third_small_story_background, { autoAlpha: 1, clipPath: 'inset(0 0 100% 0)', scale: 1.2 }, { clipPath: 'inset(0px 0px 0px 0px)', scale: 1, autoAlpha: 1, duration: 1, ease: 'gg_scale_clip_in' })
.set(third_small_story, { autoAlpha: 1 })
.fromTo(third_small_story_background, { autoAlpha: 1, clipPath: 'inset(0 0 0 0)', scale: 1.2 }, { clipPath: 'inset(100% 0 0 0)', scale: 1, autoAlpha: 1, duration: .5, ease: 'gglease' })
.call(() => {
    third_small_story.play()
}, null, ">-.5");


const fourth_small_story = small_storys_boxes[3].querySelector(".small_story");
const fourth_small_story_background = small_storys_boxes[3].querySelector(".small_story_background");

const fourth_small_story_tl =  gsap.timeline({
    scrollTrigger: {
        trigger: small_storys_boxes[3],
        start: 'top bottom-=5%',
        toggleActions: 'play none none reverse',
    }
})
.fromTo(fourth_small_story_background, { autoAlpha: 1, clipPath: 'inset(0 0 100% 0)', scale: 1.2 }, { clipPath: 'inset(0px 0px 0px 0px)', scale: 1, autoAlpha: 1, duration: 1, ease: 'gg_scale_clip_in' })
.set(fourth_small_story, { autoAlpha: 1 })
.fromTo(fourth_small_story_background, { autoAlpha: 1, clipPath: 'inset(0 0 0 0)', scale: 1.2 }, { clipPath: 'inset(100% 0 0 0)', scale: 1, autoAlpha: 1, duration: .5, ease: 'gglease' })
.call(() => {
    fourth_small_story.play()
}, null, ">-.5");

// small_storys_boxes.forEach((box, i) => {

//     small_story = box.querySelector(".small_story")
//     story_background = box.querySelector(".small_story_background")

//     tl =  gsap.timeline({
//         scrollTrigger: {
//             trigger: box,
//             start: 'top bottom-=5%',
//             toggleActions: 'play none none reverse',
//         }
//     })
//     .fromTo(story_background, { autoAlpha: 1, clipPath: 'inset(0 0 100% 0)', scale: 1.2 }, { clipPath: 'inset(0px 0px 0px 0px)', scale: 1, autoAlpha: 1, duration: 1, ease: 'gg_scale_clip_in' })
//     .set(small_story, { autoAlpha: 1 })
//     .fromTo(story_background, { autoAlpha: 1, clipPath: 'inset(0 0 0 0)', scale: 1.2 }, { clipPath: 'inset(100% 0 0 0)', scale: 1, autoAlpha: 1, duration: .5, ease: 'gglease' })
//     .call(() => {
//         playFunctionsArray[i]
//     });

// });


const new_beneffits = gsap.utils.toArray('.new_beneffit');

new_beneffits.forEach(beneffit => {

    tl =  gsap.timeline({
        scrollTrigger: {
            trigger: beneffit,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse',
        }
    })
    .from(beneffit, { y: '50%', ease: 'al_slide', duration: .7 })
    .from(beneffit, { ease: 'none', autoAlpha: 0, duration: .7 }, '<')

});


const beneffits = gsap.utils.toArray('.beneffit');

beneffits.forEach(beneffit => {

    tl =  gsap.timeline({
        scrollTrigger: {
            trigger: beneffit,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse',
        }
    })
    .from(beneffit, { y: "25px", ease: 'al_slide', duration: .7 })
    .from(beneffit, { ease: 'none', autoAlpha: 0, duration: .7 }, '<')

});


const large_storys_boxes = gsap.utils.toArray('.large_story_box_container'),
large_storys = gsap.utils.toArray('.large_storie'),
large_storys_backgrounds = gsap.utils.toArray('.large_storie_background')

gsap.set(large_storys, { autoAlpha: 0 });
gsap.set(large_storys_backgrounds, { autoAlpha: 0 });


const first_large_story = large_storys_boxes[0].querySelectorAll(".large_storie");
const first_large_story_background = large_storys_boxes[0].querySelectorAll(".large_storie_background");

gsap.set(first_large_story_background, { autoAlpha: 0 });

const first_large_story_tl =  gsap.timeline({
    scrollTrigger: {
        trigger: first_large_story,
        start: 'top bottom-=5%',
        toggleActions: 'play none none none',
    }
})
.fromTo(first_large_story_background[0], { autoAlpha: 1, clipPath: 'inset(0 0 100% 0)', scale: 1.2 }, { clipPath: 'inset(0px 0px 0px 0px)', scale: 1, autoAlpha: 1, duration: 1, ease: 'gg_scale_clip_in' })
.set(first_large_story[0], { autoAlpha: 1 })
.to(first_large_story_background[0], { clipPath: 'inset(100% 0 0 0)', scale: 1, autoAlpha: 1, duration: .5, ease: 'gglease' })
.call(() => {
    first_large_story[0].play();
}, null, ">-.5")
.to(first_large_story[0], { autoAlpha: 1, duration: Number(first_large_story[0].getAttribute('dur'))})
.fromTo(first_large_story_background[1], { clipPath: 'inset(0 0 100% 0)', scale: 1, autoAlpha: 1, }, { autoAlpha: 1, clipPath: 'inset(0px 0px 0px 0px)', scale: 1.2, ease: 'gglease', duration: .5 })
.set(first_large_story[1], { autoAlpha: 1 })
.to(first_large_story_background[1], { clipPath: 'inset(100% 0 0 0)', scale: 1, autoAlpha: 1, duration: .5, ease: 'gglease' })
.call(() => {
    first_large_story[1].play();
    
})


const second_large_story = large_storys_boxes[1].querySelectorAll(".large_storie");
const second_large_story_background = large_storys_boxes[1].querySelectorAll(".large_storie_background");

const second_large_story_tl =  gsap.timeline({
    scrollTrigger: {
        trigger: second_large_story,
        start: 'top bottom-=5%',
        toggleActions: 'play none none none',
    }
})
.fromTo(second_large_story_background[0], { autoAlpha: 1, clipPath: 'inset(0 0 100% 0)', scale: 1.2 }, { clipPath: 'inset(0px 0px 0px 0px)', scale: 1, autoAlpha: 1, duration: 1, ease: 'gg_scale_clip_in' })
.set(second_large_story[0], { autoAlpha: 1 })
.to(second_large_story_background[0], { clipPath: 'inset(100% 0 0 0)', scale: 1, autoAlpha: 1, duration: .5, ease: 'gglease' })
.call(() => {
    second_large_story[0].play();
}, null, ">-.5")
.to(second_large_story[0], { autoAlpha: 1, duration: Number(second_large_story[0].getAttribute('dur'))})
.fromTo(second_large_story_background[1], { clipPath: 'inset(0 0 100% 0)', scale: 1, autoAlpha: 1, }, { autoAlpha: 1, clipPath: 'inset(0px 0px 0px 0px)', scale: 1.2, ease: 'gglease', duration: .5 })
.set(second_large_story[1], { autoAlpha: 1 })
.to(second_large_story_background[1], { clipPath: 'inset(100% 0 0 0)', scale: 1, autoAlpha: 1, duration: .5, ease: 'gglease' })
.call(() => {
    second_large_story[1].play();
})


// large_storys_boxes.forEach((box, i) => {

//     story = box.querySelectorAll(".large_storie");
//     story_background = box.querySelector(".large_storie_background");

//     tl =  gsap.timeline({
//         scrollTrigger: {
//             trigger: box,
//             start: 'top bottom-=5%',
//             toggleActions: 'play none none none',
//         }
//     })
//     .fromTo(story_background, { autoAlpha: 1, clipPath: 'inset(0 0 100% 0)', scale: 1.2 }, { clipPath: 'inset(0px 0px 0px 0px)', scale: 1, autoAlpha: 1, duration: 1, ease: 'gg_scale_clip_in' })
//     .set(story[0], { autoAlpha: 1 })
//     .fromTo(story_background, { autoAlpha: 1, clipPath: 'inset(0 0 0 0)', scale: 1.2 }, { clipPath: 'inset(100% 0 0 0)', scale: 1, autoAlpha: 1, duration: .5, ease: 'gglease' })
//     .call(() => {
//         playLargeStoriesFunctionsArray[i + box_index];
//     })
//     .fromTo(story_background, { clipPath: 'inset(100% 0 0 0)', scale: 1, autoAlpha: 1, }, { autoAlpha: 1, clipPath: 'inset(0 0 0 0)', scale: 1.2, ease: 'gglease', duration: .5 }, Number(story[0].getAttribute('dur')))
//     .set(story[1], { autoAlpha: 1 })
//     .fromTo(story_background, { autoAlpha: 1, clipPath: 'inset(0 0 0 0)', scale: 1.2 }, { clipPath: 'inset(100% 0 0 0)', scale: 1, autoAlpha: 1, duration: .5, ease: 'gglease' })
//     .call(() => {
//         playLargeStoriesFunctionsArray[i + box_index + 1];
//     })
//     box_index++

// });


const shels_program_media = document.querySelector('.shels_programm_media'),
shels_program_story = shels_program_media.querySelector(".shels_programm_video"),
shels_program_story_background = shels_program_media.querySelector(".shels_programm_background");

const shels_program_story_tl =  gsap.timeline({
    scrollTrigger: {
        trigger: shels_program_media,
        start: 'top bottom-=5%',
        toggleActions: 'play none none reverse',
    }
})
.fromTo(shels_program_story_background, { autoAlpha: 1, clipPath: 'inset(0 0 100% 0)', scale: 1.2 }, { clipPath: 'inset(0px 0px 0px 0px)', scale: 1, autoAlpha: 1, duration: 1, ease: 'gg_scale_clip_in' })
.set(shels_program_story, { autoAlpha: 1 })
.fromTo(shels_program_story_background, { autoAlpha: 1, clipPath: 'inset(0 0 0 0)', scale: 1.2 }, { clipPath: 'inset(100% 0 0 0)', scale: 1, autoAlpha: 1, duration: .5, ease: 'gglease' })
.call(() => {
    shels_program_story.play()
}, null, ">-.5");



const program_beneffits = gsap.utils.toArray('.programm_point');

program_beneffits.forEach(beneffit => {

    tl =  gsap.timeline({
        scrollTrigger: {
            trigger: beneffit,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse',
        }
    })
    .from(beneffit, { y: "25px", ease: 'al_slide', duration: .7 })
    .from(beneffit, { ease: 'none', autoAlpha: 0, duration: .7 }, '<')

});

const shels_program_text = document.querySelector('.shels_programm_text'),
program_buttons = gsap.utils.toArray('.programm_button');


gsap.set(shels_program_text, { overflow: 'visible' });

const shels_program_text_tl =  gsap.timeline({
    scrollTrigger: {
        trigger: shels_program_text,
        start: 'top bottom-=5%',
        toggleActions: 'play none none none',
    }
})
.from(shels_program_text, { ease: 'al_slide', autoAlpha: 0, duration: .4 }, '>.1')
.to(shels_program_text, { rotate: '-10deg', ease: 'easeOutSine', duration: .2 }, '<')
.to(shels_program_text, { scale: 1.3, ease: 'easeInOutSine', repeat: 1, duration: .3, yoyo: true, }, '<')
.to(shels_program_text, { rotate: '-5deg', ease: 'easeOutSine', duration: .2 }, '<.3');

program_buttons.forEach(button => {

    tl =  gsap.timeline({
        scrollTrigger: {
            trigger: button,
            start: 'top bottom-=5%',
            toggleActions: 'play none none reverse',
        }
    })
    .from(button, { y: '50%', ease: 'al_slide', duration: .7 })
    .from(button, { ease: 'none', autoAlpha: 0, duration: .7 }, '<')

});


const fillings_program_text = document.querySelector('.fillings_programm_text')


gsap.set(fillings_program_text, { overflow: 'visible' });

const fillings_program_text_tl =  gsap.timeline({
    scrollTrigger: {
        trigger: fillings_program_text,
        start: 'top bottom-=5%',
        toggleActions: 'play none none none',
    }
})
.from(fillings_program_text, { ease: 'al_slide', autoAlpha: 0, duration: .4 }, '>.1')
.to(fillings_program_text, { rotate: '-10deg', ease: 'easeOutSine', duration: .2 }, '<')
.to(fillings_program_text, { scale: 1.3, ease: 'easeInOutSine', repeat: 1, duration: .3, yoyo: true, }, '<')
.to(fillings_program_text, { rotate: '-5deg', ease: 'easeOutSine', duration: .2 }, '<.3');


const fillings_program_media = document.querySelector('.fillings_programm_media'),
fillings_program_story = fillings_program_media.querySelector(".fillings_programm_video"),
fillings_program_story_background = fillings_program_media.querySelector(".fillings_programm_background");

const fillings_program_story_tl =  gsap.timeline({
    scrollTrigger: {
        trigger: fillings_program_media,
        start: 'top bottom-=5%',
        toggleActions: 'play none none reverse',
    }
})
.fromTo(fillings_program_story_background, { autoAlpha: 1, clipPath: 'inset(0 0 100% 0)', scale: 1.2 }, { clipPath: 'inset(0px 0px 0px 0px)', scale: 1, autoAlpha: 1, duration: 1, ease: 'gg_scale_clip_in' })
.set(fillings_program_story, { autoAlpha: 1 })
.fromTo(fillings_program_story_background, { autoAlpha: 1, clipPath: 'inset(0 0 0 0)', scale: 1.2 }, { clipPath: 'inset(100% 0 0 0)', scale: 1, autoAlpha: 1, duration: .5, ease: 'gglease' })
.call(() => {
    fillings_program_story.play()
}, null, ">-.5");



const macaron_program_text = document.querySelector('.macaron_programm_text')


gsap.set(macaron_program_text, { overflow: 'visible' });

const macaron_program_text_tl =  gsap.timeline({
    scrollTrigger: {
        trigger: macaron_program_text,
        start: 'top bottom-=5%',
        toggleActions: 'play none none none',
    }
})
.from(macaron_program_text, { ease: 'al_slide', autoAlpha: 0, duration: .4 }, '>.1')
.to(macaron_program_text, { rotate: '-10deg', ease: 'easeOutSine', duration: .2 }, '<')
.to(macaron_program_text, { scale: 1.3, ease: 'easeInOutSine', repeat: 1, duration: .3, yoyo: true, }, '<')
.to(macaron_program_text, { rotate: '-5deg', ease: 'easeOutSine', duration: .2 }, '<.3');






document.querySelectorAll(".reviews_list").forEach((container) => {

    const items = container.querySelectorAll(".review"),
    itemsMax = items.length;
    let index = 0;
    const move = 238,
    gap = 24


  if (window.Draggable) {
    Draggable.create(container, {
      type: "x", 
      zIndexBoost: false,
      bounds: {minX: 0, maxX: -((move * 48) + gap)},
      onDragStart: function () {
        dragg_animation(this.getDirection() === "right" ? true : false, this);
      }
    });
  }

  function dragg_animation(bool, event) {
    if (bool) {
        if (index != 0) {
            event.endDrag();
            gsap.to(container, {x: `${(move * (index + 1))}`})
            index++
        }
    } else {
        if (index != itemsMax - 1) {
            event.endDrag();
            gsap.to(container, {x: `${(move * (index - 1))}`})
            index--
        }
    }
  }

//   function dotActive(index) {
//     const dotsAll = dots.querySelectorAll("li");
//     dotsAll.forEach((dot) => {
//       dot.classList.remove("active");
//     });
//     dotsAll[index].classList.add("active");
//   }

//   function slideAnimation(index, moveIn, outIn) {

//     gsap.set(items, { xPercent: 0, scale: 1 });
//     gsap.set(items[moveIn], { autoAlpha: 1 });

//     const tl = gsap.timeline({
//       defaults: {
//         duration: duration
//       },
//       onStart: animationStart,
//       onComplete: animationDone
//     });
//     tl.to(items[index], { xPercent: outIn[0] });
//     tl.from(items[moveIn], { xPercent: outIn[1], zIndex: 100 }, "<");
//     tl.set(items[index], { autoAlpha: 0 }); // Hide moved out slide
//   }
//   function animationStart() {
//     container.classList.add("running");
//   }
//   function animationDone() {
//     autoplay = window.setTimeout(slideLogic, timer);
//     container.classList.remove("running");
//     gsap.set(items, { x: 0 });
//   }

//   function slideLogic(prev, customMoveIn) {
//     window.clearTimeout(autoplay); // disable autoplay
//     let outIn = [-move, move];
//     if (prev) outIn.reverse();
//     let moveIn;
//     // Check if moveIn is passed with the function
//     if (typeof customMoveIn === "undefined") {
//       if (prev) {
//         moveIn = index === 0 ? itemsMax : index - 1;
//       } else {
//         moveIn = index === itemsMax ? 0 : index + 1;
//       }
//     } else {
//       moveIn = customMoveIn;
//     }
//     if (dots) dotActive(moveIn); // Set active dot
//     slideAnimation(index, moveIn, outIn); // Animation function
//     // Changing the next index
//     if (typeof customMoveIn === "undefined") {
//       if (prev) {
//         index === 0 ? (index = itemsMax) : index--;
//       } else {
//         index === itemsMax ? (index = 0) : index++;
//       }
//     } else {
//       index === itemsMax ? (index = 0) : (index = customMoveIn++);
//     }
//   }

});

// //     const cardcartTitleAnimation =  gsap.timeline({
// //         scrollTrigger: {
// //             trigger: cardcartTitle,
// //             start: 'top bottom-=5%',
// //             toggleActions: 'play none none reverse',
// //         }
// //     })
// //     .from(cardcartTitle, { y: (36 + (108 - 36) * ((window.innerWidth - 320) / (960 - 320))) /(cardcartTitle.offsetHeight / 100) + '%', ease: 'al_slide', duration: .6 })
// //     .from(cardcartTitle, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
    
// //     const cardcartPointsAnimation =  gsap.timeline({
// //         scrollTrigger: {
// //             trigger: cardcartPoints,
// //             start: 'top bottom-=5%',
// //             toggleActions: 'play none none reverse',
// //         }
// //     })
// //     .from(cardcartPoints, { y: (36 + (108 - 36) * ((window.innerWidth - 320) / (960 - 320))) /(cardcartPoint.offsetHeight / 100) + '%', ease: 'al_slide', stagger: .05, duration: .6 })
// //     .from(cardcartPoints, { ease: 'none', autoAlpha: 0, stagger: .05, duration: .6 }, '<')
    
// //     const cardCartDisplayAnimation =  gsap.timeline({
// //         scrollTrigger: {
// //             trigger: cardCartDisplay,
// //             start: 'top bottom-=5%',
// //         }
// //     })
// //     .from(cardCartDisplay, { y: '25%', ease: 'al_slide', duration: .6 })
// //     .from(cardCartDisplay, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
    
// //     const changeCountButtonAnimation =  gsap.timeline({
// //         scrollTrigger: {
// //             trigger: changeCountButton,
// //             start: 'top bottom-=5%',
// //         }
// //     })
// //     .from(changeCountButton, { y: '25%', ease: 'al_slide', duration: .6 })
// //     .from(changeCountButton, { ease: 'none', autoAlpha: 0, duration: .6 }, '<')
    
// //     const cardCartButonAnimation =  gsap.timeline({
// //         scrollTrigger: {
// //             trigger: cardCartButon,
// //             start: 'top bottom-=5%',
// //         }
// //     })
// //     .from(cardCartButon, { y: '25%', ease: 'al_slide', delay: .1, duration: .6 })
// //     .from(cardCartButon, { ease: 'none', autoAlpha: 0, delay: .1, duration: .6 }, '<')

// //     const sliderTabsAnimation =  gsap.timeline({
// //         scrollTrigger: {
// //             trigger: sliderTabs,
// //             start: 'top bottom-=5%',
// //             onEnter: () => {
// //                 gsap.delayedCall(1.2, showTextTab);
                
// //             },
// //         }
// //     })
// //     .from(sliderTabs, { y: (36 + (108 - 36) * ((window.innerWidth - 320) / (960 - 320))) /(tabSlider.offsetHeight / 100) + '%', ease: 'al_slide', stagger: .05, duration: .6 })
// //     .from(sliderTabs, { ease: 'none', autoAlpha: 0, stagger: .05, duration: .6 }, '<')
// //     .fromTo(sliderTab, { '--slidertabs_scale': 0 }, { '--slidertabs_scale': 1, ease: 'al_slide', duration: .6 }, '>-.1')
// //     .set(sliderTab, { overflow: 'visible' })

// //     function showTextTab() {
// //         sellSliderToggles[0](sellSliderTab[0])
// //     }


// // gsap.registerPlugin(Observer) 
// //             Observer.create({ 
// //                 target: targets_main_wrapper, 
// //                 type: 'wheel, scroll, touch', 
// //                 lockAxis: true,
// //             })



// gsap.registerEffect({ 
//     name:'draggable_scroll', 
//     effect: (targets, config) => { 
    
//     let targets_array = targets,
//     targets_wrapper = targets[0].parentNode,
//     targets_main_wrapper = targets_wrapper.parentNode,
//     targets_width  = 0,
//     widths = [0],
//     targets_height = targets_array[0].offsetHeight,
//     positions_array = [],
//     position,
//     stagger = config.stagger,
//     scene_duration = config.scene_duration

    
  
//     for( var i = 0; i < targets_array.length; i++) { 
//       let pos_array = [];
//       targets_width += targets_array[i].offsetWidth; 
//       widths.push(targets_width) 
//       positions_array.push(pos_array);
//     } 
  
//     let end_count = config.end_count,
//     en_co_length = config.en_co_length = config.end_count - 1
     
//     targets.forEach((target, index) => {
//       i_true = index;
  
//       for (var i = 0; i < (i_true + 1) && i < (targets_array.length - en_co_length); i++) {
//         position = widths[i_true] - widths[0 + i]
//         positions_array[i_true].push(position)
//       }
//     })

//     let loop = gsap.timeline({  
//       paused: true,  
//       ease: 'none', 
//     }) 
    
//     let shift = targets_array,
//     animation_builder2,
//     animation_builder
  
  
//     shift.forEach((box, index) => {  
//       i_true = index; 
      
//       for ( var i = 0; i < (positions_array[i_true].length - 1); i++ ) { 
//           if( positions_array[i_true].length > 1 ) {
              
//               animation_builder = gsap.fromTo(box, { x: positions_array[i_true][i], }, { x: positions_array[i_true][i + 1], duration: config.scene_duration, ease: 'none', immediateRender: false })  
//               loop.add(animation_builder, i * stagger)

//           }
//       }
  
//       if ( i_true < (targets_array.length - end_count) ) {
//         animation_builder2 = gsap.fromTo(box.querySelector('div'), { scaleX: 1, scaleY: 1, opacity: 1, }, { scaleX: .9, scaleY: .9, opacity: 0, duration: config.scene_duration, ease: 'none', }) 
//         loop.add(animation_builder2, (positions_array[i_true].length - 1) * stagger)
//         }

//     })
// //   console.log( loop.getChildren( true, true, true ) )

//     var proxy = document.createElement('div')

//     let mm = gsap.matchMedia()
//     const shopreviews = document.querySelector('.shopreviews')

//     let touchAxisY = 0

//     mm.add('(max-width: 959px)', () => {

//         gsap.registerPlugin(Observer) 
//         Observer.create({ 
//             target: targets_main_wrapper, 
//             type: 'wheel, scroll, touch', 
//             lockAxis: true,
//         })

//     })

//     mm.add('(min-width: 960px)', () => {

//         gsap.registerPlugin(Observer) 
//         Observer.create({ 
//             target: targets_main_wrapper, 
//             type: 'wheel, scroll', 
//             lockAxis: true,
//             onChangeX: (self) => { 
//                 targets_main_wrapper.scrollTop += self.deltaX
//             }, 
//         })

//     })
  
//     let dur_time = loop.duration()
  
//     let loop_loop = gsap.fromTo(loop, {  
//       totalTime: 0,  
//     }, {  
//       totalTime: dur_time, 
//       duration: 1,   
//       ease: 'none',  
//       paused: true, 
//     }) 
        
//     let playhead = { position: 0 } 
//     let position_wrap = gsap.utils.clamp( 0, loop_loop.duration() ) 
         
//     let scrub = gsap.to(playhead, { 
//       position: 0, 
//       onUpdate: () => { 
//         loop_loop.totalTime(position_wrap(playhead.position)) 
//       }, 
//       paused: true,
//       duration: .5, 
//       ease: 'al_out', 
//     }) 	
      
//     let scrollnd = widths[targets_array.length - end_count]
  
//     let trigger = ScrollTrigger.create({ 
//       scroller: targets_main_wrapper,  
//       start: 0, 
//       end: '+=' + scrollnd,  
//       pin: targets_wrapper, 
//       onUpdate: self => { 
//         let scroll = self.scroll() 
//         if( scroll > scrollnd ) { 
//           wrap( scrollnd ) 
//         } else if( scroll < 0 && self.direction < 0 ) { 
//           wrap( 0 ) 
//         } else { 
//           let new_pos = self.progress * loop_loop.duration() 
//           scrub.vars.position = new_pos 
//           scrub.invalidate().restart() 
//         } 
//       }
//     }) 
      
//     let wrap = (scrollTo) => { 
//       trigger.scroll(scrollTo) 
//       trigger.update() 
//     }  
  
//     snap_point = loop.duration() / scene_duration 
//     let snap = gsap.utils.snap( 1 / snap_point ) 
  
//     let progressToScroll = progress =>   
//     gsap.utils.clamp( 0, trigger.end, gsap.utils.clamp( 0, 1, progress ) * trigger.end ) 
//     let scrollToPosition = position => { 
//       let snap_pos = snap(position) 
//       let progress = snap_pos * loop_loop.duration() 
//       let scroll = progressToScroll(progress) 
//       trigger.scroll(scroll) 
//     } 
//     ScrollTrigger.addEventListener('scrollEnd', () => scrollToPosition( scrub.vars.position )) 
    

//     mm.add('(max-width: 959px)', () => {

//         gsap.set(targets_main_wrapper, { pointerEvents: 'none'})
//         let targets_main_wrapperBox = targets_main_wrapper.parentNode

//         let drggable =  Draggable.create(proxy, { 
//             type: 'x',
//             trigger: targets_main_wrapperBox, 
//             cursor: config.cursor, 
//             activeCursor: 'grabbing',
//             onPress() { 
//                 this.startOffset = scrub.vars.position; 
//             }, 
//             onDrag(self) { 
//                 scrub.vars.position = gsap.utils.clamp(0, 1, (this.startOffset + (this.startX -  this.x ) * 0.001) )
//                 scrub.invalidate().restart()
//             }, 
//             onDragEnd() { 
//                 scrollToPosition( scrub.vars.position )
//             } 
//           })

//     })

//     mm.add('(min-width: 960px)', () => {

//         let drggable =  Draggable.create(proxy, { 
//             type: 'x',
//             trigger: targets_main_wrapper, 
//             cursor: config.cursor, 
//             activeCursor: 'grabbing',
//             onPress() { 
//                 this.startOffset = scrub.vars.position; 
//             }, 
//             onDrag(self) { 
//                 scrub.vars.position = gsap.utils.clamp(0, 1, (this.startOffset + (this.startX -  this.x ) * 0.003) )
//                 scrub.invalidate().restart()
//             }, 
//                 onDragEnd() { 
//                 scrollToPosition( scrub.vars.position )
//             } 
//           })

//     })
    
      
//     let exitTime, exitTime2,
//     curentSlide = 0
    
//     const rightButton = document.querySelector(config.next),
//     leftButton = document.querySelector(config.prev),
//     rightButtonImgBox = rightButton.querySelector('div'),
//     leftButtonImgBox = leftButton.querySelector('div')
  
        
//     const rightButtonTl = gsap.timeline()
//         .fromTo(rightButton, { opacity: .5, scale: .95, pointerEvents: 'none', }, { opacity: 1, scale: 1, duration: .1, ease: 'none', pointerEvents: 'auto', })
//     const leftButtonTl = gsap.timeline()
//         .fromTo(leftButton, { opacity: .5, scale: .95, pointerEvents: 'none', }, { opacity: 1, scale: 1, duration: .1, ease: 'none', pointerEvents: 'auto', })
        
//     const leftButtonBoxTl = gsap.timeline()
//     .to(leftButtonImgBox, { opacity: .9, scale: .85, duration: .035, ease: 'al_out', })
//     exitTime = leftButtonBoxTl.duration()
//     leftButtonBoxTl.to(leftButtonImgBox, { opacity: 1, scale: 1, duration: .035, ease: 'al_out', })
//     .reverse()
    
//     const leftButtonBoxHoverTl = gsap.timeline()
//     .to(leftButtonImgBox, { opacity: .9, scale: .9, duration: .1, ease: 'al_out', })
//     .reverse()
    
    
//     const rightButtonBoxTl = gsap.timeline()
//     .to(rightButtonImgBox, { opacity: .9, scale: .85, duration: .035, ease: 'al_out', })
//     exitTime2 = leftButtonBoxTl.duration()
//     rightButtonBoxTl.to(rightButtonImgBox, { opacity: 1, scale: 1, duration: .035, ease: 'al_out', })
//     .reverse()
    
//     const rightButtonBoxHoverTl = gsap.timeline()
//     .to(rightButtonImgBox, { opacity: .9, scale: .9, duration: .1, ease: 'al_out', })
//     .reverse()
    
//     rightButton.addEventListener('mouseenter', () => rightButtonBoxHoverTl.tweenTo(.1))
//     rightButton.addEventListener('mouseleave', () => rightButtonBoxHoverTl.tweenTo(0))
//     leftButton.addEventListener('mouseenter', () => leftButtonBoxHoverTl.tweenTo(.1))
//     leftButton.addEventListener('mouseleave', () => leftButtonBoxHoverTl.tweenTo(0))
    
//     const next = () => { 
        
//         scrollToPosition(scrub.vars.position + ( 1 / snap_point ))
//         leftButtonTl.tweenTo('.1', { ease: 'al_out' })
        
        
        
//         if ( rightButtonBoxTl.duration() === rightButtonBoxTl.time() ) {
//             rightButtonBoxTl.restart()
//         }
//         if ( rightButtonBoxTl.time() > exitTime ) {
//             rightButtonBoxTl.reverse()
//         }
//         if ( rightButtonBoxTl.time() < exitTime ) {
//             rightButtonBoxTl.play()
//         }
        
//         if ( curentSlide === 0 ) {
//               curentSlide+=1
//         } else {
//             if ( scrub.vars.position > 0 || scrub.vars.position > 2 ) {
//                 curentSlide+=1
//             }
//             if ( scrub.vars.position > 1 - ((1 / targets_array.length) * 2) ) {
//                 rightButtonTl.tweenTo('0', { ease: 'al_out' })
//             }
            
//         }

//     }
//     const prev = () => {
        

//         scrollToPosition(scrub.vars.position - ( 1 / snap_point ))
//         rightButtonTl.tweenTo('.1', { ease: 'al_out' })

        
        
//         if ( leftButtonBoxTl.duration() === leftButtonBoxTl.time() ) {
//             leftButtonBoxTl.restart()
//         }
//         if ( leftButtonBoxTl.time() > exitTime2 ) {
//             leftButtonBoxTl.reverse()
//         }
//         if ( leftButtonBoxTl.time() < exitTime2 ) {
//             leftButtonBoxTl.play()
//         }
        
//         if ( scrub.vars.position > 0 || scrub.vars.position > 2 ) {
//             curentSlide-=1
//         }
        

//         if ( scrub.vars.position < ((1 / targets_array.length) * 2) || scrub.vars.position > 2 ) {
//             leftButtonTl.tweenTo('0', { ease: 'al_out' })
//         }     

//     }
    
//     rightButton.addEventListener('click', next)
//     leftButton.addEventListener('click', prev)
    
    
//     if(targets_main_wrapper.querySelectorAll('video').length > 0) {
        
//       for( i = 0; i < targets_array.length; i++ ) {
//           const box = document.createElement('div')
//           box.classList.add('shadow')
//           box.style.height = targets_height + 'px'
//           box.style.width = widths[1] + 'px'
//           box.style.position = 'absolute'
//           targets_main_wrapper.append(box)
        
//       }
      
//       const shadowBoxes = gsap.utils.toArray('.shadow')
      
//       shadowBoxes.forEach((shadow, i) => {
//             gsap.set(shadow, { top: `+=${i * widths[1]}` })
//       })
      
          
//       shadowBoxes.forEach((element, i) => {
//           if( targets_array[i].querySelectorAll('video').length > 0 ) {
//               ScrollTrigger.create({
//                   scroller: targets_main_wrapper,
//                   trigger: element,
//                   start: `top top+=${widths[1] - 1}`,
//                   end: 'top top-=1',
//                   onEnter: () => {
//                       targets_array[i].querySelector('video').play()
//                   },
//                   onEnterBack: () => {
//                       targets_array[i].querySelector('video').play()
//                   },
//                   onLeave: () => {
//                       targets_array[i].querySelector('video').currentTime = 0
//                       targets_array[i].querySelector('video').pause()
//                   },
//                   onLeaveBack: () => {
//                       targets_array[i].querySelector('video').currentTime = 0
//                       targets_array[i].querySelector('video').pause()
//                   }
//               })
//           }
//       })
      
//     }
   
    
      

    
//     } 
//     })

//     mm.add('(max-width: 959px)', () => {

//     gsap.registerEffect({ 
//         name:'draggable_scroll2', 
//         effect: (targets, config) => { 
        
//         let targets_array = targets,
//         targets_wrapper = targets[0].parentNode,
//         targets_main_wrapper = targets_wrapper.parentNode,
//         targets_height = targets_array[0].offsetHeight,
//         targets_width = targets_array[0].offsetWidth,
//         listWidth = targets_width * targets_array.length,
//         iteration = 0
//         console.log(listWidth)
    
//         gsap.set(targets_array, {xPercent: 100})
//         targets_array.forEach((element, i) => {
//             gsap.set(element.querySelector('div'), {opacity: .3})
//         })
//         const spacing = 0.25,
//         snapTime = gsap.utils.snap(spacing),
//         cards = targets_array,
        
    
//         animateFunc = element => {
//             const tl = gsap.timeline()
//             .fromTo(element, { xPercent: 200, }, { xPercent: -200, duration: 1, ease: 'none', immediateRender: false })  
//             .fromTo(element.querySelector('div'), { opacity: .3, }, { opacity: 1, delay: .25, zIndex: 100, duration: .25, repeat: 1, yoyo: true, ease: 'al_out', immediateRender: false }, '0')  
//             .fromTo(element, {  }, { zIndex: 100, delay: .25, duration: .25, repeat: 1, yoyo: true, ease: 'none'  }, '0') 
//             return tl
//         },
    
//         seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc),
//         playhead = {offset: 0}, 
//         wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()), 
//         scrub = gsap.to(playhead, {
//             offset: 0,
//             onUpdate() {
//                 seamlessLoop.time(wrapTime(playhead.offset))
//             },
//             duration: 0.25,
    
//             paused: true
//         }),
//         trigger = ScrollTrigger.create({
//             scroller: targets_main_wrapper, 
//             start: 0,
//             onUpdate(self) {
//                 let scroll = self.scroll()
//                 if (scroll > self.end - 1) {
//                     wrap(1, 1)
//                 } else if (scroll < 1 && self.direction < 0) {
//                     wrap(-1, self.end - 1)
//                 } else {
//                     scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration()
//                     scrub.invalidate().restart()
//                 }
//             },
//             end: `+=${ listWidth }`, 
//             pin: targets_wrapper,
//         }),
    
//         progressToScroll = progress => gsap.utils.clamp(1, trigger.end - 1, gsap.utils.wrap(0, 1, progress) * trigger.end),
//         wrap = (iterationDelta, scrollTo) => {
//             iteration += iterationDelta
//             trigger.scroll(scrollTo)
//             trigger.update() 
//         }
    
//         function scrollToOffset(offset) { 
//             let snappedTime = snapTime(offset),
//                 progress = (snappedTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration(),
//                 scroll = progressToScroll(progress)
//             if (progress >= 1 || progress < 0) {
//                 return wrap(Math.floor(progress), scroll)
//             }
//             trigger.scroll(scroll)
//         }
    
        
//         document.querySelector(config.next).addEventListener("click", () => scrollToOffset(scrub.vars.offset + spacing))
//         document.querySelector(config.prev).addEventListener("click", () => scrollToOffset(scrub.vars.offset - spacing))
    
//         function buildSeamlessLoop(items, spacing, animateFunc) {
//             let rawSequence = gsap.timeline({paused: true}), 
//                 seamlessLoop = gsap.timeline({ 
//                     paused: true,
//                     repeat: -1, 
//                     onRepeat() { 
//                         this._time === this._dur && (this._tTime += this._dur - 0.01)
//                     },
//               onReverseComplete() {
//                 this.totalTime(this.rawTime() + this.duration() * 100)
//               }
//                 }),
    
//                 cycleDuration = spacing * items.length,
//                 dur
//                 items.concat(items).concat(items).forEach((item, i) => {
//                     let anim = animateFunc(items[i % items.length])
//                     rawSequence.add(anim, i * spacing)
//                     dur || (dur = anim.duration())
//                 })
            
//                 seamlessLoop.fromTo(rawSequence, {
//                     time: cycleDuration + dur / 2
//                 }, {
//                     time: "+=" + cycleDuration,
//                     duration: cycleDuration,
//                     ease: "none"
//                 })
//                 return seamlessLoop
//         }
    
//         gsap.set(targets_main_wrapper, { pointerEvents: 'none'})
//         const targets_main_wrapperBox = targets_main_wrapper.parentNode

//         console.log(targets_main_wrapperBox)

//         var proxyDiv = document.createElement('div')
    
//         Draggable.create(proxyDiv, {
//             type: "x",
//             trigger: targets_main_wrapperBox,
//             cursor: config.cursor, 
//             activeCursor: 'grabbing',
//             onPress() {
//               this.startOffset = scrub.vars.offset
//             },
//             onDrag() {
//               scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.003  
//               scrub.invalidate().restart() 
//             },
//             onDragEnd() {
//               scrollToOffset(scrub.vars.offset)
//             }
//         })

//         for( i = 0; i < targets_array.length; i++ ) {
//             const box = document.createElement('div')
//             box.classList.add('shadowMk')
//             box.style.height = targets_height + 'px'
//             box.style.width = targets_width + 'px'
//             box.style.position = 'absolute'
//             targets_main_wrapper.append(box)
          
//         }
        
//         const shadowBoxes = gsap.utils.toArray('.shadowMk'),
//         points = gsap.utils.toArray(config.points),
//         pointsAnimationsArray = points.map(createPointsTl)

//         function createPointsTl(element) {
//             tl = gsap.timeline()
//             .to(element, { opacity: .5, duration: .1, ease: 'al_out' })
//             .reverse()

//             return tl
//         }
        
//         shadowBoxes.forEach((shadow, i) => {
//               gsap.set(shadow, { top: `+=${i * targets_width}` })
//         })
        
            
//         shadowBoxes.forEach((element, i) => {
//             ScrollTrigger.create({
//                 scroller: targets_main_wrapper,
//                 trigger: element,
//                 start: `top top+=2`,
//                 end: `+=${ targets_width - 1 }`,
//                 onEnter: () => {
//                     pointsAnimationsArray[i].tweenTo(.1)
//                 },
//                 onEnterBack: () => {
//                     pointsAnimationsArray[i].tweenTo(.1)
//                 },
//                 onLeave: () => {
//                     pointsAnimationsArray[i].tweenTo(0)
//                 },
//                 onLeaveBack: () => {
//                     pointsAnimationsArray[i].tweenTo(0)
//                 }
//             })
//         })

        
//         } 
//     })

// })