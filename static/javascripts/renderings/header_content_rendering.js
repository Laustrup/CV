function renderHeader() {
    document.getElementById("header_tag").innerHTML = `
        <section id="header-left">
            <div>
                <a href="javascript:frontPageRedirect();">
                    <h1 class="title">Lausts CV</h1>
                </a>
                <p class="description">Welcome to my online CV, feel free to browse through each chapter.</p>
            </div>
            <div id="colourMode_button"></div>
        </section>
        <section id="nav_section">
            <ul id="navs">
                <li><a href="javascript:profileRedirect();" class="button">Profil</a></li>
                <li><a href="javascript:educationRedirect();" class="button">Uddannelse</a></li>
                <li><a href="javascript:experienceRedirect();" class="button">Erfaring</a></li>
                <li><a href="javascript:skillsRedirect();" class="button">kompetencer</a></li>
                <li><a href="javascript:projectManagementRedirect();" class="button">Project styring</a></li>
            </ul>
        </section>
        <section id="translate_section">
            <div id="translate_description">
                <h4 class="title">Hvilket sprog ønskes der?:</h4>
                <p class="small_text">Der bruges Google Translate til at oversætte siden.</p>
            </div>
            <form id="translate_form">
                <label for="english">EN</label>
                <input type="radio" id="english" oninput="translateEnglish()">
                <label for="danish">DK</label>
                <input type="radio" id="danish" oninput="translateDanish()">
            </form>
        </section>
    `;
}