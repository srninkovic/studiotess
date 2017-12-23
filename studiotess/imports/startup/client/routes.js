import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/reparaties/rep.js';
import '../../ui/pages/contact/contact.js';
import '../../ui/pages/sustainfashion/sustainfashion.js';
// import '../../ui/pages/accessoires/accessoires.js';
// import '../../ui/pages/algemene/algemene.js';
// import '../../ui/pages/prijzen/prijzen.js';
// import '../../ui/pages/cursus/cursus.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/reparaties', {
  name: 'App.rep',
  action() {
    BlazeLayout.render('App_body', { main: 'App_rep' });
  },
});

FlowRouter.route('/contact', {
  name: 'App.contact',
  action() {
    BlazeLayout.render('App_body', { main: 'App_contact' });
  },
});

FlowRouter.route('/sustainable-fashion', {
  name: 'App.coll',
  action() {
    BlazeLayout.render('App_body', { main: 'App_coll' });
  },
});

FlowRouter.route('/accessoires', {
  name: 'App.acc',
  action() {
    BlazeLayout.render('App_body', { main: 'App_acc' });
  },
});

FlowRouter.route('/algemenevoorwaarden', {
  name: 'App.alg',
  action() {
    BlazeLayout.render('App_body', { main: 'App_alg' });
  },
});

FlowRouter.route('/prijzenlijst', {
  name: 'App.prijs',
  action() {
    BlazeLayout.render('App_body', { main: 'App_prijs' });
  },
});

FlowRouter.route('/cursus', {
  name: 'App.curs',
  action() {
    BlazeLayout.render('App_body', { main: 'App_curs' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
