function checkLogin() {
    if(model.inputs.adminLoginPage.username == model.data.accounts.username &&
       model.inputs.adminLoginPage.password == model.data.accounts.password) {
        pageSwitcher('admin');
    }
}