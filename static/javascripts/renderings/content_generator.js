/**
 * Month used for being generated as enum values.
 * @type {string}
 */
const JANUARY = "Januar",
    FEBRUARY = "Februar",
    MARCH = "Marts",
    APRIL = "April",
    MAY = "Maj",
    JUNE = "Juni",
    JULY = "Juli",
    AUGUST = "August",
    SEPTEMBER = "September",
    OCTOBER = "Oktober",
    NOVEMBER = "November",
    DECEMBER = "December";

/**
 * Determines whether I'm looking for a job or not.
 * @type {boolean}
 */
const isAvailable = true;

/**
 * Will be used to describe the job position, that I'm currently employed at, if I'm available, it will be undefined.
 * @type {undefined}
 */
const currentCompany = !isAvailable ? "" : undefined,
    currentPosition = !isAvailable ? "" : undefined;

/**
 * The id of the main tag of from index.html.
 * @type {string}
 */
const mainTagId = "main";

/**
 * Will change the DOM of the main tag in the index.html with an innerHTML.
 * @param html The HTML that is wished to be rendered. Must be surrounded with ``.
 */
function changeMain(html) {
    if (html !== undefined)
        document.getElementById(mainTagId).innerHTML = html;
}

/**
 * Generates a field that is to be used for mentioning experience or related subject.
 * @param content Contains the values that is wished to be rendered, including
 *                  company, title, startMonth, startYear, endMonth, endYear, isVoluntary, isCurrent and description.
 * @returns {string} The field generated from content, surrounded with `` and a div with the class "content_field".
 */
function generateField(content) {
    return `
        <div class="content_field">
            <h3 class="field_company">${content.company}</h3>
            <h4 class="field_title">${content.title}</h4>
            ${content.isVoluntary !== undefined && content.isVoluntary ? `<p class="small_text">Frivillig</p>` : ``}
            <h5 class="period">Period: ${content.startMonth} ${content.startYear} -
                ${content.isCurrent === undefined || !content.isCurrent ? content.endMonth + " " + content.endYear : "nuværende"}
            </h5>
            <p class="description">${content.description}</p>
        </div>
    `;
}
