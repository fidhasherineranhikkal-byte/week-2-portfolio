// let name = prompt("May I know your name?");
//     document.getElementById("para").innerHTML = "Hello, " + name + "!";
function checkForm(event) {
    event.preventDefault(); 
  
    let name = document.getElementById("name0");
    let email = document.getElementById("email0");
    let message = document.getElementById("message0");
    let form = document.getElementById("last");
    let button = document.getElementById("sent");


      console.log("Form submitted"); 
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);


    
    if (name !== "" && email !== "" && message !== "") {
      alert(" Your message is sent!");
      button.innerHTML = "Submitted!";
    } 
    else if( name!==""&& email !==""){
         alert("please enter a message");
    }
    else {
      alert("Form is empty! Resetting...");
      form.reset(); 
      button.innerHTML = "SEND MESSAGE";
    }
  }

  function homeSection(home) {
    const section = document.getElementById("navbar");
        section.scrollIntoView();
        console.log("Scrolled to:", "home page");
}
function getInTouch(ge) {
    const section = document.getElementById("cont");
    section.scrollIntoView(); 
    console.log("Scrolled to:", "contact");
}



  function projectsSection(pro) {
    const section = document.getElementById("proj");
    section.scrollIntoView(); 
    console.log("Scrolled to:", "projects");
}
function contactSection(con){
    const section = document.getElementById("cont");
    section.scrollIntoView(); 
    console.log("Scrolled to:", "contact");
}

function resumeSection(res) {
    const section = document.getElementById("resum");
    section.scrollIntoView(); 
    console.log("Scrolled to:", "Resume ");
}

function skillSection(ski) {
    const section = document.getElementById("skill");
    section.scrollIntoView();
    console.log("Scrolled to:", "skills");
}



function aboutSection(abo) {
    const section = document.getElementById("about");
    section.scrollIntoView();
    console.log("Scrolled to:", "about me");
}
function previewResume(view){
    console.log("preview resume");
}
function downloadPdf(pdf){
    console.log("pdf downloaded");
}