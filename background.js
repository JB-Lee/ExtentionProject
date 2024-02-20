console.log("background.js load");

let draggedText = '';

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.text) {
        draggedText = message.text;
    }
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'getDraggedText') {
        sendResponse({ text: draggedText });
    }
});