export default function tabsNavigation() {

    const $ = document.querySelector.bind(document)

    const titulo = $(".header-text-2")

    const content_1tab = $("#content_1tab")
    const content_2tab = $("#content_2tab")
    const content_3tab = $("#content_3tab")

    const basic = $(".basic")
    const social = $(".social")
    const certificates = $(".certificates")

    const basic_span = $(".basic_span").textContent
    const social_span = $(".social_span").textContent
    const certificates_span = $(".certificates_span").textContent

    // Adding Events

    basic.addEventListener('click', (x) => {


        if (x.target === basic || x.target.textContent == basic_span) {

            /* console.log(x.target)
            console.log(x.target.textContent)
            console.log(content_2tab)
            console.log(content_2tab.classList) */

            content_1tab.classList.remove("hide")
            content_2tab.classList.add("hide")
            content_3tab.classList.add("hide")

            basic.classList.add("active")
            social.classList.remove("active")
            certificates.classList.remove("active")

            titulo.textContent = "First Tab"
        }

    });

    social.addEventListener('click', (x) => {


        if (x.target === social || x.target.textContent == social_span) {
            content_1tab.classList.add("hide")
            content_2tab.classList.remove("hide")
            content_3tab.classList.add("hide")

            basic.classList.remove("active")
            social.classList.add("active")
            certificates.classList.remove("active")

            titulo.textContent = "Second Tab"


        }

    });

    certificates.addEventListener('click', (x) => {


        if (x.target === certificates || x.target.textContent == certificates_span) {
            content_1tab.classList.add("hide")
            content_2tab.classList.add("hide")
            content_3tab.classList.remove("hide")

            basic.classList.remove("active")
            social.classList.remove("active")
            certificates.classList.add("active")

            titulo.textContent = "Third Tab"
        }

    });

}