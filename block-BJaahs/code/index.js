//- Without Object

let title = "title";
let options = ["option1", "option2", "option3", "option4"];
let correctAnswerIndex = 2;
function isAnswerCorrect(index) {
  return index === correctAnswerIndex;
}


function getCorrectAnswer(){
    return options[correctOption];
}

// With Object

let question = {
  title: "Where is the capital of Jordan",
  options: ["tashkent", "amaan", "kuwait city", "Nairobi"],
  correctAnswerIndex: 2,
  isAnswerCorrect(index) {
    return index === question.correctAnswerIndex;
  },
  getCorrectAnswer() {
    return question.options[correctAnswerIndex];
  },
};

// Using function to create object




//Organize using object
function createObj(title,options,correctAnswerIndex){
let question={};
    question.title=title;
    question.options=options;
    question.correctOption=correctAnswerIndex,
    question.isAnswerCorrect=(index)=>{
        if(index===question.correctOption){
            return true;
        }else{
            return false;
        }
    };
  ques.getCorrectAnswer = function () {
    return ques.options[correctAnswerIndex];
  };
  return ques;
}

// Using 'this' keyword

return question;

createObj('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1);
const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  };
  return ques;


let firstQuestion = createQues1(
  "Capital of Russia",
  ["India", "Moscow", "America", "canada"],
  2
);
let secondQuestion = createQues2(
  "Capital of India",
  ["Chennai", "Delhi", "Banglore", "Hyderabad"],
  1
);
let thirdQuestion = createQues1(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);