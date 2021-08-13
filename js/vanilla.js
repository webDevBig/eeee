var open_menu = document.querySelectorAll('.menu');
[].forEach.call(open_menu, function (el) {
    el.onclick = function (e) {
        document.querySelector(".mobile_bg").classList.toggle('mobile_bg_menu_open');

        document.querySelector(".mobile_bg").style.overflow = 'hiden'
        document.querySelector(".content").classList.toggle('content_right')
        document.querySelector("body").classList.toggle('body')
    }
});
var close_menu = document.querySelectorAll('.mobile_bg');
[].forEach.call(close_menu, function (el) {
    el.onclick = function (e) {
        document.querySelector(".mobile_bg").classList.toggle('mobile_bg_menu_open');

        document.querySelector(".mobile_bg").style.overflow = 'hiden'
        document.querySelector(".content").classList.toggle('content_right')
        document.querySelector("body").classList.toggle('body')
    }
});
var open_sub_menu = document.querySelectorAll('.open_sub_menu');
[].forEach.call(open_sub_menu, function (el) {
    el.onclick = function (e) {
        el.parentElement.querySelector('.sub_menu').classList.toggle('sub_menu_open')
        el.classList.toggle('arrow_transform')
    }
});



var open_mon_compre = document.querySelectorAll('.open_mon_compre');
[].forEach.call(open_mon_compre, function (el) {
    el.onclick = function (e) {
        document.querySelector('#tab2_mon_compte').classList.toggle('active');
    }
});



const list = document.querySelectorAll('.format')
list.forEach(item => {
    item.addEventListener('click', (e) => {
        list.forEach(el => {
            el.classList.remove('active');
        });
        item.classList.add('active')
    })
})

const format1 = document.querySelectorAll('.format1')
var img_src = document.querySelectorAll('.number_icon')



format1.forEach(item => {
    item.addEventListener('click', (e) => {
        format1.forEach(el => {
            for (var x = 0; x < img_src.length; x++) {
                img_src[x].src = '../img/number_format1.png'
                //                circle_valid[x].style.backgroundColor = '#78D358'

            }

        });
    })
})

const format2 = document.querySelectorAll('.format2')
format2.forEach(item => {
    item.addEventListener('click', (e) => {
        format2.forEach(el => {
            for (var x = 0; x < img_src.length; x++) {
                img_src[x].src = '../img/number_format2.svg'
                //                circle_valid[x].style.backgroundColor = '#E0E0E0'
            }
        });
    })
})



const back_color = document.querySelectorAll('#color_slider_slide2 .slide_circle')
const background_color = document.querySelectorAll('#color_slider_slide2 .border_box')

var circle_valid1 = document.querySelector('.circle_valid1')
const color_box = document.querySelector('.color_box')
back_color.forEach(item => {
    item.addEventListener('click', (e) => {

        back_color.forEach(el => {
            color_box.style.background = el.querySelector('.border_box').style.background;
            el.classList.remove('border');
        });
        color_box.style.background = item.querySelector('.border_box').style.background;
        item.classList.add('border')
        if (color_box.style.background == 'black') {
            circle_valid1.style.backgroundColor = '#78D358'
        } else {
            circle_valid1.style.backgroundColor = '#E0E0E0'
        }

    })
})

const back_color2 = document.querySelectorAll('#color_slider1_slide4 .slide_circle')
const color_box2 = document.querySelector('.color_box1_slide4')
var circle_valid2 = document.querySelector('.circle_valid2')
back_color2.forEach(item => {
    item.addEventListener('click', (e) => {
        back_color2.forEach(el => {
            color_box2.style.background = el.querySelector('.border_box').style.background;
            el.classList.remove('border');
        });
        color_box2.style.background = item.querySelector('.border_box').style.background;
        item.classList.add('border')

        if (color_box2.style.background == 'rgb(45, 156, 219)') {
            circle_valid2.style.backgroundColor = '#78D358'
            circle_valid2.classList.add('green')
        } else {
            circle_valid2.style.backgroundColor = '#E0E0E0'
            circle_valid2.classList.remove('green')
        }


        if (circle_valid2.classList.contains('green') && circle_valid2.classList.contains('green2')) {
            circle_valid2.style.backgroundColor = '#78D358'
        } else {
            circle_valid2.style.backgroundColor = '#E0E0E0'
        }

        if (circle_valid2.classList.contains('green')) {
            circle_valid2.style.backgroundColor = '#78D358'
        } else {
            circle_valid2.style.backgroundColor = '#E0E0E0'
        }
    })
})

