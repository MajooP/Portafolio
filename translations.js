// Idioma (Home)
const buttonEng = document.querySelector("#button__eng");
const buttonEsp = document.querySelector("#button__esp");

const translations = {
    en: {
        presentation__title: "Hi! I'm Majo",
        presentation__paragraph: "I'm María Payares, a graphic designer. Passionate about digital illustration and character creation. My goal is to create original visual pieces that connect with people, always looking to learn new techniques and ready to take on professional challenges.",
        professional__title: "Illustrator | Graphic Designer",
        professional__paragraph: "Graphic Design student at Universidad Autónoma del Caribe.",
        desing__title: "Design Process",
        desing__paragraph: "My design process begins with a phase of research and conceptualization to define the message and inspiration for each project. From there, I develop preliminary sketches, experimenting with compositions, shapes, and color palettes. Once the creative direction is defined, the illustration is taken to the digital environment, where details, textures, and effects are added to bring the final piece to life.",
        hobbies__title: "Hobbies",
        hobbies__paragraph1: "I enjoy exploring the creative possibilities offered by watercolor painting.",
        hobbies__paragraph2: "I find inspiration in reading, especially in the works of Stephen King.",
        footer__text1: "María Payares | Graphic Designer",
        footer__text2: "Colombia, Barranquilla. Colombia Time Zone (GMT-5)",

        home: "Home",
        portfolio: "Portfolio",
        services: "Services",
        contact: "Contact Me"
    },
    es: {
        presentation__title: "¡Hola! Soy Majo",
        presentation__paragraph: "Soy María Payares, diseñadora gráfica. Apasionada por la ilustración digital y la creación de personajes. Mi objetivo es crear piezas visuales originales que conecten con las personas, buscando siempre aprender nuevas técnicas y dispuesta a aceptar retos profesionales.",
        professional__title: "Ilustradora | Diseñadora Gráfica",
        professional__paragraph: "Estudiante de Diseño Gráfico en la Universidad Autónoma del Caribe.",
        desing__title: "Proceso de Diseño",
        desing__paragraph: "Mi proceso de diseño comienza con una fase de investigación y conceptualización para definir el mensaje y la inspiración de cada proyecto. A partir de ahí, desarrollo bocetos preliminares, experimentando con composiciones, formas y paletas de color. Una vez se define la dirección creativa, la ilustración se lleva al entorno digital, donde se añaden detalles, texturas y efectos que dan vida y profundidad a la pieza final.",
        hobbies__title: "Hobbies",
        hobbies__paragraph1: "Disfruto explorar las posibilidades creativas que ofrece la pintura con acuarelas.",
        hobbies__paragraph2: "Encuentro inspiración en la lectura, especialmente en las obras de Stephen King.",
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
    document.querySelector(".presentation__title").innerHTML = translation.presentation__title;
    document.querySelector(".presentation__paragraph").innerHTML = translation.presentation__paragraph;
    document.querySelector(".professional--presentation__title").textContent = translation.professional__title;
    document.querySelector(".professional--presentation__paragraph").textContent = translation.professional__paragraph;
    document.querySelector(".desing--process__title").textContent = translation.desing__title;
    document.querySelector(".desing--process__paragraph").textContent = translation.desing__paragraph;
    document.querySelector(".hobbies__title").textContent = translation.hobbies__title;
    document.querySelectorAll(".hobbies__paragraph1")[0].textContent = translation.hobbies__paragraph1;
    document.querySelectorAll(".hobbies__paragraph2")[0].textContent = translation.hobbies__paragraph2;

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