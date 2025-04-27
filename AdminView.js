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