const back_color3 = document.querySelectorAll('#color_slider2_slide4 .slide_circle')
const color_box3 = document.querySelector('.color_box2_slide4')
back_color3.forEach(item => {
    item.addEventListener('click', (e) => {
        back_color3.forEach(el => {
            color_box3.style.background = el.querySelector('.border_box').style.background;
            el.classList.remove('border');
        });
        color_box3.style.background = item.querySelector('.border_box').style.background;
        item.classList.add('border')

        if (color_box3.style.background == 'white') {
            circle_valid2.style.backgroundColor = '#78D358'
            circle_valid2.classList.add('green2')
        } else {
            circle_valid2.style.backgroundColor = '#E0E0E0'
            circle_valid2.classList.remove('green2')
        }


        if (circle_valid2.classList.contains('green2')) {
            circle_valid2.style.backgroundColor = '#78D358'
        } else {
            circle_valid2.style.backgroundColor = '#E0E0E0'
        }

    })
})

var circle_valid3 = document.querySelector('.circle_valid3')
const back_color4 = document.querySelectorAll('#color_slider1_slide5 .slide_circle')
const color_box4 = document.querySelector('.color_box1_slide5')
back_color4.forEach(item => {
    item.addEventListener('click', (e) => {
        back_color4.forEach(el => {
            color_box4.style.background = el.querySelector('.border_box').style.background;
            el.classList.remove('border');
        });
        color_box4.style.background = item.querySelector('.border_box').style.background;
        item.classList.add('border')
        if (color_box4.style.background == 'rgb(45, 156, 219)') {
            circle_valid3.classList.add('green')
        } else {
            circle_valid3.classList.remove('green')
        }
        if (circle_valid3.classList.contains('green')) {
            circle_valid3.style.backgroundColor = '#78D358'
        } else {
            circle_valid3.style.backgroundColor = '#E0E0E0'
        }
    })
})

const back_color5 = document.querySelectorAll('#color_slider2_slide5 .slide_circle')
const color_box5 = document.querySelector('.color_box2_slide5')
back_color5.forEach(item => {
    item.addEventListener('click', (e) => {
        back_color5.forEach(el => {
            color_box5.style.background = el.querySelector('.border_box').style.background;
            el.classList.remove('border');
        });
        color_box5.style.background = item.querySelector('.border_box').style.background;
        item.classList.add('border')

        if (color_box5.style.background == 'white') {
            circle_valid3.classList.add('green2')
        } else {
            circle_valid3.classList.remove('green2')
        }
        if (circle_valid3.classList.contains('green2')) {
            circle_valid3.style.backgroundColor = '#78D358'
        } else {
            circle_valid3.style.backgroundColor = '#E0E0E0'
        }
    })
})

const back_color6 = document.querySelectorAll('#color_slider1_slide7 .slide_circle')
const color_box6 = document.querySelector('.color_box1_slide7')
back_color6.forEach(item => {
    item.addEventListener('click', (e) => {
        back_color6.forEach(el => {
            color_box6.style.background = el.querySelector('.border_box').style.background;
            el.classList.remove('border');
        });
        color_box6.style.background = item.querySelector('.border_box').style.background;
        item.classList.add('border')
    })
})

const back_color7 = document.querySelectorAll('#color_slider2_slide7 .slide_circle')
const color_box7 = document.querySelector('.color_box2_slide7')
back_color7.forEach(item => {
    item.addEventListener('click', (e) => {
        back_color7.forEach(el => {
            color_box7.style.background = el.querySelector('.border_box').style.background;
            el.classList.remove('border');
        });
        color_box7.style.background = item.querySelector('.border_box').style.background;
        item.classList.add('border')
    })
})


