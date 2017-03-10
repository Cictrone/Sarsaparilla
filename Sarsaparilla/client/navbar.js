Template.navbar.helpers({
  isHome(){
    return "home"==Session.get("prompt");
  },
  isCharacters(){
    return "characters"==Session.get("prompt");
  },
  isCampaigns(){
    return "campaigns"==Session.get("prompt");
  },
  isRealms(){
    return "realms"==Session.get("prompt");
  },
  isMisc(){
    return "misc"==Session.get("prompt");
  },
});

Template.navbar.events({
  'click #home'(event){
    event.preventDefault();
    Session.set('prompt', 'home');
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
  'click #logout'(event){
		event.preventDefault();
    Meteor.logout();
  },
});
