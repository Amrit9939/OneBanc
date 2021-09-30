import {Meteor} from 'meteor/meteor';
import {Transaction} from './home.js';

Template.detail.helpers({
  detail(){
    // var unique = FlowRouter.current().params.unique;
    var all_detail = Transaction.find({});
    return all_detail;
  },
  check(unique){
    return unique==FlowRouter.current().params.unique;
  }
})

Template.detail.onDestroyed(function(){
  console.log("onDestroyed");
  Transaction._collection.remove({});
})
