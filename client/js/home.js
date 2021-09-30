import {Meteor} from 'meteor/meteor';
import moment from 'moment';
import axios from 'axios';
export const Transaction = new Mongo.Collection('transactions');
import {FlowRouter} from 'meteor/kadira:flow-router';

Template.home.helpers({
  trans(){
    console.log("in trans");
    var ans1 = Transaction.find({},{sort:{endDate:1}}).fetch();
    console.log(ans1.length);
    return ans1;
  },
  isequal(direction){
    return direction == 1;
  },
  isequal1(type){
    return type==2;
  }
})

Template.home.events({
  'click .box':function () {
    FlowRouter.go(`/detail/${this.unique}`);
  }
})

Template.home.onRendered(async function(){
  const res = await axios.get("https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory?userId=1&recipientId=2");
  console.log("on rendered");
  console.log(res.data.transactions);
  res.data.transactions.forEach((item, i) => {
    var date = item.endDate;
    date = new Date(date)
    // date = date.toDateString()[3] + " " + date.getFullTime()
    date = date.toLocaleString('en-us', {

    day: 'numeric', // numeric, 2-digit
    year: 'numeric', // numeric, 2-digit
    month: 'short', // numeric, 2-digit, long, short, narrow
    hour: 'numeric', // numeric, 2-digit
    minute: 'numeric' // numeric, 2-digit
})
   item.date = date
   item.unique = Date.now() + Math.random();
    Transaction._collection.insert(item)
  });

  // var ans = Transaction.find({}).fetch();
  // console.log(ans);
})
