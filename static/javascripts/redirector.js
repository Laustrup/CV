/**
 * Will determine whether to run the project locally or GitHub Pages.
 * @type {boolean}
 */
const isLocal = true;

/**
 * By making this the page value, it will be able to redirect to the chosen destination.
 * @type {string}
 */
const frontPage = "FRONTPAGE",
      educationPage = "EDUCATION",
      experiencePage = "EXPERIENCE",
      languagesPage = "LANGUAGES",
      profilePage = "PROFILE",
      projectManagementPage = "PROJECT_MANAGEMENT";

/**
 * A value that determines which page is supposed to be redirected to.
 * May only be another constant value of redirector.js.
 */
let page = frontPage;

/**
 * The path where the project will be deployed with GitHub Pages.
 * @type {string}
 */
const githubPagesPath = "https://laustrup.github.io/CV";

/**
 * The path that the site will be deployed at.
 * Is decided whether it's locally ran or not.
 * @type {string}
 */
const domainPath = isLocal ? localDomainPath : githubPagesPath;

/**
 * Uses a switch to redirect the page and change the URL statically,
 * also renders head, header and footer.
 */
function redirect() {
    renderHead();
    renderHeader();
    renderFooter();

    console.log("Will redirect to " + page);
    switch (page) {
        case frontPage: { changeURL(renderFrontPage(undefined)); break; }
        case educationPage: { changeURL(renderEducation()); break; }
        case experiencePage: { changeURL(renderExperience()); break; }
        case languagesPage: { changeURL(renderLanguages()); break; }
        case profilePage: { changeURL(renderProfile()); break; }
        case projectManagementPage: { changeURL(renderProjectManagement()); break; }
        default: { renderFrontPage("Sorry, couldn't find that content..."); }
    }
}

/**
 * Will redirect the page to the frontpage with the redirect() function.
 */
function frontPageRedirect() {
    page = frontPage;
    redirect();
}

/**
 * Will redirect the page to the education page with the redirect() function.
 */
function educationRedirect() {
    page = educationPage;
    redirect();
}

/**
 * Will redirect the page to the experience page with the redirect() function.
 */
function experienceRedirect() {
    page = experiencePage;
    redirect();
}

/**
 * Will redirect the page to the languages page with the redirect() function.
 */
function languagesRedirect() {
    page = languagesPage;
    redirect();
}

/**
 * Will redirect the page to the profile page with the redirect() function.
 */
function profileRedirect() {
    page = profilePage;
    redirect();
}

/**
 * Will redirect the page to the project management page with the redirect() function.
 */
function projectManagementRedirect() {
    page = projectManagementPage;
    redirect();
}

/**
 * Will change the URL without doing a rendering of the page.
 * @param endpoint The endpoint that is wished to be added to the url.
 */
function changeURL(endpoint) {
    const url = domainPath + "/" + endpoint;
    console.log("URL:",url);
    stickifyHeader();
    stickifyFooter();
    history.pushState({}, null, url);
}

redirect();
