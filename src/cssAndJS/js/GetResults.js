
let submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', async () =>{
// this is the path for the backend API to store the reponses
  const url  = '../api/storeResults';

  let questionBox = document.getElementById('questionnaire');
  let numberOfQuestions = questionBox.getElementsByTagName('div').length;

// defines what teh json file is going to look like and the structure

let Questionnaire_Title = document.getElementById('questionnaire_Title').innerHTMl;

const results = {title: Questionnaire_Title,}
results.response = [];

for(let i = 0; i < numberOfQuestions; i++){
  console.log(i);
  let id = i
  let questionText = document.getElementById(i);
  elem.questionAnswer = document.getElementById('text'+i).value;


  let responses = {
    id: id,
    question: questionText,
    answer: elem.questionAnswer
  };
  results.response.push(responses);
}


console.log(results);


  const send_backend = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(results),
  });

  const returned = await send_backend.json();
  if(returned.success===true){
    console.log('sent');
  } else{
    console.log('There has been an error');
  }

});
