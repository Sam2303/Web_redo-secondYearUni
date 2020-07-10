
let submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', async () =>{
// this is the path for the backend API to store the reponses
  const url  = '../api/storeResults';

  let questionBox = document.getElementById('questionnaire');
  let numberOfQuestions = questionBox.getElementsByTagName('div').length;

// defines what teh json file is going to look like and the structure

let title = document.getElementById('questionnaire_Title').innerHTMl;

const result = {title: title,}
result.response = [];

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
  result.response.push(responses);
}

console.log(result);

  const send_backend = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result),
  });

  const returned = await send_backend.json();
  if(returned.success===true){
    console.log('saved');
  } else{
    console.log('There has been an error');
  }

});
