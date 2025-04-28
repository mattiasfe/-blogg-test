function adminView() {
    app.innerHTML = /*HTML*/`
        <h1>Admin</h1>

        <table>
            <div>
               Legg til bilde:<input type="file">
            </div>
            <div>
                Legg til Overskrift:<input type="text" placeholder="skriv inn Overskriften">
            </div>
            <div>
                Legg til Article:<input type="text" placeholder="skriv inn article tekst">
            </div>
        </table>
    `;
}

function adminLoginView() {
    app.innerHTML = /*HTML*/`
        <div>
            Bruker Navn:<input type="text" oninput="model.inputs.adminLoginPage.username = this.value"><br>
            Passord:<input type="text" oninput="model.inputs.adminLoginPage.password = this.value"><br>
            <button onclick="checkLogin()">Submit</button>
        </div>
    `;
}