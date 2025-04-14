function mainPageView() {
    app.innerHTML = /*HTML*/`
        <h1>Velkommen til min blogg</h1>
        <table class="container">
        <tr class="container">
            <th>Furniture</th>
            <th>DIY ideas</th>
            <th>Interior Designs</th>
        </tr>
    </table>
            ${createPosts()}
    `;
}