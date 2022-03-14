
const aboutMe = "This is about me"; 
const experiences = "This is my experiences";

function renderAboutMe() {
    document.getElementById("main_content").innerHTML = `
    <!-- This content is created by render_mains.js -->
    <main>
        <section id="main_section">
            <p>${aboutMe}</p>
        </section>
    </main>
    `;
}

function renderExperience() {
    document.getElementById("main_content").innerHTML = `
    <!-- This content is created by render_mains.js -->
    <main>
        <section id="main_section">
            <p>${experiences}</p>
        </section>
    </main>
    `;
}
