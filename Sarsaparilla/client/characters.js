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
  }
});

Template.characters.events({
  'click #createChar'(event){
		event.preventDefault();
		Session.set('prompt', 'createChar');
  },
});

Template.createChar.events({
  'submit #newChar': function(event) {
    event.preventDefault();
    Characters.update(
        {_id : Mongo.ObjectID()},
        {$set:{
          user_Id: Meteor.user(),
          name: event.target.name.value,
          status: event.target.status.value,
          realm: Realms.findOne({name: Session.get("chosenRealm")}),
          campaign: event.target.campaign.value,
          health: event.target.health.value,
        }},
        {upsert: 'true'}
      );
    Session.set('prompt', 'characters');
  },
  'click  #chosenRealm': function(event) {
    event.preventDefault();
    Session.set("chosenRealm", event.target.innerText);
  }
});
