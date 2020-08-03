'use strict';
const elem = {};
let questionnaireDiv = document.getElementById('questionnaire');

window.onload = async() => {
  //using Fetch here to collect the response json file and then printing it in the console
  const data = await fetch('../cssAndJS/json/responses.json');
  const results = await data.json();
  console.log(results);
  printOnPage(results);
}

function printOnPage(results){

  for(let i = 0; i< results.answers.length; i++){

    let responseNo =  document.createElement('div');
    responseNo.className = 'responseContainer';
    questionnaireDiv.appendChild(responseNo);

    let responseNumber = document.createElement('h2');
    let response = i+1;
    responseNumber.textContent = 'Response ' + response;
    responseNo.appendChild(responseNumber);

    let Questionnaire_Title = document.createElement('h3');
    Questionnaire_Title.id = 'questionnaire_Title';
    Questionnaire_Title.textContent = results.answers[i].title;
    responseNo.appendChild(Questionnaire_Title);


    let div = document.createElement('div');
    div.className = 'repsonse';
    responseNo.appendChild(div);

    let arrow = document.createElement('p');
    arrow.textContent = 'Show Responses';
    arrow.id = 'show';
    responseNo.appendChild(arrow);


    arrow.addEventListener('click', function print(){
      console.log(i);
      for(let z = 0; z<results.answers[i].responses.length; z++){
        printQuestion(i, z, results, div);
        printResponse(i, z, results, div);
      }
      arrow.removeEventListener('click', print);
    });
  }
}

    // functions to print the questions and responses
    function printQuestion(i, z, results, div){
      let questions = document.createElement('h3');
      questions.textContent = results.answers[i].responses[z].question;
      questions.className = 'quesition';
      //questions.style.display = 'none';
      div.appendChild(questions);
    }
    function printResponse(i, z, results, div){
      let response = document.createElement('p');
      response.textContent = results.answers[i].responses[z].answer;
      //response.style.display = 'none';
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
