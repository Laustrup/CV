/**
 * Renders the profile section in the main tag of index.html.
 * @returns {string} The endpoint for the URL.
 */
function renderProfile() {
    const profileContent = "Jeg er en god samarbejder, både arbejdsmæssigt og socialt, " +
        "på en alder af 27 år, som også er ansvarsfuld, pligtopfyldende og arbejdsom." +
        "Gennem uddannelse er jeg lært indenfor fullstack, hvor jeg har mit fokus på backend, " +
        "hvilket også indebærer testing og agil projektstyring." +
        "Både gennem nogle praktiske forløb hos KEA og praktikperioden har jeg fået arbejdserfaring, " +
        "som har gjort mig klar i arbejdsmiljøet.";

    changeMain(`
        <section id="profile_section">
            <h2 class="title">Profil</h2>
            <p class="description">Lidt om mig</p>
            <hr />
            <p class="body_text">${profileContent}</p>
        </section>
    `);

    return "profile";
}