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

let mm = gsap.matchMedia()

mm.add('(max-width: 960px)', () => {
    const body = document.body,
    mobile_overflow = document.querySelector('.mobile_overfolw');

    mobile_overflow.style.overflowX = 'hidden';
    mobile_overflow.style.width = window.innerWidth + 'px';
});

const req_forms = gsap.utils.toArray('.form');

function handle_input(forms) {

    forms.forEach(form => {

        classes = form.classList;
        classes = [classes[0], classes[1]];

        if (classes.includes("tel_form")) {

            _input = form.querySelector(".contsct_input");
            _button = form.querySelector(".send_data");
        
            _input.addEventListener('input', () => {
                _input.value = _input.value.replace(/[^0-9]/g, '');
        
                if (_input.value.length < 3) {
                    _input.value = "380";
                }
    
                if (_input.value.length > 13) {
                    _input.value = _input.value.slice(0, 13);
                }
            });

            _button.addEventListener('click', () => {
                if (_input.value.length >= 12) {
                    // send data
                }
            });
    
        } else if (classes.includes("name_form")) {

            _input = form.querySelector(".contsct_input");
            _button = form.querySelector(".send_data");
    
            _input.addEventListener('input', () => {
                _input.value = _input.value.replace(/[^a-zA-Z0-9\._]/g, '');
            });

            _button.addEventListener('click', () => {
                if (_input.value.length >= 5) {
                    // send data
                }
            });

        }

        gsap.set(form, {display: "none"});

    });
    

};

handle_input(req_forms);

// let macaron_select = false,
// shells_select = false,
// fillings_select = {
//     "strawberrie": false,
//     "mango": false,
//     "baunti": false,
//     "pistachio": false,
// };

const select_macaron = document.querySelector('.select_macaron'),
select_shells = document.querySelector('.select_shells'),
select_strawberrie = document.querySelector('.select_strawberrie'),
select_mango = document.querySelector('.select_mango'),
select_baunti = document.querySelector('.select_baunti'),
select_pistachio = document.querySelector('.select_pistachio'),

maccaron_units = [select_shells,select_strawberrie,select_mango,select_baunti,select_pistachio],
maccaron_filling_units = [select_strawberrie,select_mango,select_baunti,select_pistachio];

// maccaron_bool_units = [shells_select,fillings_select["strawberrie"],fillings_select["mango"],fillings_select["baunti"],fillings_select["pistachio"]]



const button_style = {
    normal: {
        color: "#343538",
        border: "1px solid #343538",
        fontWeight: 400,
        autoAlpha: .5,
        duration: .05,
    },
    active: {
        color: "#1967D2",
        border: "1.5px solid #1967D2",
        fontWeight: 500,
        autoAlpha: 1,
        duration: .05,
    },
    passive_active: {
        color: "#1967D2",
        border: "1px solid #1967D2",
        fontWeight: 400,
        autoAlpha: .8,
        duration: .05,
    },
};

let data = localStorage.getItem('myData'),
data_list = data.split(',');
const macaron_arr = [select_macaron, ...maccaron_units];

if (data_list[0] == "true") {
    gsap.to(select_macaron, button_style["active"]);
    gsap.to(maccaron_units, button_style["passive_active"]);
    macaron_arr.forEach(item => {
        item.setAttribute('my_bool', 'true');
    });
} else if (data_list[1] == "true") {
    gsap.to([select_macaron,select_strawberrie,select_mango,select_baunti,select_pistachio], button_style["normal"]);
    gsap.to(select_shells, button_style["active"]);
    macaron_arr.forEach(item => {
        if (item == select_shells) {
            item.setAttribute('my_bool', 'true');
        } else {
            item.setAttribute('my_bool', 'false');
        }
    });
} else if (data_list[2] == "true") {
    gsap.to([select_macaron,select_shells], button_style["normal"]);
    gsap.to([select_strawberrie,select_mango,select_baunti,select_pistachio], button_style["active"]);
    macaron_arr.forEach(item => {
        if (maccaron_filling_units.includes(item)) {
            item.setAttribute('my_bool', 'true');
        } else {
            item.setAttribute('my_bool', 'false');
        }
    });
}

