// Contents of mains
const bio = `

<h1 class="title">Dear reader</h1>
<p class="description">My name is Laust. I'm 26 years old.</p>

`;

const experience = `
<p class="description">At the moment I'm studying computerscience at KEA in Copenhagen DK, where I'm learning about programming both teoreticly and hands on.</p>
<p class="description">We are learning fullstack programming, but I'm mostly interested in backup developing.</p>
<p class="description">I'm on the fourth semester at the moment.</p>

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
                            <h3 class="content">Who am I?:</h3>
                                <div class="content">
                                    ${bio}
                                </div>
                        </section>
                        <section>
                            <img src="static/images/laust.jpg">
                        </section>
                    </main>`;

const experiences = `
                    <!-- This content is created by render_mains.js -->
                    <main>
                        <section id="main_section">
                            <h3 class="content">Experiences:</h3>
                                <div class="content">
                                   ${experience}
                                </div>
                        </section>
                        <section>
                            <img src="static/images/laust.jpg">
                        </section>
                    </main>`;

const languages = `
                    <!-- This content is created by render_mains.js -->
                    <main>
                        <section id="main_section">
                            <h3 class="content">Here is the laungages that I've mastered:</h3>
                            <div class="content">
                                ${listOfLanguage}
                            </div>
                        </section>
                    </main>`;

// Functions that will render contents when called.
function renderAboutMe() {document.getElementById("main_content").innerHTML = aboutMe;}
function renderExperience() {document.getElementById("main_content").innerHTML = experiences;}
function renderLaungages() {document.getElementById("main_content").innerHTML = languages;}