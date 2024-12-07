// Idioma (Contact Me)
const buttonEng = document.querySelector("#button__eng");
const buttonEsp = document.querySelector("#button__esp");

const translations = {
    en: {
        section__title: "Services",
        others__title: "Other contact methods",
        services__titleone: "Design and creation of characters.",
        services__paragraphone: "Professional character design and creation services, focused on developing original and detailed concepts carefully tailored to the objectives and needs of each project.",
        services__titletwo: "Creation of completely customizable original illustrations.",
        services__paragraphtwo: "Creation of fully customizable original illustrations, designed to meet the specific needs and preferences of each client or project.",
        services__titlethree: "Creation of illustrated promotional posters.",
        services__paragraphthree: "Creation of illustrated promotional posters, designed to communicate messages in a visually appealing and effective way.",
        services__titlefour: "Comics and cartoons.",
        services__paragraphfour: "Creation of comics and graphic stories, crafted with dynamic visual narratives and styles tailored to the project's requirements.",
        services__paragraphfive: "Creation of fanarts, artistic reinterpretations of popular characters and worlds, adapted to the client's style and personal vision.",
        section__titleinterested: "Are you interested?",
        services__contact: "Contact Me",
        footer__text1: "María Payares | Graphic Designer",
        footer__text2: "Colombia, Barranquilla. Colombia Time Zone (GMT-5)",

        home: "Home",
        portfolio: "Portfolio",
        services: "Services",
        contact: "Contact Me"
    },
    es: {
        section__title: "Servicios",
        others__title: "Otros métodos de contacto",
        services__titleone: "Diseño y creación de  personajes.",
        services__paragraphone: "Servicios profesionales de diseño y creación de personajes, enfocados en el desarrollo de conceptos originales y detallados, adaptados cuidadosamente a los objetivos y necesidades de cada proyecto.",
        services__titletwo: "Creación de ilustraciones originales completamente personalizables.",
        services__paragraphtwo: "Creación de ilustraciones originales completamente personalizables, diseñadas para adaptarse a las necesidades y preferencias específicas de cada cliente o proyecto.",
        services__titlethree: "Creación de afiches promocionales ilustrados.",
        services__paragraphthree: "Creación de afiches promocionales ilustrados, diseñados para comunicar mensajes de manera visualmente atractiva y efectiva.",
        services__titlefour: "Comics e historietas.",
        services__paragraphfour: "Creación de cómics e historietas, desarrollados con narrativas visuales dinámicas y estilos adaptados a las necesidades del proyecto.",
        services__paragraphfive: "Creación de fanarts, reinterpretaciones artísticas de personajes y mundos populares, adaptadas al estilo y visión personal del cliente.",
        section__titleinterested: "¿Estás interesado?",
        services__contact: "Contáctame",
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

    document.querySelectorAll(".services__titleone").forEach(element => {
        element.textContent = translation.services__titleone;
    });

    document.querySelectorAll(".services__paragraphone").forEach(element => {
        element.textContent = translation.services__paragraphone;
    });

    document.querySelectorAll(".services__titletwo").forEach(element => {
        element.textContent = translation.services__titletwo;
    });

    document.querySelectorAll(".services__paragraphtwo").forEach(element => {
        element.textContent = translation.services__paragraphtwo;
    });

    document.querySelectorAll(".services__titlethree").forEach(element => {
        element.textContent = translation.services__titlethree;
    });

    document.querySelectorAll(".services__paragraphthree").forEach(element => {
        element.textContent = translation.services__paragraphthree;
    });

    document.querySelectorAll(".services__titlefour").forEach(element => {
        element.textContent = translation.services__titlefour;
    });

    document.querySelectorAll(".services__paragraphfour").forEach(element => {
        element.textContent = translation.services__paragraphfour;
    });

    document.querySelectorAll(".services__paragraphfive").forEach(element => {
        element.textContent = translation.services__paragraphfive;
    });

    document.querySelectorAll(".section__titleinterested").forEach(element => {
        element.textContent = translation.section__titleinterested
        ;
    });

    document.querySelectorAll(".services__contact").forEach(element => {
        element.textContent = translation.services__contact
        ;
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