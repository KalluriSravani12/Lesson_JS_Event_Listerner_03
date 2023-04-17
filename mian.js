/* Page content*/
const homePageContent = `
<h1>Welcome</h1>
<p id="my_id">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officiis distinctio molestiae praesentium animi eius earum facilis odit. Ratione harum illo et temporibus numquam aut ad velit quas unde alias?</p>
        <p class="my_class">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aspernatur consectetur nulla sequi eveniet odit provident inventore ut repellat reiciendis ducimus cupiditate, distinctio aliquam veniam sint molestias quam? Necessitatibus, quidem?</p>
        <p class=" two classes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis exercitationem saepe laudantium accusantium in. Accusantium reprehenderit repellat numquam ipsam! Beatae illum laborum provident. Accusamus architecto placeat error? Accusantium, voluptatem.</p>

`;

const aboutPageContent= `
<h1> About me</h>
<p> Here you can write about yourself</p>
`;

const hobbiesPageContent= `
    <h1> My hobbies</h1>
    <p> Here you can write about your hobbies</p>
`;
const contactPageContent= `
    <h1> My Contact</h1>
    <p> Contact me</p>
`;

/* Functions*/
// Grab elemnets
const mainContent= document.querySelector("#main-content");
const navLinks = document. querySelectorAll("nav a");

// Add event listerners to all elements in navLinks
navLinks.forEach(link => {
link.addEventListener("Click", event=>{
    event.preventDefault(); // Prevent page reload
    const page= link.dataset.page; //Get the string from each data-page attribute
    setActiveNavLink(link); //Move the "active" class
    updatePageContent(page); //Render new page
});

});
//Way 1 , for of
//Set the "active" class on the page we are currently on
/*function setActiveNavLink(link){
    for(nav of navLinks){
        nav.classList.remove("active");
    }
    link.classList.add("active");
}*/
//Way 2, forEach
function setActiveNavLink(link){
    navLinks.forEach(link => link.classList.remove("active"));
    link.classList.add("active");
}

function updatePageContent(page) {
    switch(page){
        case "home":
            mainContent.innerHTML = homePageContent;
            break;
        case "about":
            mainContent.innerHTML = aboutPageContent;
            break;
        case "hobbies":
            mainContent.innerHTML = hobbiesPageContent;
            break;
        case "contact":
            mainContent.innerHTML = contactPageContent;
            break;
        default:
            mainContent.innerHTML = homePageContent;
            break;
    }



}