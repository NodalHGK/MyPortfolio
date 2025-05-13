window.onload = function () {
    function typeEffect(elementId, text, speed, callback) {
        let i = 0;
        const element = document.getElementById(elementId);

        if (localStorage.getItem(elementId)) {
            element.innerHTML = localStorage.getItem(elementId); // Если текст уже сохранен, просто устанавливаем его
            if (callback) callback(); // Переходим к следующему шагу
            return;
        }

        element.innerHTML = ""; // Очищаем текст перед началом печати

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                localStorage.setItem(elementId, element.innerHTML); // Сохраняем текст в localStorage
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback(); // Запуск следующего эффекта
            }
        }

        type();
    }

    // Запуск печати по очереди:
    typeEffect("text1", "//", 500, function () {
        typeEffect("text2", "Hello World!", 100, function () {
            typeEffect("text3", "I'm Kir", 100, function() {
                typeEffect("text4", "Web-Developer", 100, function() {
                    document.querySelector(".promo__links").classList.add("promo__links_visible");
                    document.querySelector(".promo__imgBox").classList.add("promo__imgBox_visible");
                    document.querySelector(".header").classList.add("header_visible");
                    document.querySelector(".aside_hidden").classList.add("aside_visible");
                    document.querySelector(".hidden-blocks").classList.add("visible-blocks");

                    // Сохранение классов в localStorage
                    localStorage.setItem("promo_links_visible", "true");
                    localStorage.setItem("promo_imgBox_visible", "true");
                    localStorage.setItem("header_visible", "true");
                    localStorage.setItem("hidden_blocks_visible", "true");
                });
            });
        });
    });

    // Восстановление классов после обновления страницы
    if (localStorage.getItem("promo_links_visible")) {
        document.querySelector(".promo__links").classList.add("promo__links_visible");
    }
    if (localStorage.getItem("promo_imgBox_visible")) {
        document.querySelector(".promo__imgBox").classList.add("promo__imgBox_visible");
    }
    if (localStorage.getItem("header_visible")) {
        document.querySelector(".header").classList.add("header_visible");
    }
    if (localStorage.getItem("hidden_blocks_visible")) {
        document.querySelectorAll(".hidden-blocks").forEach(element => {
            element.classList.add("visible-blocks");
        });
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__links'),
    menuItem = document.querySelectorAll('.header__links li'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__links_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active, body');
            menu.classList.toggle('header__links_active');
        })
    })
})

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("scrollLink").addEventListener("click", function() {
    scrollToSection("aboutMe");
});
document.getElementById("scrollButton").addEventListener("click", function() {
    scrollToSection("portfolio");
});

(function ($) {
    $(function() {
        function isFormValid($form) {
            var isValid = true;

            $form.find('[required]').each(function(){
                var $field = $(this);
                var val = $field.val().trim();

                if ($field.attr('type') === 'checkbox') {
                    if (!$field.is(':checked')) {
                        isValid = false;
                        $field.addClass('error');
                    } else {
                        $field.removeClass('error');
                    }
                } else {
                    if (!val) {
                        isValid = false;
                        $field.addClass('error');
                    } else {
                        $field.removeClass('error');
                    }
                }
            });
            return isValid;
        }

        $('#myForm').on('submit', function(e){
            e.preventDefault();

            var $form = $(this);

            if (!isFormValid($form)) {
                alert('Пожалуйста заполните все обязательные поля');
                return;
            }
            $('#overlayActive').fadeIn(300);
            $('boxItems').fadeIn(500);

        });

        $('[data-modal=modal]').on('click', function() {
            var $form = $(this).closest('#myForm');
            if (!$form.length) return;

            if (!isFormValid($form)) {
                alert('Пожалуйста заполните все обязательные поля');
                return;
            }

            $('#overlayActive').fadeIn(300);
            $('#boxItems').fadeIn(500);
        });

        $('.modal__close, #overlayActive').on('click', function() {
            $('#overlayActive, #boxItems').fadeOut('slow');
        });
        // $('[data-modal=modal]').on('click', function() {
        //     const $form = $(this).closest('form');
        //     if ($form.valid && !$form.valid()) {
        //         return
        //     }
        //     $('#overlayActive').fadeIn(300)
        //     $('#boxItems').fadeIn(500)
        // });
        // $('.modal__close, #overlayActive').on('click', function(){
        //     $('#overlayActive, #boxItems').fadeOut('slow');
        // })

    $("form").submit(function(e) {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
             data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('form').trigger('reset');

        });
        return false;
        });
    });
})(jQuery);

// window.addEventListener("scroll", function () {
//     const targetElement = document.querySelector(".your-element"); // Замените на нужный селектор
//     const scrollTrigger = 300; // Укажите количество пикселей, после которого добавляется класс

//     if (window.scrollY > scrollTrigger) {
//         targetElement.classList.add("active");
//     } else {
//         targetElement.classList.remove("active");
//     }
// });

