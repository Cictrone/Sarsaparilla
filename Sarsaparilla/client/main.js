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

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-bottom-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

import './main.html';
Session.setDefault('prompt',"home");

Template.body.helpers({
  promptPage() {
    return Session.get('prompt');
  },
});
