import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

FlowRouter.route("/home",{
  action(){
    BlazeLayout.render('home');
  }
})
FlowRouter.route("/detail/:unique",{
  action(){
    BlazeLayout.render('detail');
  }
})
