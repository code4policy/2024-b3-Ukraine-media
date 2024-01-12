// function for changing year on word chart
function switchVis(chartId) {
  document.querySelector('iframe').src = 'https://datawrapper.dwcdn.net/' + chartId;
}

// function for copy button
document.addEventListener('DOMContentLoaded', function() {
    // Find the copy button element
    var copyButton = document.getElementById('copyButton');

    // Add a click event listener to the copy button
    copyButton.addEventListener('click', function() {
        // Find the text you want to copy
        var textToCopy = document.getElementById('textToCopy');

        // Create a textarea element to temporarily hold the text
        var textarea = document.createElement('textarea');
        textarea.value = textToCopy.innerText;

        // Append the textarea to the document
        document.body.appendChild(textarea);

        // Select the text inside the textarea
        textarea.select();

        // Copy the selected text to the clipboard
        document.execCommand('copy');

        // Remove the textarea element from the document
        document.body.removeChild(textarea);

        // Optionally, you can provide feedback to the user
        alert('Text copied to clipboard!');
    });
});
