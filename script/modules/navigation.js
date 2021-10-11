export default function navigation() {

    const $ = document.querySelector.bind(document)

    const titulo = $(".header-text-2")

    /* Variables for logical navigation */

    const content_1tab = $("#content_1tab")
    const content_2tab = $("#content_2tab")
    const content_3tab = $("#content_3tab")

    const basic = $(".basic")
    const social = $(".social")
    const certificates = $(".certificates")

    const basic_span = $(".basic_span").textContent
    const social_span = $(".social_span").textContent
    const certificates_span = $(".certificates_span").textContent

    /* Variables for required inputs */

    const fullname = $("#fullname")
    const email = $("#email")
    const age = $("#age")
    const github = $("#github")
    const teamName = $("#teamName")
    const institution = $("#institution")
    const graduation = $("#graduation")

    /* 
    
    
    
        Variables for regex (javascript validation) 

    

    */

    /* Variables for Age and its function */

    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    $('#year').addEventListener('input', function () {
        const day = $('#day');
        const month = $('#month');

        const age_aux = getAge(`${this.value}, ${month.value - 1}, ${day.value}`);

        $('#age').value = age_aux;
    });

    /* Variables for buttons */

    const next1 = $("#next1")
    const next2 = $("#next2")
    const finish = $("#finish")

    basic.addEventListener('click', (x) => {

        if (x.target === basic || x.target.textContent == basic_span) {

            if (fullname.value != "" && email.value != ""/*  && age.value != "" */) {
                content_1tab.classList.remove("hide")
                content_2tab.classList.add("hide")
                content_3tab.classList.add("hide")

                basic.classList.add("active")
                social.classList.remove("active")
                certificates.classList.remove("active")

                titulo.textContent = "First Tab"

                console.log("Página 2 liberada!")

            } else {
                console.log("Não é possível avançar a página!")
            }
        }
    });

    social.addEventListener('click', (x) => {


        if (x.target === social || x.target.textContent == social_span) {

            if (fullname.value != "" && email.value != "" && age.value != "") {
                content_1tab.classList.add("hide")
                content_2tab.classList.remove("hide")
                content_3tab.classList.add("hide")

                basic.classList.remove("active")
                social.classList.add("active")
                certificates.classList.remove("active")

                titulo.textContent = "Second Tab"
            } else {
                console.log("Não é possível avançar a página!")
            }
        }
    });

    certificates.addEventListener('click', (x) => {

        if (x.target === certificates || x.target.textContent == certificates_span) {

            if (fullname.value != "" && email.value != "" && github.value != "") {
                content_1tab.classList.add("hide")
                content_2tab.classList.add("hide")
                content_3tab.classList.remove("hide")

                basic.classList.remove("active")
                social.classList.remove("active")
                certificates.classList.add("active")

                titulo.textContent = "Third Tab"
            } else {
                console.log("Não é possível avançar a página!")
            }
        }
    });

    /* Ending Navigation Coding */

    /* Starting Submits validations */

    next1.addEventListener("click", (event) => {
        event.preventDefault()

        if (fullname.value != "" && email.value != ""
            && age.value != "") {
            content_1tab.classList.add("hide")
            content_2tab.classList.remove("hide")
            content_3tab.classList.add("hide")

            basic.classList.remove("active")
            social.classList.add("active")
            certificates.classList.remove("active")

            titulo.textContent = "Second Tab"

        } else {
            console.log("Não é possível avançar para a Tab 2 ainda!")
        }
    });

    next2.addEventListener("click", (event) => {

        event.preventDefault()

        if (fullname.value != "" && email.value != ""
            && github.value != "") {

            content_1tab.classList.add("hide")
            content_2tab.classList.add("hide")
            content_3tab.classList.remove("hide")

            basic.classList.remove("active")
            social.classList.remove("active")
            certificates.classList.add("active")

            titulo.textContent = "Third Tab"

        } else {
            console.log("Não é possível avançar para a Tab 3 ainda!")
        }
    });

    finish.addEventListener("click", (event) => {

        event.preventDefault()

        if (fullname.value != "" && email.value != ""
            && github.value != "" && teamName.value != ""
            && institution.value != "" && graduation.value != ""
            && age.value != "") {
            console.log("Submit liberado!")
        } else {
            console.log("Não é possível avançar com o Submit ainda!")
        }
    });

    /* Ending Submits validations */
}