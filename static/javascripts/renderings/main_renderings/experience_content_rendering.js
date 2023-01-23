/**
 * Renders the different experience fields in the main tag of index.html.
 * @returns {string} The endpoint for the URL.
 */
function renderExperience() {
    const descriptions = {
        infomedia: "",
        appAcademy: "",
        redBarnet: ""
    };

    const infomedia = {
        company: "Infomedia",
        title: "Praktikant",
        startMonth: AUGUST,
        startYear: 2022,
        endMonth: NOVEMBER,
        endYear: 2022,
        isCurrent: false,
        isVoluntary: false,
        description: descriptions.infomedia
    },
    appAcademy = {
        company: "App Academy - Java Spring / Spring Boot",
        title: "Kursus konsulent",
        startMonth: JUNE,
        startYear: 2022,
        endMonth: AUGUST,
        endYear: 2022,
        isVoluntary: false,
        isCurrent: false,
        description: descriptions.appAcademy
    },
    redBarnet = {
        company: "App Academy - Java Spring / Spring Boot",
        title: "Kursus konsulent",
        startMonth: NOVEMBER,
        startYear: 2019,
        endMonth: APRIL,
        endYear: 2021,
        isVoluntary: true,
        isCurrent: false,
        description: descriptions.redBarnet
    };

    changeMain(`
        <section id="experience_section">
            <div id="experience_header">
                <h2 class="title">Erfaring</h2>
                <p class="description">Herunder bliver de forskellige punkter, hvor jeg har tilskaffet mig erfaring beskrevet.</p>
            </div>
            <div id="experience_fields">
                ${generateField(infomedia)}
                ${generateField(appAcademy)}
                ${generateField(redBarnet)}
            </div>
        </section>
    `);

    return "experience";
}