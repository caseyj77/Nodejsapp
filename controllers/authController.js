exports.getLogin = (req, res, next) => {
    res.render('login', {
        path: '/login',
        pageTitle: 'Login'
    });
};

exports.getAccount = (req, res, next) => {
    res.render('account-create', {
        path: '/signup',
        pageTitle: 'Create Your Account'
    });
};
