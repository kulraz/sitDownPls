try {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        autoplay: {
            delay: 5000000000,
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }
    });
    

    const specialsSwiperDesc = new Swiper('.specialsSwiper-desc', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        navigation: {
            prevEl: '.specials__forward-btn',
            nextEl: '.specials__back-btn'
        }
    }); 

    let width = window.innerWidth;

    if (width < 700) {

        const specialsSwiper = new Swiper('.specialsSwiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            spaceBetween: 32,
            navigation: {
                nextEl: '.specials__forward-btn',
                prevEl: '.specials__back-btn'
            }
        }); 
            
        const usefulSwiper = new Swiper('.mySwiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            spaceBetween: 32,

            navigation: {
                nextEl: '.useful__back-btn',
                prevEl: '.useful__forward-btn'
            }
        });

        const similarSwiper = new Swiper('.similarSwiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 2,
            spaceBetween: 16,

            navigation: {
                nextEl: '.similar__forward-btn',
                prevEl: '.similar__back-btn'
            }
        });
    } else if (width < 1001) {
        const specialsSwiper = new Swiper('.specialsSwiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 2,
            spaceBetween: 32,
            navigation: {
                nextEl: '.specials__forward-btn',
                prevEl: '.specials__back-btn'
            }
        });
        
        const usefulSwiper = new Swiper('.mySwiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 2,
            spaceBetween: 32,

            navigation: {
                nextEl: '.useful__back-btn',
                prevEl: '.useful__forward-btn'
            }
        }); 

        const similarSwiper = new Swiper('.similarSwiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 2,
            spaceBetween: 32,

            navigation: {
                nextEl: '.similar__forward-btn',
                prevEl: '.similar__back-btn'
            }
        }); 
    } else if ( width > 1300 ) {
        const similarSwiper = new Swiper('.similarSwiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 4,
            spaceBetween: 32,

            navigation: {
                nextEl: '.similar__forward-btn',
                prevEl: '.similar__back-btn'
            }
        })
    } else if ( width > 1001 ) {
            const specialsSwiper = new Swiper('.specialsSwiper', {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 3,
                spaceBetween: 32,
                navigation: {
                    nextEl: '.specials__forward-btn',
                    prevEl: '.specials__back-btn'
                }
            }); 
            
            const usefulSwiper = new Swiper('.mySwiper', {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 2,
                spaceBetween: 32,

                navigation: {
                    nextEl: '.useful__back-btn',
                    prevEl: '.useful__forward-btn'
                }
            });
            
            const similarSwiper = new Swiper('.similarSwiper', {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 3,
                spaceBetween: 32,

                navigation: {
                    nextEl: '.similar__forward-btn',
                    prevEl: '.similar__back-btn'
                }
            })
    } 
    

    window.addEventListener('resize', ()=> {
        let width = window.innerWidth;
        if (width < 700) {
            const specialsSwiper = new Swiper('.specialsSwiper', {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 1,
                spaceBetween: 32,
                navigation: {
                    nextEl: '.specials__forward-btn',
                    prevEl: '.specials__back-btn'
                }
            }); 
                
            const usefulSwiper = new Swiper('.mySwiper', {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 1,
                spaceBetween: 32,
    
                navigation: {
                    nextEl: '.useful__back-btn',
                    prevEl: '.useful__forward-btn'
                }
            });
    
            const similarSwiper = new Swiper('.similarSwiper', {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 2,
                spaceBetween: 16,
    
                navigation: {
                    nextEl: '.similar__forward-btn',
                    prevEl: '.similar__back-btn'
                }
            });
        } else if (width < 1001) {
            const specialsSwiper = new Swiper('.specialsSwiper', {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 2,
                spaceBetween: 32,
                navigation: {
                    nextEl: '.specials__forward-btn',
                    prevEl: '.specials__back-btn'
                }
            });
            
            const usefulSwiper = new Swiper('.mySwiper', {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 2,
                spaceBetween: 32,
    
                navigation: {
                    nextEl: '.useful__back-btn',
                    prevEl: '.useful__forward-btn'
                }
            }); 
    
            const similarSwiper = new Swiper('.similarSwiper', {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 2,
                spaceBetween: 32,
    
                navigation: {
                    nextEl: '.similar__forward-btn',
                    prevEl: '.similar__back-btn'
                }
            });
        } else if ( width > 1300 ) {
            const similarSwiper = new Swiper('.similarSwiper', {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 4,
                spaceBetween: 32,
    
                navigation: {
                    nextEl: '.similar__forward-btn',
                    prevEl: '.similar__back-btn'
                }
            })
        } else if ( width > 1001 ) {
            const specialsSwiper = new Swiper('.specialsSwiper', {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 3,
                spaceBetween: 32,
                navigation: {
                    nextEl: '.specials__forward-btn',
                    prevEl: '.specials__back-btn'
                }
            }); 
            const usefulSwiper = new Swiper('.mySwiper', {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 2,
                spaceBetween: 32,

                navigation: {
                    nextEl: '.useful__back-btn',
                    prevEl: '.useful__forward-btn'
                }
            });
            const similarSwiper = new Swiper('.similarSwiper', {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 3,
                spaceBetween: 32,

                navigation: {
                    nextEl: '.similar__forward-btn',
                    prevEl: '.similar__back-btn'
                }
            }) 
        } 
    })
    
    
} catch (error) {
    console.log(error.message)
}
try {
    const choices = () => {
        const element = document.querySelector('.search__select');
        const choices = new Choices(element, {
            searchEnabled: false,
            itemSelectText: '',
            classNames : {
              containerOuter: 'choices category-select'
            },
        });
        const element2 = document.querySelector('.region');
        const choices2 = new Choices(element2, {
            searchEnabled: false,
            itemSelectText: '',
            classNames : {
              containerOuter: 'choices region'
            },
        });
        
        document.querySelectorAll('.catalog__filtres-select').forEach(element3 => {
            new Choices(element3, {
                searchEnabled: false,
                itemSelectText: '',
                classNames : {
                  containerOuter: 'choices catalog__filtres-select'
                },
            });
        })
    }

    choices();
} catch (error) {
    console.log(error.message)
}
try {
    document.querySelector('.form-section__form').addEventListener('submit', (event) => {
        event.preventDefault();
    });
    document.querySelector('.dialog-form__form ').addEventListener('submit', (event) => {
        event.preventDefault();
    });
} catch (error) {
    console.log(error.message)
} 
try {
    const validator = new JustValidate('.form-section__form',{
        errorFieldCssClass: ['error'],
        errorLabelStyle: {
            color: '#FF6972'
        },
        errorLabelCssClass: ['errorLabel'],
        successFieldCssClass: ['success'],
        validateBeforeSubmitting: true,
    });
    validator
    .addField('#name', [
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Недопустимый формат',
        }
    ])
    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'email',
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Недопустимый формат',
        }
    ])
    .addField('#tel', [
        {
            rule: 'required',
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'number',
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'minLength',
            value: 11,
            errorMessage: 'Недопустимый формат',
        }
    ])
    .addField('#checkbox', [
        {
            rule: 'required',
            errorMessage: 'Обязательное поле',
        }
    ])
    .onSuccess(() => {
        document.querySelector('.dialog-callBack').classList.add('dialog-callBack--active');
        document.querySelector('body').classList.add('stop-scroll');
    });
} catch (error) {
    console.log(error.message)
} 
try {
    const validator2 = new JustValidate('.dialog-form__form',{
        errorFieldCssClass: ['error'],
        errorLabelStyle: {
            color: '#FF6972'
        },
        errorLabelCssClass: ['errorLabel'],
        successFieldCssClass: ['success'],
        validateBeforeSubmitting: true,
    });
    validator2
    .addField('#name', [
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Недопустимый формат',
        }
    ])
    .addField('#tel', [
        {
            rule: 'required',
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'number',
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'minLength',
            value: 11,
            errorMessage: 'Недопустимый формат',
        }
    ])
    .addField('#checkbox', [
        {
            rule: 'required',
            errorMessage: 'Обязательное поле',
        }
    ])
    .onSuccess(() => {
        document.querySelector('.dialog-form').classList.remove('dialog-form--active');
        document.querySelector('body').classList.remove('stop-scroll');
        document.querySelector('.dialog-callBack').classList.add('dialog-callBack--active');
        document.querySelector('body').classList.add('stop-scroll');
    });
} catch (error) {
    console.log(error.message)
} 
try {
    if(width > 1300) {
        var asideRange = document.getElementById('range-input');
        if (asideRange) {
            noUiSlider.create(asideRange, {
                start: [200, 999999],
                connect: true,
                step: 1,
                range: {
                    'min': 200,
                    'max': 999999
                }
            });
            const input1 = document.getElementById('range-prices__input1');
            const input2 = document.getElementById('range-prices__input2');
            const inputs = [input1, input2];

            asideRange.noUiSlider.on('update', function (values, handle) {

                inputs[handle].value = Math.round(values[handle]);
            });
        }
    }
} catch(error) {
    console.log(error.message)
}
try {
    document.querySelector('.item-info__buy-btn').addEventListener('click', () => {
        document.querySelector('.dialog-form').classList.add('dialog-form--active');
        document.querySelector('body').classList.add('stop-scroll');
    });
    document.querySelector('.item-info__main-img').addEventListener('click', () => {
        document.querySelector('.dialog-item').classList.add('dialog-item--active');
        document.querySelector('body').classList.add('stop-scroll');
    });
    document.querySelector('.dialog-item__close-btn').addEventListener('click', () => {
        document.querySelector('.dialog-item__container').classList.remove('animate__fadeInLeft');
        document.querySelector('.dialog-item__container').classList.add('animate__fadeOutLeft');
        setTimeout(() => {
            document.querySelector('.dialog-item').classList.remove('dialog-item--active');
            document.querySelector('.dialog-item__container').classList.remove('animate__fadeOutLeft');
            document.querySelector('.dialog-item__container').classList.add('animate__fadeInLeft');
            document.querySelector('body').classList.remove('stop-scroll');
    
        }, 700)
    });
    document.querySelector('.dialog-callBack__close-btn').addEventListener('click', () => {
        document.querySelector('.dialog-callBack__container').classList.remove('animate__fadeInLeft');
        document.querySelector('.dialog-callBack__container').classList.add('animate__fadeOutLeft');
        setTimeout(() => {
            document.querySelector('.dialog-callBack').classList.remove('dialog-callBack--active');
            document.querySelector('.dialog-callBack__container').classList.remove('animate__fadeOutLeft');
            document.querySelector('.dialog-callBack__container').classList.add('animate__fadeInLeft');
            document.querySelector('body').classList.remove('stop-scroll');
    
        }, 700)
    });
    document.querySelector('.dialog-form__close-btn').addEventListener('click', () => {
        document.querySelector('.dialog-form__container').classList.remove('animate__fadeInLeft');
        document.querySelector('.dialog-form__container').classList.add('animate__fadeOutLeft');
        setTimeout(() => {
            document.querySelector('.dialog-form').classList.remove('dialog-form--active');
            document.querySelector('.dialog-form__container').classList.remove('animate__fadeOutLeft');
            document.querySelector('.dialog-form__container').classList.add('animate__fadeInLeft');
            document.querySelector('body').classList.remove('stop-scroll');
    
        }, 700)
    });



    const imgs = document.querySelectorAll('.dialog-item__another-imgs--desc > .dialog-item__another-imgs-container > img, .dialog-item__photos-content > img');
    
    imgs.forEach(img => {
        img.addEventListener('click', () => {
            const mainImg = document.querySelector('.dialog-item__photos-content > img');
            const mainContainer = document.querySelector('.dialog-item__photos-content');
            const otherContainer = document.querySelector('.dialog-item__another-imgs-container');
            if(otherContainer.contains(img)) {
                otherContainer.removeChild(img)
                otherContainer.append(mainImg);
                mainContainer.append(img);
            }
        })
    })
    
} catch (error) {
    console.log(error.message)
} try {
    const imgs = document.querySelectorAll('.dialog-item__another-imgs--tablet >.dialog-item__another-imgs-container > img');
    
    imgs.forEach((img, idx )=> {
        if (idx === 1) {
            img.classList.add('dialog-item__another-img--active')
        }
    });

    document.querySelector('.dialog-item__back-btn').addEventListener('click', () => {
        let found = false;
        imgs.forEach((img, idx )=> {
            if (img.classList.contains('dialog-item__another-img--active') && !found) {
                found = true;
                img.classList.remove('dialog-item__another-img--active')
                if (idx === 0 ) {
                    imgs[imgs.length - 1].classList.add('dialog-item__another-img--active');
                } else  {
                    imgs[idx - 1].classList.add('dialog-item__another-img--active')
                }
            }
        });
    });

    
    document.querySelector('.dialog-item__forward-btn').addEventListener('click', () => {
        let found = false;
        imgs.forEach((img, idx )=> {
            if (img.classList.contains('dialog-item__another-img--active') && !found) {
                found = true;
                img.classList.remove('dialog-item__another-img--active')
                if (idx === imgs.length - 1 ) {
                    imgs[0].classList.add('dialog-item__another-img--active');
                } else  {
                    imgs[idx + 1].classList.add('dialog-item__another-img--active')
                }
            }
        });
    });
    
} catch (error) {
    console.log(error.message)
} try {
    const items = document.querySelectorAll('.tops-item');
    let n = 0;
    if (window.innerWidth < 1025) {
        n = 6; 
    } else {
        n = 8;
    }
    function showMore(n) {
        for (let i = 0; i < items.length; i++) {
            if (i < n) {
                items[i].style.display = 'flex';
              } else  {
                  break;
              }
        }
    }
    showMore(n);
    document.querySelector('.tops__btn').addEventListener('click', ()=> {
        if (window.innerWidth < 1025) {
            n = n + 6;
        } else {
            n = n + 4;
        }
        showMore(n);
    })
} catch (error) {
    console.log(error.message)
}
try {
    const catalogItems = document.querySelectorAll('.catalog__item');
    let itemsPerPage = 0;
    let currentPage = 1;

    function calucateItemsPerPage() {
        if (window.innerWidth < 1001) {
            itemsPerPage = 6;
        } else {
            itemsPerPage = 9;
        }
    }


    window.addEventListener('resize', () => {
        calucateItemsPerPage();
        showContent(currentPage, itemsPerPage);
    });

    function showContent(currentPage, itemsPerPage) {
        catalogItems.forEach(catalogItem => catalogItem.style.display = 'none')
        for (let i = (currentPage - 1) * itemsPerPage; i < (currentPage - 1) * itemsPerPage + itemsPerPage; i++) {
            if(catalogItems[i]) {
                catalogItems[i].style.display = 'flex';
            }
        }
    }
    calucateItemsPerPage();
    showContent(currentPage, itemsPerPage);
    
    const btn1 = document.querySelector('.catalog__slide-btn--first');
    const btn2 = document.querySelector('.catalog__slide-btn--second');
    const btn3 = document.querySelector('.catalog__slide-btn--third');

    btn1.addEventListener('click', () => {
        currentPage = 1;
        btn1.classList.add('catalog__slide-btn--active');
        btn2.classList.remove('catalog__slide-btn--active');
        btn3.classList.remove('catalog__slide-btn--active');
        showContent(currentPage, itemsPerPage);
    });
    btn2.addEventListener('click', () => {
        currentPage = 2;
        btn2.classList.add('catalog__slide-btn--active');
        btn1.classList.remove('catalog__slide-btn--active');
        btn3.classList.remove('catalog__slide-btn--active');
        showContent(currentPage, itemsPerPage);
    });
    btn3.addEventListener('click', () => {
        currentPage = 3;
        btn3.classList.add('catalog__slide-btn--active');
        btn2.classList.remove('catalog__slide-btn--active');
        btn1.classList.remove('catalog__slide-btn--active');
        showContent(currentPage, itemsPerPage);
    });
} catch (error) {
    console.log(error.message)
} try {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__mobile');
    const closeBurgwr = document.querySelector('.header__close-burger');
    burger.addEventListener('click', () => {
        menu.classList.add('header__mobile--active')
    })
    closeBurgwr.addEventListener('click', () => {
        menu.classList.remove('header__mobile--active')
    })
} catch (error) {
    console.log(error.message)
} try {
    const checkboxContainer = document.querySelectorAll('.aside-checkbox__container');
    for (var i = 0; i < checkboxContainer.length; i++) {
        const filter = checkboxContainer[i].querySelector('.aside-checkbox__title ');
        const filterDrop = checkboxContainer[i].querySelector('.aside-checkbox__label-container');
        const arrow = checkboxContainer[i].querySelector('.aside-checkbox__title-arrow');
        const border = checkboxContainer[i].querySelector('.aside-checkbox__title');
        filter.addEventListener('click', () => {
            if (filterDrop.classList.contains('aside-checkbox__label-container--active')) {
                filterDrop.classList.remove('aside-checkbox__label-container--active');
                border.style.border = "none";
                border.style.zIndex = "1";
                arrow.style.transform = "rotate(0)"; 
            } else {
                filterDrop.classList.add('aside-checkbox__label-container--active');
                border.style.border = "2px solid #7033AC";
                border.style.zIndex = "10";
                arrow.style.transform = "rotate(180deg)"; 
            }

        });
    }
    const range = document.querySelector('.range__title');
    const rangeDrop = document.querySelector('.range__prices');
    const rangeArrow = document.querySelector('.range__title-arrow');
    const rangeBorder = document.querySelector('.range__title');
    range.addEventListener('click', ()=> {
        if (rangeDrop.classList.contains('range__prices--active')) {
        rangeDrop.classList.remove('range__prices--active')
        rangeBorder.style.border = "none";
        rangeBorder.style.zIndex = "1";
        rangeArrow.style.transform = "rotate(0)";
        } else {
            rangeDrop.classList.add('range__prices--active');
            rangeBorder.style.border = "2px solid #7033AC";
            rangeBorder.style.zIndex = "10";
            rangeArrow.style.transform = "rotate(180deg)";
        }
    })
} catch (error) {
    console.log(error.message) 
}
