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