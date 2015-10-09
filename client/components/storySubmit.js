Template.storySubmit.events({
  'submit form': function(event){
    event.preventDefault();

    var prevStory = Stories.findOne({sentence: Stories.find().fetch()[0].sentence})
    console.log('prevStory: ' + prevStory.sentence)
    var submitVal = event.target.newSentence.value;
    event.target.newSentence.value = '';
    var updatedStory = prevStory.sentence + ' ' + submitVal + ' ';
    Stories.update({_id: prevStory._id}, {sentence: updatedStory}) 

  }

});