var circle_valid4 = document.querySelector('.circle_valid4')
const back_color8 = document.querySelectorAll('#color_slider_slide8 .slide_circle')
const color_box8 = document.querySelector('.color_box_slide8')
back_color8.forEach(item => {
    item.addEventListener('click', (e) => {
        back_color8.forEach(el => {
            color_box8.style.background = el.querySelector('.border_box').style.background;
            el.classList.remove('border');
        });
        color_box8.style.background = item.querySelector('.border_box').style.background;
        item.classList.add('border')

        if (color_box8.style.background == 'white') {
            circle_valid4.style.backgroundColor = '#78D358'
            circle_valid4.classList.add('green')
        } else {
            circle_valid4.style.backgroundColor = '#E0E0E0'
            circle_valid4.classList.remove('green')
        }
    })
})


const defaultSelectInput = document.querySelector('#default-select');
const defaultSelectInput1 = document.querySelector('#default-select1');
const defaultSelectInput2 = document.querySelector('#default-select2');
const defaultSelectInput3 = document.querySelector('#default-select3');
const defaultSelectInput4 = document.querySelector('#default-select4');
createCustomSelect(defaultSelectInput);
createCustomSelect1(defaultSelectInput1);
createCustomSelect1(defaultSelectInput2);
createCustomSelectEditor(defaultSelectInput3);
createCustomSelect2(defaultSelectInput4);



function createCustomSelect(defaultSelect) {

    const customSelect_main = document.createElement('div');
    customSelect_main.classList.add('customSelect_main');


    const customSelect = document.createElement('div');
    const text = document.createElement('p');

    const search = document.createElement("input");
    search.type = "search";
    search.placeholder = "Rechercher...";
    search.classList.add('search');

    customSelect.appendChild(text);

    //    customSelect.classList.add('custom-select-style');
    customSelect.classList.add('open_select_list');

    // Insert custom select before button
    defaultSelect.parentElement.insertBefore(customSelect, defaultSelect.parentElement[0]);

    // customSelect_main.appendChild(customSelect);
    // Custom List 
    // ===========

    const selectList = document.createElement('div');

    selectList.classList.add('font_list');


    //    selectList.appendChild(search);
    customSelect.appendChild(customSelect_main);

    customSelect_main.appendChild(search);
    customSelect_main.appendChild(selectList);


    // Custom list elements 
    // ====================

    // Load default select options and save into array
    const elementsArray = Array.from(defaultSelect.children);

    // For every value of the array:
    elementsArray.forEach((el) => {

        const customElement = document.createElement('div');
        const customElement_clm1 = document.createElement('div');
        const customElement_clm2 = document.createElement('div');
        const circle = document.createElement('div');

        customElement.classList.add('custom-list-element');
        customElement_clm1.classList.add('clm');
        customElement_clm2.classList.add('clm_font');

        circle.classList.add('circle');

        customElement.appendChild(customElement_clm1);



        customElement.appendChild(customElement_clm2);
        customElement_clm2.appendChild(circle);

        customElement_clm1.innerText = el.innerText;
        customElement_clm2.innerText = '8663 SX 61';
        customElement_clm2.style.fontFamily = "'" + el.value + "', sans-serif";
        customElement.value = el.value;

        // When custom select option is clicked: 
        customElement.addEventListener('click', () => {
            text.innerText = el.innerText;
            defaultSelect.value = customElement.value.toString();


            selectList.classList.toggle('custom-list-visible');
            customSelect.classList.toggle('select_open');
            customSelect_main.classList.toggle('customSelect_main_visible');
        });

        selectList.appendChild(customElement);

    });

    customSelect.addEventListener('click', () => {
        selectList.classList.toggle('custom-list-visible');
        customSelect.classList.toggle('select_open');
        customSelect_main.classList.toggle('customSelect_main_visible');
    });

    customSelect_main.addEventListener('click', () => {
        selectList.classList.toggle('custom-list-visible');
        customSelect.classList.toggle('select_open');
        customSelect_main.classList.toggle('customSelect_main_visible');
    });

}

