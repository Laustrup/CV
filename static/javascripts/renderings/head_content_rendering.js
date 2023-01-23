
function renderHead() {
    let title = "Laust's CV";

    switch (page) {
        case frontPage: { break; }
        case educationPage: { title += " - Education"; break; }
        case experiencePage: { title += " - Experience"; break; }
        case skillsPage: { title += " - Skills"; break; }
        case profilePage: { title += " - Profile"; break; }
    }

    document.getElementById("head_title").innerText = title;
}