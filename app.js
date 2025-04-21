function pages() {
    switch(model.app.currentPage) {
       case 'main': mainPageView(); 
        break;
       case 'furnitureView': furniturePostsView();
        break;
    
    }
}