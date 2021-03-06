Template.realmCard.helpers({
  profilePic(){
    return Images.findOne({'_id': this.profile.image});
  },
  hasProfilePic(){
    if(this.profile){
      return true;
    }
    return false;
  },
  realmCardID(){
    return "realmCard-"+this._id;
  },
});

Template.realmCard.events({
   'change #myPicInput' (event){
     var that = this;
      FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
          if (err){
             // handle error
          } else {
            var imagesURL = {
              "profile.image": fileObj._id
            };
            if(this.profile){
              // removes old pic from db
              Images.remove({_id: this.profile.image});
            }
            Realms.update(that._id, {$set: imagesURL});
          }
        });
     });
   },
   'click #changePic'(event){
     if(Meteor.userId()){ //if logged in
       //The folowwing will make sure we change the correct card picture
       $('#realmCard-'+this._id)[0].nextElementSibling.click();
     }
   },
});
