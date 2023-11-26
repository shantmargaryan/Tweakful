const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");


burger.addEventListener("click", function () {
    burger.classList.toggle("burger_active");
    nav.classList.toggle("nav_active");
    if (burger.classList.contains("burger_active")) {
        header.classList.add("header_active")
        nav.style.paddingTop = header.offsetHeight + "px";
        disableScroll();
    } else {
        nav.style.paddingTop = "";
        setTimeout(() => {
        }, 300);
        header.classList.remove("header_active");
        enableScroll();
    }
});

const disableScroll = () => {
    const fixBlocks = document?.querySelectorAll('.fixed-block');
    const pagePosition = window.scrollY;
    const paddingOffset = `${(window.innerWidth - document.body.offsetWidth)
        }px`;

    document.documentElement.style.scrollBehavior = 'none';
    fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
    document.body.style.paddingRight = paddingOffset;
    document.body.classList.add('dis-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = `-${pagePosition} px`;
}

const enableScroll = () => {
    const fixBlocks = document?.querySelectorAll('.fixed-block');
    const pagePosition = parseInt(document.body.dataset.position, 10);
    fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
    document.body.style.paddingRight = '0px';

    document.body.style.top = 'auto';
    document.body.classList.remove('dis-scroll');
    window.scroll({
        top: pagePosition,
        left: 0
    });
    document.body.removeAttribute('data-position');
    // document.documentElement.style.scrollBehavior = 'smooth';
}

const mediaQueryMinWidth_1200 = window.matchMedia('(min-width: 1200px)');
mediaQueryMinWidth_1200.addEventListener("change", (e) => {
    if (e.matches) {
        nav.style.paddingTop = "";
        return true;
    }
    else {
        nav.style.paddingTop = header.offsetHeight + "px";
    }
    return false;
});

const storySwiperEl = document.querySelector(".story__swiper");
if (storySwiperEl) {
    let swiper = new Swiper(".story__swiper", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

const strategySwiperEl = document.querySelector(".strategy__swiper");
if (strategySwiperEl) {
    let swiper = new Swiper(".strategy__swiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 30,
        breakpoints: {
            slidesPerView: 1,
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            }
        }
    });
}

const benefitsSwiperEl = document.querySelector(".benefits__swiper");
if (benefitsSwiperEl) {
    let swiper = new Swiper(".benefits__swiper", {
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

const customSelect = new CustomSelect('select', {
    turn: true
});

