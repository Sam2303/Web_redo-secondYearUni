'use strict';
let questionnaireDiv = document.getElementById('questionnaire');

window.onload = async() => {
  //using Fetch here to collect the response json file and then printing it in the console
  const data = await fetch('../cssAndJS/json/responses.json');
  const results = await data.json();
  console.log(results);

  printOnPage(results);
}

function printOnPage(results){
  let Questionnaire_Title = document.createElement('h2');
  Questionnaire_Title.id = 'questionnaire_Title';
  Questionnaire_Title.textContent = results.title;
  questionnaireDiv.appendChild(Questionnaire_Title);

// loop  which creates each div for the seperate the responses
for(let i = 0; i<results.responses.length; i++){
  let div = document.createElement('div');
  div.className = 'repsonse';
  questionnaireDiv.appendChild(div);

  printQuestion(i, results, div);
  printResponse(i, results, div);
  }
}

// functions to print the questions and responses
function printQuestion(i, results, div){
  let questions = document.createElement('h3');
  questions.textContent = results.responses[i].question;
  questions.className = 'quesition';
  div.appendChild(questions);
}
function printResponse(i, results, div){
  let response = document.createElement('p');
  response.textContent = results.responses[i].answer;
  div.appendChild(response);
}
