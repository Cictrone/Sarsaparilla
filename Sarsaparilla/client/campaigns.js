Template.campaigns.helpers({
  camp_list(){
    return Campaigns.find({}).fetch();
  },
});
