function sendMail(contactForm){
    emailjs.send("service_5pv2xs7","template_m7z7zjj",{
from_name: contactForm.name.value,
project_request: contactForm.projectsummary.value,
from_email: contactForm.emailaddress.value,
})
.then(function(response){
    console.log("Success", response);
    },
    function(error){
        console.log("Failed", error)
    });
    return false;
}