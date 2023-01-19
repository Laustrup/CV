
function renderHead() {
    let title = "Laust's CV";

    switch (page) {
        case frontPage: { break; }
        case educationPage: { title += " - Education"; break; }
        case experiencePage: { title += " - Experience"; break; }
        case languagesPage: { title += " - Languages"; break; }
        case profilePage: { title += " - Profile"; break; }
        case projectManagementPage: { title += " - Project Management"; break; }
    }

    document.getElementById("head_title").innerText = title;
}