function createCustomSelect1(defaultSelect) {

    const customSelect = document.createElement('div');
    const text = document.createElement('p');

    customSelect.appendChild(text);

    text.classList.add('text_value')

    //    customSelect.classList.add('custom-select-style');
    customSelect.classList.add('open_select_list');

    // Insert custom select before button
    defaultSelect.parentElement.insertBefore(customSelect, defaultSelect.parentElement[0]);

    // Custom List 
    // ===========

    const selectList = document.createElement('div');

    //    selectList.classList.add('custom-list');
    selectList.classList.add('list');

    customSelect.appendChild(selectList);

    // Custom list elements 
    // ====================

    // Load default select options and save into array
    const elementsArray = Array.from(defaultSelect.children);

    // For every value of the array:
    elementsArray.forEach((el) => {

        const customElement = document.createElement('div');

        customElement.classList.add('custom-list-element');

        customElement.innerText = el.innerText;
        customElement.value = el.value;


        // When custom select option is clicked: 
        customElement.addEventListener('click', () => {
            text.innerText = el.innerText;
            defaultSelect.value = customElement.value.toString();
        });

        selectList.appendChild(customElement);

    });

    customSelect.addEventListener('click', () => {
        selectList.classList.toggle('custom-list-visible');
        customSelect.classList.toggle('select_open');
    });

}

function createCustomSelect2(defaultSelect) {

    const customSelect = document.createElement('div');
    const text = document.createElement('p');

    customSelect.appendChild(text);

    text.innerText = '52 x 11cm'

    //    customSelect.classList.add('custom-select-style');
    customSelect.classList.add('open_select_list');

    // Insert custom select before button
    defaultSelect.parentElement.insertBefore(customSelect, defaultSelect.parentElement[0]);

    // Custom List 
    // ===========

    const selectList = document.createElement('div');

    //    selectList.classList.add('custom-list');
    selectList.classList.add('list');

    customSelect.appendChild(selectList);

    // Custom list elements 
    // ====================

    // Load default select options and save into array
    const elementsArray = Array.from(defaultSelect.children);

    // For every value of the array:
    elementsArray.forEach((el) => {

        const customElement = document.createElement('div');

        customElement.classList.add('custom-list-element');

        customElement.innerText = el.innerText;
        customElement.value = el.value;


        // When custom select option is clicked: 
        customElement.addEventListener('click', () => {
            text.innerText = el.innerText;
            defaultSelect.value = customElement.value.toString();
        });

        selectList.appendChild(customElement);

    });

    customSelect.addEventListener('click', () => {
        selectList.classList.toggle('custom-list-visible');
        customSelect.classList.toggle('select_open');
    });

}



function createCustomSelectEditor(defaultSelect) {

    const customSelect = document.createElement('div');
    const text = document.createElement('p');

    const textArea = document.querySelector('.textarea');
    customSelect.appendChild(text);

    text.classList.add('text_value')

    customSelect.classList.add('open_select_list');

    // Insert custom select before button
    defaultSelect.parentElement.insertBefore(customSelect, defaultSelect.parentElement[0]);

    // Custom List 
    // ===========

    const selectList = document.createElement('div');

    //    selectList.classList.add('custom-list');
    selectList.classList.add('list');

    customSelect.appendChild(selectList);

    // Custom list elements 
    // ====================

    // Load default select options and save into array
    const elementsArray = Array.from(defaultSelect.children);

    // For every value of the array:
    elementsArray.forEach((el) => {

        const customElement = document.createElement('div');

        customElement.classList.add('custom-list-element');



        customElement.innerText = el.innerText;
        customElement.value = el.value;

        // When custom select option is clicked: 
        customElement.addEventListener('click', () => {
            text.innerText = el.innerText;
            defaultSelect.value = customElement.value.toString();
            textArea.style.fontFamily = "'" + el.value + "', sans-serif";
        });

        selectList.appendChild(customElement);

    });

    customSelect.addEventListener('click', () => {
        selectList.classList.toggle('custom-list-visible');
        customSelect.classList.toggle('select_open');
    });


}

