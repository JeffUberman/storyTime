if (Meteor.isClient) {
  // This code only runs on the client
  Template.story.helpers({
    story : function() {
      var starter = Stories.find().fetch();
      return starter[0].sentence;
    }
  });
}