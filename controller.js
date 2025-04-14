function showArticle(Ident) {
    const post = model.data.posts[Ident -1];
    post.showArticleText = !post.showArticleText;
    pages();
}