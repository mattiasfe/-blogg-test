function mainPageView() {
    app.innerHTML = /*HTML*/`
        <h1>${model.inputs.currentCategory}</h1>
        <table class="container">
        <tr class="container">
            ${showNavBarItems()}
        </tr>
    </table>
            ${createPosts()}
    `;
}