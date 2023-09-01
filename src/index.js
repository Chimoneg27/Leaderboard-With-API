import './style.css';
import './styles/desktop.css';
import submitScore from './modules/submitScore.js';
import fetchScore from './modules/fetchScore.js';
import Data from './modules/inputObj.js';

const formData = document.getElementById('form-box');
const refreshBTN = document.getElementById('refresh-btn');
const scoreList = document.getElementById('table');

formData.addEventListener('submit', async (e) => {
  e.preventDefault();

  const userInput = document.getElementById('playerName');
  const scoreInput = document.getElementById('scores');
  const user = userInput.value;
  const score = scoreInput.value;
  const newData = new Data(user, score);

  await submitScore(newData);
  document.getElementById('playerName').value = '';
  document.getElementById('scores').value = '';
});

refreshBTN.addEventListener('click', () => {
  scoreList.innerHTML = '';
  fetchScore();
});

window.addEventListener('load', () => {
  scoreList.innerHTML = '';
  fetchScore();
});