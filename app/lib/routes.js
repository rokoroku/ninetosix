Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/shop/:_id/', {
  name: 'shop',
  controller: 'ShopController',
  where: 'client'
});

Router.route('/category/:_id/', {
  name: 'category',
  controller: 'CategoryController',
  where: 'client'
});

Router.route('/review/', {
  name: 'review',
  controller: 'ReviewController',
  where: 'client'
});
