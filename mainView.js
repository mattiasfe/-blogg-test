function mainPageView() {
    app.innerHTML = /*HTML*/`
        <h1>${showHeadline()}</h1>
        <table class="container">
        <tr class="container">
            ${showNavBarItems()}
        </tr>
    </table>
            ${createPosts()}
    `;
}