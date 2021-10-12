export default function navigation() {

    const $ = document.querySelector.bind(document)

    const titulo = $(".header-text-2")

    /* Variables for logical navigation */

    const content_certificates = $("#certificates")

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
    const github = $("#github")
    const teamName = $("#teamName")
    const institution = $("#institution")
    const graduation = $("#graduation")
    const linkedin = $("#linkedin")

    /* Variables for modal controller */
    const modal = $(".modal");
    const closeButton = $("#close-model");
    const textModel = $("#text-modal");
    const certificatesText = $("#certificates");
    const buttonMore = $("#button-more");
    let listCertificates = [];

    function validadeOutput(output) {
        let saida = output.split(":");
        console.log(saida);
        if (saida[1] == " ") {
            return "";
        }
        return `${(saida[0] + ":" + saida[1])} <br>`;
    }

    /*  Variables for error messages   */

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


    function getErrorMessageTab2(){
    
        const erroGithub = $("#erroGithub")

        if (github.value === "") {
            erroGithub.textContent = "Please enter your GitHub Link"
            erroGithub.classList.add("showError")
        } else {
            erroGithub.classList.remove("showError")
            erroGithub.textContent = ""
        }

    }

    function getErrorMessageTab3(){
    
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
                               ${validadeOutput("Linkedin: " + linkedin.value)}`
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

        modal.classList.toggle("show-modal");
        content_form.classList.remove("hide");
    });


    buttonMore.addEventListener("click", function(){
        console.log("Black Box Testing...");
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