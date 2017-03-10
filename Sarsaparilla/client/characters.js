Template.characters.helpers({
  char_list(){return Characters.find({}).fetch();},
});

Template.createChar.helpers({
  realm_list(){return Realms.find({}).fetch();},
  camp_list(){return Campaigns.find({}).fetch();},
  selected_realm(){
    if (Session.get("chosenRealm")){
      return Session.get("chosenRealm");
    }
    return "Realms";
  },
  selected_camp(){
    if (Session.get("chosenCamp")){
      return Session.get("chosenCamp");
    }
    return "Campaigns";
  },
});

Template.characters.events({
  'click #createChar'(event){
		event.preventDefault();
		Session.set('prompt', 'createChar');
  },
});

Template.createChar.onDestroyed(function(){
  Session.set("chosenRealm", undefined);
  Session.set("chosenCamp", undefined);
});

Template.createChar.events({
  'submit #newChar': function(event) {
    event.preventDefault();
    if (!Session.get("chosenRealm")){
      toastr.error("You need to select a realm to continue.", "Realm not Selected!");
    }
    else if (!Session.get("chosenCamp")) {
      toastr.error("You need to select a campaign to continue.", "Campaign not Selected!");
    }
    else{
      Characters.update(
          {_id : Mongo.ObjectID()},
          {$set:{
            user_Id: Meteor.user(),
            name: event.target.name.value,
            status: true,
            realm: Realms.findOne({name: Session.get("chosenRealm")}),
            campaign: Campaigns.findOne({name: Session.get("chosenCamp")}),
            health: event.target.health.value,
          }},
          {upsert: 'true'}
        );
      Session.set('prompt', 'characters');
    }
  },
  'click  #chosenRealm': function(event) {
    event.preventDefault();
    Session.set("chosenRealm", event.target.innerText);
  },
  'click  #chosenCamp': function(event) {
    event.preventDefault();
    Session.set("chosenCamp", event.target.innerText);
  }
});
