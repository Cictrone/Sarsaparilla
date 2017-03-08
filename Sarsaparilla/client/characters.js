Template.characters.helpers({
  char_list(){return Characters.find({}).fetch();},
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
          realm: event.target.realm.value,
          campaign: event.target.campaign.value,
          health: event.target.health.value,
        }},
        {upsert: 'true'}
      );
    Session.set('prompt', 'characters');
  },
});
