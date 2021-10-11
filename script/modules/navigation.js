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

    /*  Variables for error messages and its functions   */

    function getErrorMessageTab1() {
        const erroNome = $("#erroNome")
        const erroEmail = $("#erroEmail")
        const erroBirthday = $("#erroBirthday")



        if (fullname.value === "") {
            erroNome.textContent = "Please enter your Name"
            erroNome.classList.add("showError")
        } else {
            erroNome.classList.remove("showError")
            erroNome.textContent = ""
        }

        if (email.value === "") {
            erroEmail.textContent = "Please enter your Email"
            erroEmail.classList.add("showError")
        } else {
            erroEmail.classList.remove("showError")
            erroEmail.textContent = ""
        }

        if (age.value == "") {
            erroBirthday.textContent = "Please enter your Age"
            erroBirthday.classList.add("showError")
        } else {
            erroBirthday.classList.remove("showError")
            erroBirthday.textContent = ""
        }
    }


    function getErrorMessageTab2() {

        const erroGithub = $("#erroGithub")

        if (github.value === "") {
            erroGithub.textContent = "Please enter your GitHub Link"
            erroGithub.classList.add("showError")
        } else {
            erroGithub.classList.remove("showError")
            erroGithub.textContent = ""
        }

    }

    function getErrorMessageTab3() {

        const erroTeamName = $("#erroTeamName")
        const erroInstitution = $("#erroInstitution")
        const erroGraduation = $("#erroGraduation")

        if (teamName.value === "") {
            erroTeamName.textContent = "Please enter your Team Name"
            erroTeamName.classList.add("showError")
        } else {
            erroTeamName.classList.remove("showError")
            erroTeamName.textContent = ""
        }

        if (institution.value === "") {
            erroInstitution.textContent = "Please enter your Institution"
            erroInstitution.classList.add("showError")
        } else {
            erroInstitution.classList.remove("showError")
            erroInstitution.textContent = ""
        }

        if (graduation.value === "") {
            erroGraduation.textContent = "Please enter your Graduation"
            erroGraduation.classList.add("showError")
        } else {
            erroGraduation.classList.remove("showError")
            erroGraduation.textContent = ""
        }

    }

    function getClearMessagesErrorTab1() {
        erroNome.textContent = ""
        erroEmail.textContent = ""
        erroBirthday.textContent = ""
    }

    function getClearMessagesErrorTab2() {
        erroGithub.textContent = ""
    }

    function getClearMessagesErrorTab3() {
        erroTeamName.textContent = ""
        erroInstitution.textContent = ""
        erroGraduation.textContent = ""
    }

    /*  Variables for Age and its function  */

    function calcIdade(data) {
        var d = new Date,
            ano_atual = d.getFullYear(),
            mes_atual = d.getMonth() + 1,
            dia_atual = d.getDate(),
            split = data.split('/'),
            novadata = split[1] + "/" + split[0] + "/" + split[2],
            data_americana = new Date(novadata),
            vAno = data_americana.getFullYear(),
            vMes = data_americana.getMonth() + 1,
            vDia = data_americana.getDate(),
            ano_aniversario = +vAno,
            mes_aniversario = +vMes,
            dia_aniversario = +vDia,
            quantos_anos = ano_atual - ano_aniversario;
        if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
            quantos_anos--;
        }
        return quantos_anos < 0 ? 0 : quantos_anos;
    }

    $('#year').addEventListener('input', function () {
        const day = $('#day');
        const month = $('#month');
        const year = $('#year')

        $('#age').value = calcIdade(`${day.value}/${month.value - 1}/${year.value}`);
    });

    /* Variables for buttons */

    const next1 = $("#next1")
    const next2 = $("#next2")
    const finish = $("#finish")

    basic.addEventListener('click', (x) => {

        if (x.target === basic || x.target.textContent == basic_span) {

            if (fullname.value != "" && email.value != "" && age.value != "") {
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
                getClearMessagesErrorTab2()
            } else {
                console.log("Não é possível avançar a página!")
                getErrorMessageTab1()
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
                getErrorMessageTab1()
                getErrorMessageTab2()
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

            getClearMessagesErrorTab1()
            getClearMessagesErrorTab2()

        } else {
            console.log("Não é possível avançar para a Tab 2 ainda!")
            getErrorMessageTab1()

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

            getClearMessagesErrorTab1()
            getClearMessagesErrorTab2()

        } else {
            console.log("Não é possível avançar para a Tab 3 ainda!")
            getErrorMessageTab2()

        }
    });

    finish.addEventListener("click", (event) => {

        event.preventDefault()

        if (fullname.value != "" && email.value != ""
            && github.value != "" && teamName.value != ""
            && institution.value != "" && graduation.value != ""
            && age.value != "") {
            console.log("Submit liberado!")

            getClearMessagesErrorTab1()
            getClearMessagesErrorTab2()
            getClearMessagesErrorTab3()
        } else {
            console.log("Não é possível avançar com o Submit ainda!")

            getErrorMessageTab3()

        }
    });

    /* Ending Submits validations */
}