const textArea = document.querySelector('.textarea');
var underline_style = document.querySelectorAll('.underline_style');
[].forEach.call(underline_style, function (el) {
    el.onclick = function (e) {
        textArea.classList.toggle('underline')
        //        textArea.style.textDecoration = ' underline'
    }
});


var info_mess = document.querySelectorAll('.info_mess');
[].forEach.call(info_mess, function (el) {
    el.onclick = function (e) {
        el.querySelector('.check').classList.toggle('active');
        el.classList.toggle('active');
    }
});

var check_rivets = document.querySelectorAll('.check_rivets');
[].forEach.call(check_rivets, function (el) {
    el.onclick = function (e) {
        document.querySelector(".info_rivets").classList.toggle('active');
        document.querySelector(".info_rivets .check").classList.toggle('active');
    }
});
var check_luse = document.querySelectorAll('.check_luse');
[].forEach.call(check_luse, function (el) {
    el.onclick = function (e) {
        document.querySelector(".info_luxe").classList.toggle('active');
        document.querySelector(".info_luxe .check").classList.toggle('active');
    }
});

var minus = document.querySelectorAll('.moins');
[].forEach.call(minus, function (el) {
    el.onclick = function (e) {
        var count = el.parentElement.querySelector('.count').textContent;
        if (count > 1) {
            count--;
            el.parentElement.querySelector('.count').textContent = count;
        }
    }
});
var plus = document.querySelectorAll('.plus');
[].forEach.call(plus, function (el) {
    el.onclick = function (e) {
        var count = el.parentElement.querySelector('.count').textContent;
        count++;
        el.parentElement.querySelector('.count').textContent = count;
    }
});

var open_payer_box = document.querySelectorAll('.valider');
[].forEach.call(open_payer_box, function (el) {
    el.onclick = function (e) {
        document.querySelector('.slider_section').classList.toggle('active');
        document.querySelector('.payer').classList.toggle('active');
    }
});
var open_payer_box = document.querySelectorAll('.valider');
[].forEach.call(open_payer_box, function (el) {
    el.onclick = function (e) {
        document.querySelector('.slider_section').classList.toggle('active');
        document.querySelector('.payer').classList.toggle('active');
    }
});

var return_payer_box = document.querySelectorAll('.return');
[].forEach.call(return_payer_box, function (el) {
    el.onclick = function (e) {
        document.querySelector('.slider_section').classList.toggle('active');
        document.querySelector('.payer').classList.toggle('active');
    }
});


var open_rechercher = document.querySelectorAll('.rechercher');
[].forEach.call(open_rechercher, function (el) {
    el.onclick = function (e) {
        document.querySelector(".modal_rechercher").classList.toggle('show');
    }
});

var cancel_rechercher = document.querySelectorAll('.cancel_rechercher');
[].forEach.call(cancel_rechercher, function (el) {
    el.onclick = function (e) {
        document.querySelector(".modal_rechercher").classList.toggle('show');
    }
});

var approve_rechercher = document.querySelectorAll('.approve_rechercher');
[].forEach.call(approve_rechercher, function (el) {
    el.onclick = function (e) {
        document.querySelector(".modal_rechercher").classList.toggle('show');
    }
});


var open_importer = document.querySelectorAll('.importer');
[].forEach.call(open_importer, function (el) {
    el.onclick = function (e) {
        document.querySelector(".modal_importer").classList.toggle('show');
    }
});

var cancel_importer = document.querySelectorAll('.cancel_importer');
[].forEach.call(cancel_importer, function (el) {
    el.onclick = function (e) {
        document.querySelector(".modal_importer").classList.toggle('show');
    }
});

var approve_importer = document.querySelectorAll('.approve_importer');
[].forEach.call(approve_importer, function (el) {
    el.onclick = function (e) {
        document.querySelector(".modal_importer").classList.toggle('show');
    }
})

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});