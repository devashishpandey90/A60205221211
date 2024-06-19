const numberTypeSelect = document.getElementById('number-type');
const getAverageButton = document.getElementById('get-average');
const prevWindowSpan = document.getElementById('prev-window');
const currWindowSpan = document.getElementById('curr-window');
const latestNumberSpan = document.getElementById('latest-number');
const averageSpan = document.getElementById('average');
const errorMessage = document.getElementById('error-message');

getAverageButton.addEventListener('click', async () => {
  const numberType = numberTypeSelect.value;
  errorMessage.textContent = ''; // Clear any previous error message

  try {
    const response = await fetch(`/numbers/${numberType}`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();

    prevWindowSpan.textContent = data.windowPrevState.join(', ');
    currWindowSpan.textContent = data.windowCurrState.join(', ');
    latestNumberSpan.textContent = data.numbers;
    averageSpan.textContent = data.avg;
  } catch (error) {
    console.error(error);
    errorMessage.textContent = error.message; // Display error message
  }
});
