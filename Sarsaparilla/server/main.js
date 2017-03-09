import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

characters = new Mongo.Collection('characters');
campaigns = new Mongo.Collection('campaigns');
realms = new Mongo.Collection('realms');
monsters = new Mongo.Collection('monsters');
spells = new Mongo.Collection('spells');
equipment = new Mongo.Collection('equipment');

Meteor.startup(() => {
  // code to run on server at startup
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
});
