// Contents of mains
const bio = `
<h1 class="title">Dear reader</h1>
<p class="body_text">My name is Laust. I'm 26 years old.</p>
`;

const experience = `
<p class="body_text">At the moment I'm studying computerscience at KEA in Copenhagen DK, where I'm learning about programming both teoreticly and hands on.</p>
<p class="body_text">We are learning fullstack programming, but I'm mostly interested in backup developing.</p>
<p class="body_text">I'm on the fourth semester at the moment.</p>
`;

const listOfLanguage = `
<ul class="content">
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
                            <h3 class="title">Who am I?:</h3>
                                <div class="container">
                                    ${bio}
                                </div>
                        </section>
                        <div class="image_container">
                            <img src="static/images/laust.jpg">
                        </div>
                    </main>`;

const experiences = `
                    <!-- This content is created by render_mains.js -->
                    <main>
                        <section id="main_section">
                            <h3 class="title">Experiences:</h3>
                                <div class="container">
                                   ${experience}
                                </div>
                        </section>
                        <div class="image_container">
                            <img src="static/images/laust.jpg">
                        </div>
                    </main>`;

const languages = `
                    <!-- This content is created by render_mains.js -->
                    <main>
                        <section id="main_section">
                            <h3 class="title">Here is the laungages that I've mastered:</h3>
                            <div class="container">
                                ${listOfLanguage}
                            </div>
                        </section>
                        <div class="image_container">
                            <img src="static/images/laust.jpg">
                        </div>
                    </main>`;

// Functions that will render contents when called.
function renderAboutMe() {document.getElementById("main_content").innerHTML = aboutMe;}
function renderExperience() {document.getElementById("main_content").innerHTML = experiences;}
function renderLaungages() {document.getElementById("main_content").innerHTML = languages;}