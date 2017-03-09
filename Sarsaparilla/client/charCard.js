Template.charCard.helpers({
  profilePic(){
    return Images.findOne({'_id': this.profile.image});
  },
  hasProfilePic(){
    if(this.profile){
      return true;
    }
    return false;
  },
});

Template.charCard.events({
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
            // should delete old image
            Characters.update(that._id, {$set: imagesURL});
          }
        });
     });
   },
   'click #changePic'(event){
     if(Meteor.userId()){ //if logged in
       $('#myPicInput').click();
     }
   }
});