function mainPageView() {
    app.innerHTML = /*HTML*/`
        <h1>${showHeadline()}</h1>
        <button onclick="adminLoginView()">Admin Login</button>
        <table class="container">
        <tr class="container">
            ${showNavBarItems()}
        </tr>
    </table>
            ${createPosts()}
    `;
}