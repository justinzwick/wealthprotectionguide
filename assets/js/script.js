let item = $('.book-hero');
let currentWindow = $(window);
// item.css("position", "absolute");

// currentWindow.on('scroll', () => {
//     let currentScroll = currentWindow.scrollTop();
//     if (currentScroll > 200) {
//         item.animate({
//             scrollTop: item.offset({ "top": currentScroll + 200 }),
//         }, 3000);

//     }
// });

function bookScroll() {
    if ($(window).width() > 991.98) {
        let topLimit = $(".hero__info").offset().top;
        let bottomLimit = Math.floor($(".footer").offset().top - 20)
        let itemLength = item.height();

        currentWindow.on('scroll', () => {
            let currentScroll = currentWindow.scrollTop();
            if (currentScroll > 0 && currentScroll < bottomLimit) {
                item.animate({
                    top: currentScroll + 184,
                }, 1);

            } else if (item.offset().top == bottomLimit) {
                item.animate({
                    top: bottomLimit + 150,
                }, 1);
            }
        });
    }
}

$(window).on('load', function () {
    bookScroll();
});



$(".header .header__bars").on('click', function () {

    var selector = $(".header .header__nav")

    if (selector.hasClass('shown')) {
        selector.css('right', "100%");
        selector.removeClass('shown');
    } else {
        selector.css('right', "0");
        selector.addClass('shown');
    }
});

$(".header .header__nav span").on('click', function () {

    var selector = $(".header .header__nav")

    if (selector.hasClass('shown')) {
        selector.css('right', "100%");
        selector.removeClass('shown');
    } else {
        selector.css('right', "0");
        selector.addClass('shown');
    }
});