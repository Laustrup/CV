function renderHeader() {
    document.getElementById("header_tag").innerHTML = `
        <section id="header-left">
            <a href="javascript:frontPageRedirect();">
                <h1 class="title">Lausts CV</h1>
            </a>
        </section>
        <section id="nav_section">
            <nav id="navs">
                <ul id="nav_links">
                    <li><a href="javascript:profileRedirect();" class="button">Profil</a></li>
                    <li><a href="javascript:educationRedirect();" class="button">Uddannelse</a></li>
                    <li><a href="javascript:experienceRedirect();" class="button">Erfaring</a></li>
                    <li><a href="javascript:skillsRedirect();" class="button">Kompetencer</a></li>
                </ul>
            </nav>
        </section>
        <section id="translate_section">
            <div id="translate_description">
                <h6 class="description">Hvilket sprog ønskes der?:</h6>
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