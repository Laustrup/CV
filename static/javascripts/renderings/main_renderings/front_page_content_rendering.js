/**
 * Renders the frontpage in the main tag of index.html.
 * @param message A message that is wished to be displayed.
 * @returns {string} The endpoint for the URL.
 */
function renderFrontPage(message) {
    changeMain(`
        <section id="frontpage_section">
            <h1 class="title">Velkommen til mit CV.</h1>
            <hr />
            <p class="description">
                Udforsk de forskellige punkter i headeren, hvor de ville blive vist her
                eller læs mine kontaktoplysinger nederst i footeren.
                Der er mulighed for at oversætte via. google translate her på siden, hvis det foretrækkes.
                Hvis du ville tilbage til denne frontpage, skal du blot trykke på titlen i headeren.
            </p>
            <p class="description">
                ${isAvailable ? "I øjeblikket er jeg ledig på arbejdetsmarkedet og søger efter jobs. " +
                "Der kan læses videre angående hvad jeg søger under min profil."
                :
                "Situationen er nu således, at jeg arbejder for " + currentCompany + " som " + currentPosition +
                " og derfor ikke er på udkig efter noget nyt arbejde."}
            </p>
            ${message !== undefined ? `<p class="small_text">${message}</p>` : ``}
        </section>
    `);

    return "welcome";
}