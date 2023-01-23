/**
 * Decides what skills will be filtered by.
 * @type {*[]}
 */
let filterings = [];

/**
 * Adds the inputs of filtering fields to filterings.
 */
function filtering() {
    const languageTypes = document.getElementById("language_types").value,
            isOOP = document.getElementById("is_oop").value,
            isSQL = document.getElementById("is_sql").value,
            developer = document.getElementById("developer").value,
            onlyAgile = document.getElementById("only_agile").value;

    filterings = [languageTypes,isOOP,isSQL,developer,onlyAgile];

    renderSkills();

    document.getElementById("language_types").value = languageTypes;
    document.getElementById("is_oop").value = isOOP;
    document.getElementById("is_sql").value = isSQL;
    document.getElementById("developer").value = developer;
    document.getElementById("only_agile").value = onlyAgile;
}

/**
 * Renders the different languages in the main tag of index.html.
 * @returns {string} The endpoint for the URL.
 */
function renderSkills() {
    function displaySkills(data) {
        let html = ``;

        function dataIsAllowed(data,rule) {
            if (rule === undefined || rule === "")
                return true;
            for (let i = 0; i < data.length; i++)
                if (data[i] === rule)
                    return true;
            return false;
        }
        data.filter((element) => {
            switch (element.skill) {
                case CODINGSKILL: {
                    if (filterings.length >= 4)
                        return dataIsAllowed(element.type,filterings[0]) && filterings[1] === element.isOOP
                            && filterings[2] === element.isSQL && filterings[3] === element.developer;
                    return true;
                }
                case FRAMEWORKSKILL: {
                    if (filterings.length > 0)
                        return filterings[3] === element.developer;
                    return true;
                }
                case PROJECTMANAGEMENTFRAMEWORKSKILL: {
                    if (filterings.length >= 5)
                        return !filterings[4] || element.isAgile;
                    return true;
                }
                default: {
                    return true;
                }
            }
        });
        for (let i = 0; i < data.length; i++)
            html += `<p class="body_text">${data[i].title}</p>`;
        return html;
    }

    function renderFilteringSection() {
        function renderLanguageTypeOptions() {
            let html = ``;
            languageTypes.forEach((type) => html += `<option value="${type}">${type}</option>`);
            return html;
        }

        function renderDeveloperOptions() {
            let html = ``;
            developers.forEach((developer) => html += `<option value="${developer}">${developer}</option>`);
            return html;
        }

        return `
            <h5 class="title">Filtering</h5>
            <label for="language_types">Type af sprog:</label>
            <input list="language_types_data" id="language_types"/>
            <datalist id="language_types_data" oninput="filtering()">
                ${renderLanguageTypeOptions()}
            </datalist>
            <label for="is_oop">is object orientated programming:</label>
            <input type="checkbox" id="is_oop" oninput="filtering()">
            <label for="is_sql">Kun SQL:</label>
            <input type="checkbox" id="is_sql" oninput="filtering()">
            <label for="developer">Typer af sprog:</label>
            <input list="developer_data" id="developer"/>
            <datalist id="developer_data" oninput="filtering()">
                ${renderDeveloperOptions()}
            </datalist>
            <label for="only_agile">Kun agile projectstyringer:</label>
            <input title="checkbox" id="only_agile" oninput="filtering()">
        `;
    }

    changeMain(`
        <section id="skills_section">
            <section id="filtering_section">
                ${renderFilteringSection()}
            </section>
            <hr />
            <section id="skills_content_section">
                <section class="skill_section" id="languages_section">
                    <div>
                        <h6 class="title">Sprog</h6>
                    </div>
                    ${displaySkills(languages)}
                </section>
                <section id="frameworks_section">
                    <section class="skill_section" id="coding_frameworks_section">
                        <div>
                            <h6 class="title">Kodnings frameworks</h6>
                        </div>
                        ${displaySkills(codingFrameworks)}
                    </section>
                    <section class="skill_section" id="project_management_framework_section">
                        <div>
                            <h6 class="title">Projekt frameworks</h6>
                        </div>
                        ${displaySkills(projectManagingFrameworks)}
                    </section>
                </section>
            </section>
        </section>
    `);

    return "skills";
}
