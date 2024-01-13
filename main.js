// function for changing year on word chart
function switchVis(chartId) {
  document.querySelector('iframe').src = 'https://datawrapper.dwcdn.net/' + chartId;
}

function shareOnTwitter() {
  var imageElement = document.getElementById('test-wordcloud.png');

  if (!imageElement) {
    console.error('Image element not found.');
    return;
    }

  var imageSource = imageElement.src;

  if (!imageSource) {
    console.error('Image source not found.');
    return;
    }

  var encodedImageSource = encodeURIComponent(imageSource);
  var twitterShareUrl = 'https://twitter.com/intent/tweet?text=Check%20out%20this%20image&url=' + encodedImageSource;

  // Open Twitter share window
  var twitterWindow = window.open(twitterShareUrl, '_blank');

  if (!twitterWindow) {
    console.error('Failed to open Twitter share window. Make sure popups are allowed for this site.');
    }
}

/* Download Chart Button */
function downloadChart() {
  // Get the selected year from the dropdown
  var selectedValue = document.getElementById("yearSelector").value;

  var selectedYear;
  switch (selectedValue) {
    case "Da5oL":
      selectedYear = "2021";
      break;
    case "4ma8G":
      selectedYear = "2022";
      break;
    case "Qjx9t":
      selectedYear = "2023";
      break;
  }

  // Construct the filename based on the selected year
  var fileName = selectedYear + "_heat_chart.png";

  document.getElementById("downloadLink").href = fileName;
  document.getElementById("downloadLink").download = fileName;

}