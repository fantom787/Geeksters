chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.permission == true) {
            chrome.tabs.create({'url': chrome.extension.getURL('./tutorial.html')}, function(tab) {
                sendResponse({access: "yes"});
            });  
        }
        return true;
    
        // console.log("background.js got a message")
        // console.log(request);
        // console.log(sender);
        // sendResponse("bar");
    }
);

chrome.runtime.onInstalled.addListener( function(details) {
    let internalURL = chrome.runtime.getURL('./tutorial.html')
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
      // Code to be executed on first install
      // eg. open a tab with a url
      chrome.tabs.create({
        url: internalURL
      }, function(tab){console.log('new tab launched')});
    } else if (details.reason === chrome.runtime.OnInstalledReason.UPDATE) {
      // When extension is updated
    } else if (details.reason === chrome.runtime.OnInstalledReason.CHROME_UPDATE) {
      // When browser is updated
    } else if (details.reason === chrome.runtime.OnInstalledReason.SHARED_MODULE_UPDATE) {
      // When a shared module is updated
    }
  });