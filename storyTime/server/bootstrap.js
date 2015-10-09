// run this when the meteor app is started
Meteor.startup(function() {

  // if there are no stories available create first sentence
  //if (Stories.find().fetch() === []) {

    // create sample polls
    // var startingSentence = [
    //   {
    //     sentence: 'There once was a'
    //   }
    // ];

    Stories.insert({sentence: "There once was a "})

    // // loop over each sample poll and insert into database
    // _.each(startingSentence, function(story) {
    //Stories.insert(startingSentence);
    // });

 // }

});