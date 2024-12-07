// Idioma (Contact Me)
const buttonEng = document.querySelector("#button__eng");
const buttonEsp = document.querySelector("#button__esp");

const translations = {
    en: {
        section__title: "Contact Me",
        form__title: "Contact",
        form__name: "Name",
        form__email: "Email",
        form__message: "Message",
        form__button: "Send",
        others__title: "Other contact methods",
        footer__text1: "María Payares | Graphic Designer",
        footer__text2: "Colombia, Barranquilla. Colombia Time Zone (GMT-5)",

        home: "Home",
        portfolio: "Portfolio",
        services: "Services",
        contact: "Contact Me"
    },
    es: {
        section__title: "Contáctame",
        form__title: "Contacto",
        form__name: "Nombre",
        form__email: "Correo electrónico",
        form__message: "Mensaje",
        form__button: "Enviar",
        others__title: "Otros métodos de contacto",
        footer__text1: "María Payares | Diseñadora Gráfica",
        footer__text2: "Colombia, Barranquilla. Zona horaria de Colombia (GMT-5)",

        home: "Inicio",
        portfolio: "Portafolio",
        services: "Servicios",
        contact: "Contáctame"
    }
};

function switchLanguage(lang) {
    const translation = translations[lang];

    document.querySelectorAll(".section__title").forEach(element => {
        element.textContent = translation.section__title;
    });
    document.querySelectorAll(".form__title").forEach(element => {
        element.textContent = translation.form__title;
    });

    document.querySelectorAll(".form__name").forEach((element) => {
        element.placeholder = translation.form__name;
    });

    document.querySelectorAll(".form__email").forEach(element => {
        element.textContent = translation.form__email;
    });

    document.querySelectorAll(".form__message").forEach((element) => {
        element.placeholder = translation.form__message;
    });

    document.querySelectorAll(".form__button").forEach(element => {
        element.textContent = translation.form__button;
    });

    document.querySelectorAll(".others__title").forEach(element => {
        element.textContent = translation.others__title;
    });

    document.querySelectorAll(".footer__text")[0].textContent = translation.footer__text1;
    document.querySelectorAll(".footer__text")[1].textContent = translation.footer__text2;

    document.querySelector(".sidebar__item--one a").textContent = translation.home;
    document.querySelector(".sidebar__item--two a").textContent = translation.portfolio;
    document.querySelector(".sidebar__item--three a").textContent = translation.services;
    document.querySelector(".sidebar__item--four a").textContent = translation.contact;
}

buttonEng.addEventListener("click", (event) => {
    event.preventDefault();
    switchLanguage("en");
    buttonEng.style.pointerEvents = "none";
    buttonEsp.style.pointerEvents = "auto";
    localStorage.setItem("language", "en");
});

buttonEsp.addEventListener("click", (event) => {
    event.preventDefault();
    switchLanguage("es");
    buttonEsp.style.pointerEvents = "none";
    buttonEng.style.pointerEvents = "auto";
    localStorage.setItem("language", "es");
});

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "es";
    switchLanguage(savedLanguage);

    if (savedLanguage === "en") {
        buttonEng.disabled = true;
        buttonEsp.disabled = false;
    } else {
        buttonEsp.disabled = true;
        buttonEng.disabled = false;
    }
});