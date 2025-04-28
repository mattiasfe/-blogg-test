function pages() {
    switch(model.app.currentPage) {
       case 'main': mainPageView(); 
        break;
        case 'adminLogin' : adminLoginView();
        break;
        case 'admin' : adminView();
    
    }
}

function pageSwitcher(page) {
    model.app.currentPage = page;
    pages();
}