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

  for(let i = 0; i< results.answers.length; i++){

    elem.responseNo =  document.createElement('div');
    elem.responseNo.className = 'responseContainer';
    let numberResponse = i+1;
    elem.responseNo.textContent = 'Response ' + numberResponse;
    questionnaireDiv.appendChild(elem.responseNo);

    let Questionnaire_Title = document.createElement('h2');
    Questionnaire_Title.id = 'questionnaire_Title';
    Questionnaire_Title.textContent = results.answers[i].title;
    //Questionnaire_Title.style.display = 'none';
    elem.responseNo.appendChild(Questionnaire_Title);


    let div = document.createElement('div');
    div.className = 'repsonse';
    elem.responseNo.appendChild(div);

    for(let z = 0; z<results.answers[i].responses.length; z++){
        printQuestion(i, z, results, div);
        printResponse(i, z, results, div);
        }
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
