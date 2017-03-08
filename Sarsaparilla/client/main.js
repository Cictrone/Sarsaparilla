import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Mongo } from 'meteor/mongo';
import { ReactiveVar } from 'meteor/reactive-var';

Characters = new Mongo.Collection('characters');
Campaigns = new Mongo.Collection('campaigns');
Realms = new Mongo.Collection('realms');
Monsters = new Mongo.Collection('monsters');
Spells = new Mongo.Collection('spells');
Equipment = new Mongo.Collection('equipment');

import './main.html';
Session.setDefault('prompt',"home");

Template.body.helpers({
  promptPage() {
    return Session.get('prompt');
  },
});
