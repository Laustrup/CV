/**
 * Renders the different education fields in the main tag of index.html.
 * @returns {string} The endpoint for the URL.
 */
function renderEducation() {
    const descriptions = {
        hf: "",
        dtu: "",
        kea: ""
    };

    const hf = {
        company: "Frederiksberg HF",
        title: "2 årig gymnasiel uddannelse.",
        startMonth: AUGUST,
        startYear: 2017,
        endMonth: JULY,
        endYear: 2019,
        isCurrent: false,
        isVoluntary: false,
        description: descriptions.hf
    },
    dtu = {
        company: "Danmarks tekniske universitet",
        title: "Bachelor",
        startMonth: SEPTEMBER,
        startYear: 2019,
        endMonth: JULY,
        endYear: 2020,
        isCurrent: false,
        isVoluntary: false,
        description: descriptions.dtu
    },
    kea = {
        company: "Københavns erhvervsakademi",
        title: "Mellemlang videregående uddannelse",
        startMonth: SEPTEMBER,
        startYear: 2020,
        endMonth: JANUARY,
        endYear: 2023,
        isCurrent: false,
        isVoluntary: false,
        description: descriptions.kea
    }

    changeMain(`
        <section id="education_section">
            <div id="education_header">
                <h2 class="title">Uddannelse</h2>
                <p class="description">Herunder bliver de forskellige punkter, hvor jeg har tilskaffet mig uddannelse beskrevet.</p>
            </div>
            <div id="education_fields">
                ${generateField(hf)}
                ${generateField(dtu)}
                ${generateField(kea)}
            </div>
        </section>
    `);

    return "education";
}