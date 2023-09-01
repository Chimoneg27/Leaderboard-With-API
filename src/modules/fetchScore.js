const fetchScore = async () => {
  const scoreURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XggGoAw8lXO1OMnP17ZS/scores/';

  const response = await fetch(scoreURL);
  const data = await response.json();
  const gamesData = data.result;
  const scoreList = document.getElementById('table');

  gamesData.forEach((data) => {
    const list = document.createElement('li');
    list.classList.add('table-items');
    list.textContent = `${data.user}: ${data.score}`;
    scoreList.appendChild(list);
  });
};

export default fetchScore;