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