'use strict';

console.log('survey linked');

window.onload = async () => {
  const response = await fetch('api/questionnairePrint', {method: 'GET'});
  const {questions} = await response.json();

  console.log(questions);
}
