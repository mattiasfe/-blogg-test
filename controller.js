function showArticle(Ident) {
    const post = model.data.posts[Ident -1];
    post.showArticleText = !post.showArticleText;
    pages();
}
function showArticleFurniture(Ident) {
    const furniture = model.data.furniture[Ident -1];
    furniture.showArticleText = !furniture.showArticleText;
    pages();
}