
let submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', async () =>{
// this is the path for the backend API to store the reponses
  const url  = '../api/storeResults';

// Getting original JSON for checking what type of quesiton
  const getTheQuestionnaire = await fetch('../cssAndJS/json/example-questionnaire.json');
  elem.questionnaire = await getTheQuestionnaire.json();

// Getting amount of questions
  let questionBox = document.getElementById('questionnaire');
  let numberOfQuestions = questionBox.getElementsByTagName('div').length;

// defines what the json file is going to look like and the structure
let title = document.getElementById('questionnaire_Title').innerHTML;


elem.results = {
  title,
};
elem.results.responses = [];

// loop to loop through each question and getting the responses
for(let i = 0; i < numberOfQuestions; i++){
  if(elem.questionnaire.questions[i].type === 'single-select'){
    getSingleSelect(i);
    createQuestionRepsonse();
  }
  if(elem.questionnaire.questions[i].type === 'multi-select'){
    getMultiSelect(i);
    createQuestionRepsonse();
  }
  if(elem.questionnaire.questions[i].type === 'text' || elem.questionnaire.questions[i].type === 'number'){
    getResponses(i);
    createQuestionRepsonse();
  }
}
console.log(elem.results);


const responses = await fetch('../cssAndJS/json/responses.json');
const json = await responses.json();
console.log(json);
// fileStructure = {
// };
// fileStructure.responses = [];
// fileStructure.responses.push(elem.results);



json.answers.push(elem.results);


const send = await fetch(url, {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(json),
});
const res = await send.json();
if(res.success === true){
  console.log('saved');
  window.location.replace('../html/LookAtResults.html');
} else{console.log('error');}


});


// function to get the ticked checkboxes from the normal questions
  function getResponses(i){
  elem.questionId = i
  elem.questionText = document.getElementById(i).innerHTML;
  elem.questionAnswer = document.getElementById('text'+i).value;
  }

// function to get the ticked checkboxes from the single select answer
function getSingleSelect(i){
  elem.questionId = i
  elem.questionText = document.getElementById(i).innerHTML;

  elem.amountOfOptions = document.getElementsByName('radioCheckBoxes');
  elem.checked = '';

  for(let z = 0; z < elem.amountOfOptions.length; z++){
    if(elem.amountOfOptions[z].checked){elem.checked += elem.amountOfOptions[z].value + "";}
    elem.amountOfOptions[z].checked = false;
  }
  elem.questionAnswer = elem.checked;
  }

// function to get the ticked checkboxes from the multi select answer
function getMultiSelect(i){
  elem.questionId = i
  elem.questionText = document.getElementById(i).innerHTML;

  elem.amountOfOptions = document.getElementsByName('MultiSelectCheckbox');
  elem.checked = '';

  for(let z = 0; z < elem.amountOfOptions.length; z++){
    if(elem.amountOfOptions[z].checked){elem.checked += elem.amountOfOptions[z].value + ", ";}
    elem.amountOfOptions[z].checked = false;
  }
  elem.questionAnswer = elem.checked;
  }


// This function adds the response for each quesiton on the survey and adds
// it to the main results which gets sent to the backend
function createQuestionRepsonse(){
  elem.response = {
    id: elem.questionId,
    question: elem.questionText,
    answer: elem.questionAnswer,
  }
  elem.results.responses.push(elem.response);
}
