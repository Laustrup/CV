
// Contents of mains
const bio = "";
const experience = "I øjeblikket læser jeg til datamatiker på KEA, hvor vi lærer både om programmering teoretisk og i praksis, ligeså om Scrum, XP og lignende." +
                    "\nSelve programmeringen har været fullstack, men er mest interesseret i backend delen." + 
                    "\nJeg er på 4. semester i øjeblikket.";
const listOfLaungages = `
<ul>
    <li>
        Java.
    </li>
    <li>
        C#.
    </li>
    <li>
        SQL.
    </li>
    <li>
        C.
    </li>
    <li>
        Javascript.
    </li>
    <li>
        Typescript.
    </li>
    <li>
        HTML/CSHTML.
    </li>
    <li>
        CSS.
    </li>
</ul>`;

const aboutMe = `
                    <!-- This content is created by render_mains.js -->
                    <main>
                        <section id="main_section">
                            <h3>Who am I?:</h3>
                            <p>${bio}</p>
                            <img src="static/images/laust.jpg">
                        </section>
                    </main>`;

const experiences = `
                    <!-- This content is created by render_mains.js -->
                    <main>
                        <section id="main_section">
                            <h3>Experiences</h3>
                            <p>${experience}</p>
                            <img src="static/images/laust.jpg">
                        </section>
                    </main>`;

const laungages = `
                    <!-- This content is created by render_mains.js -->
                    <main>
                        <section id="main_section">
                            <h3>Here is the laungages that I've mastered:</h3>
                            <div>
                                ${listOfLaungages}
                            </div>
                        </section>
                    </main>`;

// Functions that will render contents when called.
function renderAboutMe() {document.getElementById("main_content").innerHTML = aboutMe;}
function renderExperience() {document.getElementById("main_content").innerHTML = experiences;}
function renderLaungages() {document.getElementById("main_content").innerHTML = laungages;}