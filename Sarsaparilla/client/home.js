Template.home.helpers({
});

Template.home.events({
  'click #logout'(event){
		event.preventDefault();
    Meteor.logout();
  },
  'click #characters'(event){
		event.preventDefault();
		Session.set('prompt', 'characters');
  },
  'click #campaigns'(event){
    event.preventDefault();
    Session.set('prompt', 'campaigns');
  },
  'click #realms'(event){
    event.preventDefault();
    Session.set('prompt', 'realms');
	},
  'click #misc'(event){
    event.preventDefault();
    Session.set('prompt', 'misc');
  },
});
