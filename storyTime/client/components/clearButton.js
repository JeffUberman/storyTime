Template.clearButton.events({
  'click': function(event){
    event.preventDefault();

    var storyStarts = [
      "There once was a ",
      "Kyle Simpson was walking down the street and ",
      "A r and a K walked into a bar and ",
      "In a world ",
      "Once upon a time ",
      "This app is so underwhelming that ",
      "184?",
      "A long, long time ago in a galaxy far, far away "
    ];

    var randomStart = Math.floor(Math.random() * storyStarts.length);

    var currentStory = Stories.findOne({sentence: Stories.find().fetch()[0].sentence})
    Stories.update({_id: currentStory._id}, {sentence: storyStarts[randomStart]})
  }
});