const update_button_ui = function(macaron_unselect = false) {
    if (macaron_unselect) {
        gsap.to([select_macaron, ...maccaron_units], button_style["normal"])
        macaron_arr.forEach(item => {
                item.setAttribute('my_bool', 'false');
        });
    } else {
        if (select_macaron.getAttribute('my_bool') == "true" || (select_macaron.getAttribute('my_bool') == "false" && select_shells.getAttribute('my_bool') == "true" && select_strawberrie.getAttribute('my_bool') == "true" && select_mango.getAttribute('my_bool') == "true" && select_baunti.getAttribute('my_bool') == "true" && select_pistachio.getAttribute('my_bool') == "true")) {
            gsap.to(select_macaron, button_style["active"])
            gsap.to(maccaron_units, button_style["passive_active"])
            macaron_arr.forEach(item => {
                    item.setAttribute('my_bool', 'true');
            });
        } else {
            maccaron_units.forEach(unit  => {
                if (unit.getAttribute('my_bool') == "true") {
                    gsap.to(unit, button_style["active"])
                    unit.setAttribute('my_bool', 'true');
                } else if (unit.getAttribute('my_bool') == "false") {
                    gsap.to(unit, button_style["normal"])
                    unit.setAttribute('my_bool', 'false');
                }
            })
        }
    }
}


const program_buttons = gsap.utils.toArray('.course_selection_point_button');

program_buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button == select_macaron) {
            if (button.getAttribute('my_bool') == "true") {
                button.setAttribute('my_bool', 'false');
                update_button_ui(true);
            } else if (button.getAttribute('my_bool') == "false") {
                button.setAttribute('my_bool', 'true');
                update_button_ui();
            }
        } else {
            if (button.getAttribute('my_bool') == "true") {
                button.setAttribute('my_bool', 'false');
                update_button_ui();
            } else if (button.getAttribute('my_bool') == "false") {
                button.setAttribute('my_bool', 'true');
                update_button_ui();
            }
        }
    })
});



const get_user_data_description = {
    mobile: "Вкажіть телефон на який надіслати реквізити",
    nickname: "Вкажіть ваш нік у Інстаграмі на який надіслати реквізити",
}

const user_data_select = gsap.utils.toArray('.props_point_button'),
user_data_text = document.querySelector('.contact_title');
let input = gsap.utils.toArray('.contsct_input')


user_data_select.forEach(button => {
    button.addEventListener('click', () => {
        if (button == user_data_select[0]) {
            gsap.to(button, button_style["active"]);
            gsap.to([user_data_select[1], user_data_select[2]], button_style["normal"])

            user_data_text.innerHTML = get_user_data_description["nickname"]
            gsap.set(req_forms, {display: "none"});
            gsap.set('.name_form', {display: "flex", autoAlpha: 0});
            gsap.to('.name_form', {autoAlpha: 1, duration: .2});

        } else if (button == user_data_select[1]) {
            gsap.to(button, button_style["active"]);
            gsap.to([user_data_select[0], user_data_select[2]], button_style["normal"])

            user_data_text.innerHTML = get_user_data_description["mobile"]
            gsap.set(req_forms, {display: "none"});
            gsap.set('.tel_form', {display: "flex", autoAlpha: 0});
            gsap.to('.tel_form', {autoAlpha: 1, duration: .2});

        } else if (button == user_data_select[2]) {
            gsap.to(button, button_style["active"]);
            gsap.to([user_data_select[0], user_data_select[1]], button_style["normal"])

            user_data_text.innerHTML = get_user_data_description["mobile"]
            gsap.set(req_forms, {display: "none"});
            gsap.set('.tel_form', {display: "flex", autoAlpha: 0});
            gsap.to('.tel_form', {autoAlpha: 1, duration: .2});

        }
    })
})
