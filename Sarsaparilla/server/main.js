import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

characters = new Mongo.Collection('characters');
campaigns = new Mongo.Collection('campaigns');
realms = new Mongo.Collection('realms');
monsters = new Mongo.Collection('monsters');
spells = new Mongo.Collection('spells');
equipment = new Mongo.Collection('equipment');


var imageStore = new FS.Store.GridFS("images");


Images = new FS.Collection("images", {
 stores: [imageStore]
});

Meteor.startup(() => {
  // code to run on server at startup
  Images.remove({});
  realms.remove({});
  characters.remove({});
  campaigns.remove({});
  realms.insert({
      name: "Test Realm",
      lore: "Lorem Ipsum ;)",
  });
  campaigns.insert({
      name: "Test Campaign",
      date: moment(new Date()).format("MM.DD.YYYY"),
  });
  characters.insert({
    name: "Thorin Frostbeard",
    status: true, // false is dead true is alive
    realm: {
      name: "Test Realm",
      lore: "Lorem Ipsum ;)",
    },
    campaign: {
      name: "Test Campaign",
      date: moment(new Date()).format("MM.DD.YYYY"),
    },
    health: 120,
  });
});
