// function for changing year on word chart
function switchVis(chartId) {
  document.querySelector('iframe').src = 'https://datawrapper.dwcdn.net/' + chartId;
}

// function for creating citation copy buttons
document.addEventListener('DOMContentLoaded', function() {
    // Add a click event listener to the APA copy button
    var copyButtonAPA = document.getElementById('copyButtonAPA');
    copyButtonAPA.addEventListener('click', function() {
        copyTextToClipboard('textToCopyAPA', copyButtonAPA);
    });

    // Add a click event listener to the Chicago copy button
    var copyButtonChicago = document.getElementById('copyButtonChicago');
    copyButtonChicago.addEventListener('click', function() {
        copyTextToClipboard('textToCopyChicago', copyButtonChicago);
    });

    // Add a click event listener to the MLA copy button
    var copyButtonMLA = document.getElementById('copyButtonMLA');
    copyButtonMLA.addEventListener('click', function() {
        copyTextToClipboard('textToCopyMLA', copyButtonMLA);
    });

    // Function to copy text to clipboard
    function copyTextToClipboard(textElementId, copyButton) {
        var textToCopy = document.getElementById(textElementId);
        var textarea = document.createElement('textarea');
        textarea.value = textToCopy.innerText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        // Change button color and text
        copyButton.style.backgroundColor = '#45a049'; // Change to the desired color
        copyButton.style.borderColor = '#45a049'; // Add border color
        copyButton.innerText = 'Copied!';

        // Reset button after a delay (you can adjust the delay as needed)
        setTimeout(function() {
            copyButton.style.backgroundColor = ''; // Reset to the original color
            copyButton.style.borderColor = ''; // Remove border color
            copyButton.innerText = 'Copy Citation';
        }, 2000); // Adjust the delay in milliseconds
    }
});

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