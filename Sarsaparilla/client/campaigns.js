Template.campaigns.helpers({
  camp_list(){
    return Campaigns.find({}).fetch();
  },
});

Template.campaigns.events({
  'click #createCampaign'(event){
		event.preventDefault();
		Session.set('prompt', 'createCampaign');
  },
});

Template.createCampaign.events({
  'submit #newCampaign': function(event) {
    event.preventDefault();
    let confirmation = true;
    if(Campaigns.findOne({name: event.target.name.value})){
      confirmation = confirm("You are being an idiot, are u sure you want to be an idiot?");
    }
    Campaigns.update(
        {_id : Mongo.ObjectID()},
        {$set:{
          name: event.target.name.value,
          date: moment(new Date()).format("MM.DD.YYYY"),
        }},
        {upsert: 'true'}
      );
    Session.set('prompt', 'campaigns');
  },
});
