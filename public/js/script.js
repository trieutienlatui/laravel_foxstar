// Observer để kích hoạt hiệu ứng reveal khi scroll đến
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, {
    threshold: 0.1
});

// Áp dụng observer cho tất cả quote text
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.quote-text').forEach((quote) => {
        observer.observe(quote);
    });

    // Swiper cho section 1 - FreeMode + Mousewheel
    const swiper = new Swiper('.card-swiper', {
        slidesPerView: 4,
        spaceBetween: -30,
        mousewheel: {
            releaseOnEdges: true,
            invert: false,
            sensitivity: 0.5,
            thresholdDelta: 1,
            thresholdTime: 150
        },
        freeMode: true,
        breakpoints: {
            0: {
                slidesPerView: 1.5,
            },
            576: {
                slidesPerView: 2.5,
            },
            992: {
                slidesPerView: 3.2,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // Thêm CSS động để tạo layout so le cho các card trong swiper
    const style = document.createElement('style');
    style.innerHTML = `
        .card-swiper .swiper-slide.foxstar-card-s2,
        .card-swiper .swiper-slide.foxstar-card-s4,
        .card-swiper .swiper-slide.foxstar-card-s6,
        .card-swiper .swiper-slide.foxstar-card-s8 {
            margin-top: 40px;
        }
        .card-swiper .swiper-slide.foxstar-card-s1 {
            margin-right: 0;
            margin-left: 0;
        }
        .card-swiper .swiper-slide.foxstar-card-s4,
        .card-swiper .swiper-slide.foxstar-card-s8 {
            margin-right: 0;
            margin-left: -5px;
        }
        .card-swiper .swiper-slide.foxstar-card-s1,
        .card-swiper .swiper-slide.foxstar-card-s2,
        .card-swiper .swiper-slide.foxstar-card-s3,
        .card-swiper .swiper-slide.foxstar-card-s4,
        .card-swiper .swiper-slide.foxstar-card-s5,
        .card-swiper .swiper-slide.foxstar-card-s6,
        .card-swiper .swiper-slide.foxstar-card-s7,
        .card-swiper .swiper-slide.foxstar-card-s8 {
            width: 250px !important;
            max-width: 250px !important;
            min-width: 250px !important;
        }
    `;
    document.head.appendChild(style);
});
