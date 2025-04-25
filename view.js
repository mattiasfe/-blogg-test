const app = document.getElementById('app');




function createPosts() {
    let html = '';
    for (const post of model.data.posts) {
        if(post.category == model.inputs.currentCategory) {
        html += /*HTML*/`
        <article>
                <h3>${post.header}</h3>
                    <div onclick="showArticle('${post.id}')">
                        <p class="subText">Les mer...</p>
                    </div>
                    <div>
                        ${post.showArticleText ? post.article : ''}
                    </div>
                <img style="width: 300px" src="${post.img}">
            </article>
        `;
    }
    else if(model.inputs.currentCategory == '') {
        
        html += /*HTML*/`
            <article>
                <h3>${post.header}</h3>
                    <div onclick="showArticle('${post.id}')">
                        <p class="subText">Les mer...</p>
                    </div>
                    <div>
                        ${post.showArticleText ? post.article : ''}
                    </div>
                <img style="width: 300px" src="${post.img}">
            </article>
        `;
    }
 } 
    return html;
}



function showNavBarItems() {
    let html = '';
    for(const category of model.data.categorys) {
        html += /*HTML*/`
            <th onclick="changeCategory('${category.name}')">${category.name}</th>
        `;
    }
    return html;
}


/*function furniturePostsView() {
    let html = '';
    for (const furnitur of model.data.furniture) {
        html += `
            <article>
                <h3>${furnitur.header}</h3>
                    <div onclick="showArticleFurniture('${furnitur.id}')">
                        <p class="subText">Les mer...</p>
                    </div>
                <img src="${furnitur.img}">
                <div>
                    ${furnitur.showArticleText ? furnitur.article : ''}
                </div>
            </article>
        `;
   }
    return html;
}*/

