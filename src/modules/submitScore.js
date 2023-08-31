const submitScore = async (newData) => {
  const scoreURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XggGoAw8lXO1OMnP17ZS/scores/';
  const requestBody = JSON.stringify(newData);

  try {
    const response = await fetch(scoreURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });

    const data = await response.json();
    return data.result;
  } catch (error) {
    return error;
  }
};

export default submitScore;