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

function furniturePostsView() {
    let html = '';
    for (const furniture of model.data.furniture) {
        html += /*HTML*/`
            <article>
                <h3>${furniture.header}</h3>
                    <div onclick="showArticleFurniture('${furniture.id}')">
                        <p class="subText">Les mer...</p>
                    </div>
                <img src="${furniture.img}">
                <div>
                    ${furniture.showArticleText ? furniture.article : ''}
                </div>
            </article>
        `;
    }
    return html;
}

