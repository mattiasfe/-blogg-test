const app = document.getElementById('app');




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

