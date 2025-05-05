const app = document.getElementById('app');




function createPosts() {
    let html = '';
    for (const post of model.data.posts) {
        if(post.category == model.inputs.currentCategory) {
        html += /*HTML*/`
        <div class="article-card">
            <h3>${post.header}</h3>
            <img style="width: 300px" src="${post.img}">
            <article class="article-content">
                        <div class="articleText" onclick="showArticle('${post.id}')">
                            ${post.showArticleText ? post.article : ''}
                            <p class="subText">Les mer...</p>
                        </div>
            </article>
        </div>  
        `;
    }
    else if(model.inputs.currentCategory == '') {
        
        html += /*HTML*/`
        <div class="article-card">
            <h3>${post.header}</h3>
            <img style="width: 400px" src="${post.img}" alt="Beskrivelse" class="article-image">
            <article class="article-content">
                        <div class="articleText" onclick="showArticle('${post.id}')">
                        ${post.showArticleText ? post.article : ''}
                        <p class="subText">Les mer...</p>
                        </div>
            </article> 
        </div>
        `;
    }
 } 
    return html;
}



function showNavBarItems() {
    let html = '';
    for(const category of model.data.categorys) {
        html += /*HTML*/`
        <div class="article-container">
            <th onclick="changeCategory('${category.name}')">${category.name}</th>
        </div>
        `;
    }
    return html;
}

function showHeadline() {
    for (const post of model.data.posts) {
        if(post.category == model.inputs.currentCategory) {
        return /*HTML*/`
        <h1>${model.inputs.currentCategory}</h1>
        `;
        }
        else if(model.inputs.currentCategory == '') {
            return /*HTML*/`
            <h1>Welcome</h1>
            `;
        }
    }
}


