const app = document.getElementById('app');


function mainPageView() {
    app.innerHTML = /*HTML*/`
        <h1>Velkommen til min blogg</h1>
            ${createPosts()}
    `;
}

function createPosts() {
    let html = '';
    for (const post of model.data.posts) {
        html += /*HTML*/`
             <article>
                <h3>${post.header}</h3>
                    <div onclick="showArticle('${post.id}')">
                        <p class="subText">Les mer...</p>
                    </div>
                <img src="${post.img}">
                <div>
                    ${post.showArticleText ? post.article : ''}
                </div>
            </article>
        `;
    }
    return html;
}