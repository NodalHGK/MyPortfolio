window.onload = function () {
    function typeEffect(elementId, text, speed, callback) {
        let i = 0;
        const element = document.getElementById(elementId);
        element.innerHTML = ""; // Очищаем текст перед началом печати

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
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
                });
            });
            
        });
    });
};

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("scrollButton").addEventListener("click", function() {
    scrollToSection("section1");
});
document.getElementById("scrollButton").addEventListener("click", function() {
    scrollToSection("section1");
});

