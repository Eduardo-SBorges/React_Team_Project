export default function navigation() {

    const $ = document.querySelector.bind(document)

    const titulo = $(".header-text-2")

    /* Variables for logical navigation */

    const content_form = $("form");

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
    const nickname = $("#nickname")
    const email = $("#email")
    const phone = $("#phone")
    const age = $("#age")
    const day = $("#day")
    const month = $("#month")
    const year = $("#year")
    const terms_input = $("#terms-input")
    const github = $("#github")
    const teamName = $("#teamName")
    const institution = $("#institution")
    const graduation = $("#graduation")
    const linkedin = $("#linkedin")

    /* Variables for modal controller */
    const modal = $(".modal");
    const closeButton = $("#close-model");
    const textModel = $("#text-modal");

    /* Button more*/
    const button_more = $("#my-button-more");
    const content_certificates = $("#certificates");
    let listCertificates = [];
    /* Checkbox validation */

    terms_input.addEventListener('click', () => {
        terms_input.classList.toggle('check-box-actived')
    });


    /*  Variables for error messages and its functions   */

    /* Function to validade output of modal */
    function validadeOutput(output) {
        let saida = output.split(":");
        console.log(saida);
        if (saida[1] == " ") {
            return "";
        }
        return `${(saida[0] + ":" + saida[1])} <br>`;
    }


    function getErrorMessageTab1() {
        const erroNome = $("#erroNome")
        const erroEmail = $("#erroEmail")
        const erroBirthday = $("#erroBirthday")
        const erroCheckbox = $("#erroCheckbox")


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
        if (terms_input.classList.contains("check-box-actived") == false) {
            erroCheckbox.textContent = "Please confirm the terms"
            erroCheckbox.classList.add("showError")
        } else {
            erroCheckbox.classList.remove("showError")
            erroCheckbox.textContent = ""
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
        erroCheckbox.textContent = ""
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
    document.querySelector('#year').addEventListener('input', function () {
        let day = document.querySelector('#day');
        let month = document.querySelector('#month');

        let age_aux = getAge(`${this.value},${month.value},${day.value}`);

        if (age_aux < 0 || age_aux > 110) {
            age_aux = 'Invalid Age';
        }

        console.log(isNaN(parseInt(age_aux)));
        document.querySelector('#age').value = isNaN(parseInt(age_aux))
            ? 'Invalid Age'
            : age_aux;
    });

    $('#year').addEventListener('input', function () {
        const day = $('#day');
        const month = $('#month');
        const year = $('#year')

        $('#age').value = getAge(`${year.value}/${month.value - 1}/${day.value}`)
    });

    /* Variables for Sucess */

    // Obtém o botão close
    var closeModal = document.querySelector("#close");

    // Obtém o spam que terá a mensagem de sucesso
    let textoSucesso = document.querySelector("#texto-sucesso");

    // Obtém o texto tab_certificates que será mudado para sucesso
    let textCertificates = document.querySelector("#certificates_id");

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

            if (fullname.value != "" && email.value != ""
                && age.value != "" && terms_input.classList.contains("check-box-actived") == true) {
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

            if (fullname.value != "" && email.value != "" && age.value != "" && github.value != ""
                && terms_input.classList.contains("check-box-actived") == true) {
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
            && age.value != "" && terms_input.classList.contains("check-box-actived") == true) {
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

        if (fullname.value != "" && email.value != "" && age.value != ""
            && github.value != "" && terms_input.classList.contains("check-box-actived") == true) {

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
            && age.value != "" && terms_input.classList.contains("check-box-actived") == true) {
            console.log("Submit liberado!")

            getClearMessagesErrorTab1()
            getClearMessagesErrorTab2()
            getClearMessagesErrorTab3()

            let outputModel = `Seus dados foram enviados com sucesso! <br> <br>
                               ${validadeOutput("Fullname: " + fullname.value)} 
                               ${validadeOutput("Nickname: " + nickname.value)} 
                               ${validadeOutput("Email: " + email.value)}
                               ${validadeOutput("Phone: " + phone.value)}
                               ${validadeOutput("GitHub: " + github.value)}
                               ${validadeOutput("Team Name: " + teamName.value)}
                               ${validadeOutput("Institution: " + institution.value)}
                               ${validadeOutput("Graduation: " + graduation.value)}
                               ${validadeOutput("Birthday: " + day.value + "/" +
                                                               month.value + "/" + 
                                                               year.value)}
                               ${validadeOutput("Age: " + age.value)}
                               ${validadeOutput("Linkedin: " + linkedin.value)}
                               ${("Certificados: " + listCertificates.join(", "))}`
            console.log(outputModel);
            textModel.innerHTML = outputModel;

             /*
                If show-modal class exists remove and return false
                otherwise, add a class. 
            */

            modal.classList.toggle("show-modal");
            content_form.classList.add("hide");

        } else {
            console.log("Não é possível avançar com o Submit ainda!")

            getErrorMessageTab3()
        }
    });

    closeButton.addEventListener("click", function () {

        /*
             As the class already exists it will be removed from the modal
        */

        //console.log("lista vazia.");
        listCertificates = [];
        modal.classList.toggle("show-modal");
        content_form.classList.remove("hide");
    });

    button_more.addEventListener("click", function(event){
        event.preventDefault();
        if (listCertificates.length < 5){
            listCertificates.push(content_certificates.value);
            console.log(listCertificates);
        } 
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {

            /*
                As the class already exists it will be removed from the modal
            */

            modal.classList.toggle("show-modal");
        }
    });

    /* Ending Submits validations */
}