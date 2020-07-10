'use strict';
const elem = {};


window.onload = async function getQuestionnaire(){
// These two lines of code fetch the json questionnaire from the file system
  const getTheQuestionnaire = await fetch('../cssAndJS/json/example-questionnaire.json');
  elem.questionnaire = await getTheQuestionnaire.json();
  console.log(elem.questionnaire);

  printQuestionnaire();
}

function printQuestionnaire(){

  let questionnaire = elem.questionnaire;
  let submitButton = document.getElementById('submitButton');

// three lines of code to create the DIV tag to put all the questions in
// also gives the tag the id to be able to style it
  elem.Questionnaire = document.createElement('div');
  elem.Questionnaire.id = 'questionnaire';
  document.body.insertBefore(elem.Questionnaire, submitButton);

// lines of code to create the tag for the questionnaire title
// also gives title an id for styling
  let Questionnaire_Title = document.createElement('h2');
  Questionnaire_Title.id = 'questionnaire_Title';
  Questionnaire_Title.textContent = questionnaire.name;
  elem.Questionnaire.appendChild(Questionnaire_Title);


for(let i = 0; i < questionnaire.questions.length; i++){
  if(questionnaire.questions[i].type === 'text'){textQuestion(i); console.log('text');}
  if(questionnaire.questions[i].type === 'number'){numberQuestion(i); console.log('number');}
  if(questionnaire.questions[i].type === 'single-select'){single_selectQuestion(i); console.log('single-select');}
  if(questionnaire.questions[i].type === 'multi-select'){multi_selectQuestion(i); console.log('multi-select');}
  }

}


function textQuestion(i){
// three lines of code to create the question div
  let question = document.createElement('div');
  question.className = 'quesition';
  elem.Questionnaire.appendChild(question);
// three lines of code to create the question text from the JSON file
  let text = document.createElement('h3');
  text.id = i;
  text.textContent = elem.questionnaire.questions[i].text;
  question.appendChild(text);
// code to create the input text box for the user to put answer in
  let input = document.createElement('input');
  input.className = 'textInput';
  input.id = 'text'+i;
  question.appendChild(input);

}

function numberQuestion(i){
  // three lines of code to create the question div
    let question = document.createElement('div');
    question.className = 'quesition';
    elem.Questionnaire.appendChild(question);
  // three lines of code to create the question text from the JSON file
    let text = document.createElement('h3');
    text.id = i;
    text.textContent = elem.questionnaire.questions[i].text;
    question.appendChild(text);
  // code to create the input text box for the user to put answer in
    let input = document.createElement('input');
    input.className = 'textInput';
    input.id = 'text'+i;
    question.appendChild(input);
}

function single_selectQuestion(i){
  // // three lines of code to create the question div
  //   let question = document.createElement('div');
  //   question.className = 'quesition';
  //   elem.Questionnaire.appendChild(question);
  // // three lines of code to create the question text from the JSON file
  //   let text = document.createElement('h3');
  //   text.id = i;
  //   text.textContent = elem.questionnaire.questions[i].text;
  //   question.appendChild(text);
  // // code to create the input text box for the user to put answer in
  // for (let x = 0; x < elem.questionnaire.questions[i].options.length; x++){
  //   let options = document.createElement('p');
  //   options.textContent = elem.questionnaire.questions[i].options[x];
  //   question.appendChild(options);
  //   let radioBox = document.createElement('input');
  //   radioBox.type = 'radio';
  //   radioBox.value = elem.questionnaire.questions[i].options[x];
  //   radioBox.id = 'radio' + x;
  //   radioBox.name = 'radioOptions';
  //   radioBox.className = 'tickBox';
  //   options.appendChild(radioBox);
  // }
}

function multi_selectQuestion(i){
  // // three lines of code to create the question div
  //   let question = document.createElement('div');
  //   question.className = 'quesition';
  //   elem.Questionnaire.appendChild(question);
  // // three lines of code to create the question text from the JSON file
  //   let text = document.createElement('h3');
  //   text.textContent = elem.questionnaire.questions[i].text;
  //   question.appendChild(text);
  //   text.id = i;
  // // code to create the input text box for the user to put answer in
  // for (let x = 0; x < elem.questionnaire.questions[i].options.length; x++){
  //   let options = document.createElement('p');
  //   options.textContent = elem.questionnaire.questions[i].options[x];
  //   question.appendChild(options);
  //   let checkBox = document.createElement('input');
  //   checkBox.type = 'checkbox';
  //   checkBox.value = elem.questionnaire.questions[i].options[x];
  //   checkBox.id = 'checkbox' + x;
  //   checkBox.name = 'checkbox';
  //   checkBox.className = 'tickBox';
  //   options.appendChild(checkBox);
  // }
}
