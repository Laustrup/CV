/**
 * Acts as enums to indicate the type of skill.
 * @type {string}
 */
const CODINGSKILL = "CODINGSKILL", FRAMEWORKSKILL = "FRAMEWORKSKILL",
    PROJECTMANAGEMENTFRAMEWORKSKILL = "PROJECTMANAGEMENTFRAMEWORKSKILL";

/**
 * Contains all the different types of languages I have knowledge of.
 * @type {string[]}
 */
const languageTypes = ["General-purpose","Concurrent","Strongly typed","Class-based object-oriented language",
    "Component-oriented programming language","Lightweight", "Interpreted", "Just-in-time compiled programming",
    "Lightweight data-interchange format", "RDBMS", "Structured query language", "Markup language", "Sheet style",
    "Procedural language"];

/**
 * Will find a language type, that there should be sought for.
 * Purpose of this is to secure, that the types will be presented same way.
 * @param type The language typed wished.
 * @returns {string|undefined} The matching language type, if any.
 */
function getLanguageType(type) {
    for (let i = 0; i < languageTypes.length; i++)
        if (type === languageTypes[i])
            return languageTypes[i];
    return undefined;
}

/**
 * Contains all the developers of languages
 * @type {string[]}
 */
const developers = ["Oracle", "Microsoft", "Mozilla foundation", "World wide web consortium", "Eclipse foundation",
    "ANSI X3J11", "VMware", "Meta and community"]

/**
 * Will find a developer, that there should be sought for.
 * Purpose of this is to secure, that the types will be presented same way.
 * @param developer The developer wished.
 * @returns {string|undefined} The matching developer, if any.
 */
function getDeveloper(developer) {
    for (let i = 0; i < developers.length; i++)
        if (developer === developers[i])
            return developers[i];
    return undefined;
}

/**
 * Contains all the languages I have knowledge of.
 * @type const|language
 */
const languages = [{
    title: "Java",
    developer: getDeveloper("Oracle"),
    isOOP: true,
    isSQL: false,
    types: [getLanguageType("General-purpose"), getLanguageType("Concurrent"),
        getLanguageType("Strongly typed"), getLanguageType("Class-based object-oriented language")],
    skill: CODINGSKILL
}, {
    title: "C#",
    developer: getDeveloper("Microsoft"),
    isOOP: true,
    isSQL: false,
    types: [getLanguageType("General-purpose"), getLanguageType("Concurrent"),
        getLanguageType("Strongly typed"), getLanguageType("Class-based object-oriented language"),
        getLanguageType("Component-oriented programming language")],
    skill: CODINGSKILL
}, {
    title: "Javascript",
    developer: getDeveloper("Mozilla foundation"),
    isOOP: true,
    isSQL: false,
    types: [getLanguageType("Lightweight"), getLanguageType("Interpreted"),
        getLanguageType("Just-in-time compiled programming")],
    skill: CODINGSKILL
}, {
    title: "JSON",
    fullTitle: "JavaScript Object Notation",
    developer: getDeveloper("Mozilla foundation"),
    isOOP: true,
    isSQL: false,
    types: [getLanguageType("Lightweight data-interchange format")],
    skill: CODINGSKILL
}, {
    title: "Typescript",
    developer: getDeveloper("Microsoft"),
    isOOP: true,
    isSQL: false,
    types: [getLanguageType("Lightweight data-interchange format"), getLanguageType("Interpreted"),
        getLanguageType("Strongly typed"), getLanguageType("Just-in-time compiled programming")],
    skill: CODINGSKILL
}, {
    title: "MySQL",
    fullTitle: "My structured Query Language",
    developer: getDeveloper("Oracle"),
    isOOP: false,
    isSQL: true,
    types: [getLanguageType("RDBMS"), getLanguageType("Structured query language")],
    skill: CODINGSKILL
}, {
    title: "MSSQL",
    fullTitle: "MicroSoft Structured Query Language",
    developer: getDeveloper("Microsoft"),
    isOOP: false,
    isSQL: true,
    types: [getLanguageType("RDBMS"), getLanguageType("Structured query language")],
    skill: CODINGSKILL
}, {
    title: "HTML",
    fullTitle: "HyperText Markup Language",
    developer: getDeveloper("World wide web consortium"),
    isOOP: false,
    isSQL: false,
    types: [getLanguageType("Markup language")],
    skill: CODINGSKILL
}, {
    title: "CSHTML",
    fullTitle: "C# HyperText Markup Language",
    developer: getDeveloper("Microsoft"),
    isOOP: false,
    isSQL: false,
    types: [getLanguageType("Markup language")],
    skill: CODINGSKILL
}, {
    title: "JSP",
    fullTitle: "Jakarta Server Pages",
    developer: getDeveloper("Eclipse foundation"),
    isOOP: false,
    isSQL: false,
    types: [getLanguageType("Markup language")],
    skill: CODINGSKILL
}, {
    title: "XML",
    fullTitle: "eXtensible Markup Language",
    developer: getDeveloper("World wide web consortium"),
    isOOP: false,
    isSQL: false,
    types: [getLanguageType("Markup language")],
    skill: CODINGSKILL
}, {
    title: "CSS",
    fullTitle: "Cascading Style Sheets",
    developer: getDeveloper("World wide web consortium"),
    isOOP: false,
    isSQL: false,
    types: [getLanguageType("Sheet style")],
    skill: CODINGSKILL
}, {
    title: "C",
    developer: getDeveloper("ANSI X3J11"),
    isOOP: false,
    isSQL: false,
    types: [getLanguageType("Procedural language")],
    skill: CODINGSKILL
}];

/**
 * Will find a language, that there should be sought for.
 * Purpose of this is to secure, that the types will be presented same way.
 * @param title The title of the language wished.
 * @returns {language|undefined} The matching language, if any.
 */
function getLanguage(title) {
    for (let i = 0; i < languages.length; i++)
        if (languages[i].title === title)
            return languages[i];
    return undefined;
}

/**
 * Contains all the coding frameworks I have experience in.
 * @type const|codingFramework
 */
const codingFrameworks = [{
    title: "Spring / Spring Boot",
    developer: getDeveloper("VMware"),
    languages: [getLanguage("Java"),getLanguage("XML"),getLanguage("HTML"),
        getLanguage("Javascript"), getLanguage("Typescript"),getLanguage("JSP"),
        getLanguage("CSS"), getLanguage("MySQL")],
    skill: FRAMEWORKSKILL
}, {
    title: ".NET",
    developer: getDeveloper("Microsoft"),
    languages: [[getLanguage("C#"),getLanguage("CSHTML"), getLanguage("Javascript"),
        getLanguage("Typescript"), getLanguage("CSS"), getLanguage("MSSQL")]],
    skill: FRAMEWORKSKILL
}, {
    title: "React / React Native",
    developer: getDeveloper("Meta and community"),
    languages: [getLanguage("Javascript"), getLanguage("Typescript"), getLanguage("CSS")],
    skill: FRAMEWORKSKILL
}];

/**
 * Contains all the project managing frameworks I have experience in.
 * @type const|projectManagingFramework
 */
const projectManagingFrameworks = [{
    title: "Waterfall",
    isAgile: false,
    skill: PROJECTMANAGEMENTFRAMEWORKSKILL
}, {
    title: "Scrum",
    isAgile: true,
    skill: PROJECTMANAGEMENTFRAMEWORKSKILL
}, {
    title: "XP",
    isAgile: true,
    skill: PROJECTMANAGEMENTFRAMEWORKSKILL
}];