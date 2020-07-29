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

    let responseNo =  document.createElement('div');
    responseNo.className = 'response';
    responseNo.textContent = 'Response ' + i;
    questionnaireDiv.appendChild(responseNo);

    let Questionnaire_Title = document.createElement('h2');
    Questionnaire_Title.id = 'questionnaire_Title';
    Questionnaire_Title.textContent = results.answers[i].title;
    Questionnaire_Title.style.display = 'none';
    responseNo.appendChild(Questionnaire_Title);

  }
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
