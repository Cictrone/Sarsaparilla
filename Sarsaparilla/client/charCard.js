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
  charCardID(){
    return "charCard-"+this._id;
  },
  getStatus(){
    if(this.status){
      return '<i class="add circle icon"></i>';
    }
    return '<i class="remove circle icon"></i>';
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
            if(this.profile){
              // removes old pic from db
              Images.remove({_id: this.profile.image});
            }
            Characters.update(that._id, {$set: imagesURL});
          }
        });
     });
   },
   'click #changePic'(event){
     if(Meteor.userId()){ //if logged in
       //The folowwing will make sure we change the correct card picture
       $('#charCard-'+this._id)[0].nextElementSibling.click();
     }
   },
});
