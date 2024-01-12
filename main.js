// function for changing year on word chart
function switchVis(chartId) {
  document.querySelector('iframe').src = 'https://datawrapper.dwcdn.net/' + chartId;
}

// function for copy button
document.addEventListener('DOMContentLoaded', function() {
    // Add a click event listener to the APA copy button
    var copyButtonAPA = document.getElementById('copyButtonAPA');
    copyButtonAPA.addEventListener('click', function() {
        copyTextToClipboard('textToCopyAPA');
    });

    // Add a click event listener to the Chicago copy button
    var copyButtonChicago = document.getElementById('copyButtonChicago');
    copyButtonChicago.addEventListener('click', function() {
        copyTextToClipboard('textToCopyChicago');
    });

    // Function to copy text to clipboard
    function copyTextToClipboard(textElementId) {
        var textToCopy = document.getElementById(textElementId);
        var textarea = document.createElement('textarea');
        textarea.value = textToCopy.innerText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Text copied to clipboard!');
    }
});
