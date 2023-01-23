function renderFooter() {
    document.getElementById("footer_tag").innerHTML = `
        <table>
                <tr class="footer_row">
                    <th class="description">Contact info</th>
                </tr>
                <tr class="footer_row">
                    <td class="body_text">Email: laustslaustede@gmail.com</td>
                </tr>
                <tr class="footer_row">
                    <td class="body_text">Telefon: +45 60548098</td>
                </tr>
                <tr class="footer_row">
                    <td class="body_text">Country: Denmark</td>
                </tr>
                <tr class="footer_row">
                    <td class="body_text">Address: <a href="https://www.google.com/maps?client=firefox-b-d&q=n%C3%B8rre+boulevard+98+k%C3%B8ge&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi-8ouNl9j7AhUSXfEDHSQSDuUQ_AUoAXoECAIQAw">
                        Nørre Boulevard 98, 1. tv. 4600 Køge.</a>
                    </td>
                </tr>

            </table>

            <section id="footer_detail_section">
                <section id="goodbye_greeting">
                    <h5 class="description">Thank you for visiting this CV. Looking forward to hear from you.</h5>
                </section>

                <section id="details_of_website">
                    <h6 class="body_text">Created 2022</h6>
                    <p class="small_text">This website is created by an code from an github repository and hosted through github pages.</p>
                    <p class="small_text">The repository can be found at <a href="https://github.com/Laustrup/CV">https://github.com/Laustrup/CV</a></p>
                </section>
            </section>

            <ul id="links">
                <li><p class="description">Links:</p></li>
                <li>
                    <a href="https://github.com/Laustrup"><i class="fa fa-github"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/laust-eberhardt-bonnesen/"><i class="fa fa-linkedin-square"></i></a>
                </li>
            </ul>
    `;
}