// eslint-disable-next-line import/no-extraneous-dependencies
import './style.css';
import Data from './modules/inputObj.js';
import submitScore from './modules/submitScore.js';
import fetchScore from './modules/fetchScore.js';

const formData = document.getElementById('form-box');
const refreshBTN = document.getElementById('refresh-btn');
const scoreList = document.getElementById('table');

formData.addEventListener('submit', async (e) => {
  e.preventDefault();

  const userInput = document.getElementById('playerName');
  const scoreInput = document.getElementById('points');
  const user = userInput.value;
  const score = scoreInput.value;
  const newData = new Data(user, score);

  await submitScore(newData);
  document.getElementById('playerName').value = '';
  document.getElementById('points').value = '';
});

refreshBTN.addEventListener('click', () => {
  scoreList.innerHTML = '';
  fetchScore();
});

window.addEventListener('load', () => {
  scoreList.innerHTML = '';
  fetchScore();
});