Template.realms.helpers({
  realm_list(){
    return Realms.find({}).fetch();
  },
});

Template.realms.events({
  'click #createRealm'(event){
		event.preventDefault();
		Session.set('prompt', 'createRealm');
  },
});

Template.createRealm.events({
  'submit #newRealm': function(event) {
    event.preventDefault();
    if(Realms.findOne({name: event.target.name.value})){
      toastr.error("You tried to add a realm with the same name as one that already exists!", "Superposition in the Multiverse");
    }
    else{
      Realms.update(
          {_id : Mongo.ObjectID()},
          {$set:{
            name: event.target.name.value,
            lore: event.target.lore.value,
          }},
          {upsert: 'true'}
        );
      Session.set('prompt', 'realms');  
    }
  },
});
