Template.realms.helpers({
  realm_list(){
    return Realms.find({}).fetch();
  },
});
