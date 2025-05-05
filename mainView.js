function mainPageView() {
    app.innerHTML = /*HTML*/`
        <h1>${showHeadline()}</h1>
        <button onclick="adminLoginView()">Admin Login</button>
    <table>
        <tr class="container">
            ${showNavBarItems()}
        </tr>
    </table>
    <div>
        ${createPosts()}
    </div>
    `;
}