document.addEventListener("DOMContentLoaded", function () {
    var list_button = document.getElementById('listBooks'),
        listBooks = document.querySelector('.filter_wrap'),
        title_select = document.querySelector('.filter_default'),
        books = document.querySelectorAll('.book'),
        triggers = document.querySelectorAll('.promo_main_screen_crawl_trigger'),
        currentTrigger = 0;

    addEventListener('click', function (event) {
        if (event.target == list_button) {
            if (list_button.classList.contains('pushed')) {
                HideList();
            } else {
                ShowList();
            }
        } else {
            books.forEach(function (el) {
                if (el.contains(event.target)) {
                    title_select.innerHTML = event.target.innerHTML;
                    title_select.style.opacity = '1';
                    title_select.style.fontSize = '13px';
                    HideList();
                }
            });
        }
    });


    triggers.forEach(function (el,i) {
        el.addEventListener('click', function(){
            if (el != triggers[currentTrigger]) {
                triggers[currentTrigger].classList.remove('active');
                triggers[i].classList.add('active');
                currentTrigger = i;
                $('.promo_main_screen_slider').slick('slickGoTo',currentTrigger);
            }
        });
    });


    function HideList() {
        list_button.classList.remove('pushed');
        listBooks.classList.remove('fadeIn');
        listBooks.classList.add('fadeOut');
        setTimeout(function () {
            listBooks.classList.remove('showlist');
        }, 1500);
    }

    function ShowList() {
        list_button.classList.add('pushed');
        listBooks.classList.remove('fadeOut');
        listBooks.classList.add('fadeIn');
        listBooks.classList.add('showlist');
    }
    $('.promo_main_screen_slider').slick({
        arrows: false,
        infinite: false
    });
    
    $('.promo_main_screen_slider').on('swipe', function (event, slick, direction) {
        if (direction == 'left') {
            triggers[currentTrigger].classList.remove('active');
            triggers[currentTrigger = currentTrigger == 2 ? currentTrigger : ++currentTrigger].classList.add('active');
        } else if (direction == 'right') {
            triggers[currentTrigger].classList.remove('active');
            triggers[currentTrigger = currentTrigger == 0 ? currentTrigger : --currentTrigger].classList.add('active');
        }
    });

    if (window.screen.width <= 767 ) {
        $('.posts_list').slick({
            arrows: false,
            dots:true,
            dotsClass: 'my-Dots'
        });
    }
});
