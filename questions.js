// an array of text/cloze objects that serve as flashcard data
var questions = [
    {
        text: 'George Washington was our first president.',
        cloze: 'George Washington'
    },
    {
        text: 'Alexander Hamilton was a Founding Father as well as founder of the United States Coast Guard.',
        cloze: 'Alexander Hamilton'
    },
    {
        text: 'America\'s 44th president was Barack Obama.',
        cloze: 'Barack Obama'
    },
        {
        text: 'Abraham Lincoln was born in the Commonwealth of Kentucky.',
        cloze: 'Kentucky'
    },
        {
        text: 'John F. Kennedy was America\'s 35th president.',
        cloze: '35th'
    }
];
// make this data available to other node applications
exports.data = questions;