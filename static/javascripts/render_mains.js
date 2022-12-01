
// Contents of mains
const bio = `

<h1>Dear reader</h1>
<p>My name is Laust. I'm 26 years old.</p>

`;

const experience = `
<p>At the moment I'm studying computerscience at KEA in Copenhagen DK, where I'm learning about programming both teoreticly and hands on.</p>
<p>We are learning fullstack programming, but I'm mostly interested in backup developing.</p>
<p>I'm on the fourth semester at the moment.</p>

`;

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
                                <div id="content">
                                    ${bio}
                                </div>
                            <img src="static/images/laust.jpg">
                        </section>
                    </main>`;

const experiences = `
                    <!-- This content is created by render_mains.js -->
                    <main>
                        <section id="main_section">
                            <h3>Experiences:</h3>
                                <div id="content">
                                   ${experience}
                                </div>
                            <img src="static/images/laust.jpg">
                        </section>
                    </main>`;

const laungages = `
                    <!-- This content is created by render_mains.js -->
                    <main>
                        <section id="main_section">
                            <h3>Here is the laungages that I've mastered:</h3>
                            <div id="content">
                                ${listOfLaungages}
                            </div>
                        </section>
                    </main>`;

// Functions that will render contents when called.
function renderAboutMe() {document.getElementById("main_content").innerHTML = aboutMe;}
function renderExperience() {document.getElementById("main_content").innerHTML = experiences;}
function renderLaungages() {document.getElementById("main_content").innerHTML = laungages;}