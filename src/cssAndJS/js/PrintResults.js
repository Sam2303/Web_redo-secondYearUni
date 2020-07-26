'use strict';
const elem = {};
let questionnaireDiv = document.getElementById('questionnaire');

window.onload = async() => {
  //using Fetch here to collect the response json file and then printing it in the console
  const data = await fetch('../cssAndJS/json/responses.json');
  elem.results = await data.json();
  console.log(elem.results);

  printOnPage(elem.results);
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


//download button for the responses
let downloadButton = document.getElementById('DownloadButton').addEventListener('click', function(){
   console.log('Download Button clicked');

   // Start the download of yournewfile.txt file with the content from the text area
       let text = elem.results;
       let filename = "yournewfile.json";
       download(filename, text);
   }, false);
function download(filename, text){
    let element = document.createElement('a');
    element.setAttribute('href', 'data:json/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(text)));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
