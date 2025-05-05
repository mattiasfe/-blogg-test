function showArticle(Ident) {
    const post = model.data.posts[Ident -1];
    post.showArticleText = !post.showArticleText;
    pages();
}

function changeCategory(category) {
    if(category == 'All Posts') {
        model.inputs.currentCategory = '';
    }else {

        model.inputs.currentCategory = category;
    }
    mainPageView();
}

