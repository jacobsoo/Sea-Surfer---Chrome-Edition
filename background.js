chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {file: "jquery.min.js"});
    chrome.tabs.executeScript(tab.id, {file: "bookmarklet.js"});
});
