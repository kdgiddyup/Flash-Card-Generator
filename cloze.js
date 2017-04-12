// pulls in questions.js file that contains an array of questions formatted as: [{text: <text1>,cloze:<cloze1>}, ...]
var questions = require('./questions.js');
function ClozeCard( text , cloze) {
    // make it scope-safe
    // if this constructor was called without 'new', the resulting instanceof will not be the constructor itself, so loop back around wwith 'new'
    if (!(this instanceof ClozeCard)) { 
        return new ClozeCard( text, cloze);
    }
    
    // now, as you were ...
    this.text = text;
    this.cloze = cloze;
} // end ClozeCard constructor

// let's add some methods to the ClozeCard constructor's prototype:
var clozeProto = ClozeCard.prototype;

   // method getBack consoles out the cloze string (ie, the 'answer' on the back of the card) 
clozeProto.getBack = function(){
        console.log('Back:\n'+this.cloze)
    };


   // method getText consoles out the full text of the card's question
clozeProto.getText = function(){
        console.log('[ Full text: '+this.text+' ]');
    }

// method getFront consoles out the clozed text (ie, the "question" on the front of the card)
clozeProto.getFront = function(){
    // build regular expression /<this.cloze>/gi, which looks for all instances (g modifer = global) of the cloze string of any case (i modifier = case Insensitive) 
    var clozePattern = RegExp(this.cloze, "gi");
    // does this card's cloze exist in full string? .test() returns  true if clozePattern is match on the string this.text
    if (clozePattern.test(this.text))
        // true: return text with all instances of the matching pattern replaced with "..."
        console.log( this.text.replace(clozePattern,"..."))
    else 
        // false: return the error message
        console.log( 'Error: "' + this.cloze +'" does not exist in "'+ this.text +'".')
    }

// loop through imported questions.data array to console out card front, back and full text data
for (var i=0;i<questions.data.length;i++) {
    // construct flashcard object using ClozeCard constructor and question.data data
    var thisCloze = ClozeCard(questions.data[i].text, questions.data[i].cloze);
    // console log the clozed text
    console.log('\n_____________________ Question '+(i+1)+' _______________________\n')
    console.log('Front:');
    thisCloze.getFront();
    thisCloze.getBack();
    thisCloze.getText();
    console.log('\n                       ****')

}