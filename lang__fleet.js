// Create a function to change
    // the hash value of the page
    function changeLanguage(lang) {
        if (lang == "eng") {
            sessionStorage.setItem("lang","eng");
        } else {
            sessionStorage.setItem("lang","hr");
        }
        location.reload();
        }


const languageList = document.querySelector(".lang-change__dropdown");


/// CONTENT 
const vehicleFleetPageHeader = document.querySelector("#vehicle-fleet-page-header");
const vehicleFleetPageText = document.querySelector("#vehicle-fleet-page-text");
const vehicleFleetPageFleetSectionHeader = document.querySelector("#vehicle-fleet-page-fleet-section-header");
const vehicleFleetPageFleetSectionText = document.querySelector("#vehicle-fleet-page-fleet-section-text");


// LINKS 
const contactUsPageLink = document.querySelectorAll("#contact-us-page-link")
const homePageLink = document.querySelectorAll("#home-page-link")
const aboutUsPageLink = document.querySelectorAll("#about-us-page-link")
const vehicleFleetPageLink = document.querySelectorAll("#vehicle-fleet-page-link")
const signUpPageLink = document.querySelectorAll("#sign-up-page-link")
const rulesOfProcedurePage = document.querySelector("#rules-of-procedure-page")


// BUTTONS 
const signUpButton = document.querySelector(".sign-up-button");
const contactUsButton = document.querySelector("#contact-us-button")

// CONTACT FORM CONTENT

const errorHintName = document.querySelector(".error-hint-name");
const errorHintEmail = document.querySelector(".error-hint-email");
const successText = document.querySelector(".success-text")

// 

const signUpName = document.querySelector("#name");
const signUpEmail = document.querySelector("#email");
const signUpPhone = document.querySelector("#phone");
const signUpMessage = document.querySelector("#message");




var language = {
    eng: {        
              // VEHICLE FLEET TEXT ENGLISH
              vehicleFleetPageHeader: "CHOOSE THE CAR YOU WANT TO DRIVE",
              vehicleFleetPageText: "In our offer of cars, there are several different models in order to better adapt to the needs of our suppliers. Our fleet is constantly growing due to the increased volume of work, and we will soon be offering electric bicycles and scooters.",
              vehicleFleetPageFleetSectionHeader: "Choices of more than 40+ cars",
              vehicleFleetPageFleetSectionText: "Our fleet is growing as our staff grows. Depending on your needs, you can choose one of the 3 models in our offer. We offer the Opel Astra for maximum driving comfort, and our Toyota Aygo for low city consumption.",
              

              // BUTTONS 
              contactUsButton: "Contact us",
              signUpButton: "SIGN UP",
      
              // LINKS 
              homePageLink: "Home",
              aboutUsPageLink: "About us",
              contactUsPageLink: "Contact us",
              vehicleFleetPageLink: "Vehicle Fleet",
              signUpPageLink: "Sign up",
              rulesOfProcedurePage: "Rules of Procedure",


              // SIGN UP FORM 
              signUpName: "Name & Surname",
              signUpPhone: "Phone",
              signUpMessage: "Message"



    },
    hr: {
              // CONTENT 
              vehicleFleetPageHeader: "BIRAJ AUTO KOJIM ??ELI?? VOZITI",
              vehicleFleetPageText: "U na??oj ponudi automobila se nalazi nekoliko razli??itih modela kako bismo se ??to bolje prilagodili potrebama na??ih dostavlja??a. Na??a flota kontinuirano raste zbog pove??anog obujma posla, a uskoro ??emo u ponudi imati elektri??ne bicikle i skutere.",
              vehicleFleetPageFleetSectionHeader: "Izbor od 40+ automobila",
              vehicleFleetPageFleetSectionText: "Na??a flota se pove??ava kako nam raste broj zaposlenika. Ovisno o tvojim potrebama mo??e?? izabrati neki od 3 modela koji se nalaze u na??oj ponudi. Za maksimalnu udobnost u vo??nji nudimo Opel Astru, a za malu potro??onju pri gradskoj vo??nji tu su na??e Toyote Aygo.",

              // BUTTONS 
              contactUsButton: "Javi nam se!",
              signUpButton: "PRIJAVI SE",


              // LINKS 

              homePageLink : "Po??etna",
              aboutUsPageLink: "O nama",
              contactUsPageLink: "Kontakti",
              vehicleFleetPageLink: "Vozni park",
              signUpPageLink: "Prijavi se",
              rulesOfProcedurePage: "Pravilnik o radu",
        
              // SIGN UP FORM 
        
              signUpName: "Ime i Prezime",
              signUpPhone: "Mobitel",
              signUpMessage: "Poruka"





    }
    }

 
if (sessionStorage.getItem("lang") == "eng") {

    languageList.innerHTML = '<li class="active-lang" onClick="changeLanguage(\'eng\')"><a href="#" class="eng">English</a></li><li onClick="changeLanguage(\'hr\')"><a href="#" class="hr">Croatian</a></li>';

    vehicleFleetPageHeader.textContent =
    language.eng.vehicleFleetPageHeader
    
    vehicleFleetPageText.textContent =
    language.eng.vehicleFleetPageText

    vehicleFleetPageFleetSectionHeader.textContent =
    language.eng.vehicleFleetPageFleetSectionHeader

    vehicleFleetPageFleetSectionText.textContent =
    language.eng.vehicleFleetPageFleetSectionText

    contactUsButton.textContent =
    language.eng.contactUsButton

    signUpButton.textContent =
    language.eng.signUpButton

    homePageLink.textContent =
    language.eng.homePageLink

    aboutUsPageLink.textContent =
    language.eng.aboutUsPageLink

    contactUsPageLink.textContent =
    language.eng.contactUsPageLink

    vehicleFleetPageLink.textContent =
    language.eng.vehicleFleetPageLink

    signUpPageLink.textContent =
    language.eng.signUpPageLink

    rulesOfProcedurePage.textContent =
    language.eng.rulesOfProcedurePage

    signUpName.textContent =
    language.eng.signUpName

    signUpPhone.textContent =
    language.eng.signUpPhone

    signUpMessage.textContent =
    language.eng.signUpMessage

}

    else {
           
languageList.innerHTML = 
'<li class="active-lang" onClick="changeLanguage(\'hr\')"><a href="#" class="hr">Croatian</a></li> <li  onClick="changeLanguage(\'eng\')"><a href="#" class="eng">English</a></li>';

    }
