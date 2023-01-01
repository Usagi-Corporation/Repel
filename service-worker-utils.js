// This file can be imported inside the service worker,
// which means all of its functions and variables will be accessible
// inside the service worker.
// The importation is done in the file `service-worker.js`.

console.log("Chargement de Repel");


//################################################################
console.log("Lecture du fichier .json pour Youtube");

const YTjsonfile = chrome.runtime.getURL('blacklist/YTblacklist.json')
const blockedYTChannels = [];
var YTID = "";
chrome.storage.sync.set({'repeldata1': ''});

fetch(YTjsonfile).then(response => {
	return response.json();
}).then(data => {
	for (const element of data.blacklist_youtube) {
		blockedYTChannels.push(element.channelID);
		}
}).catch(err => {
	// Do something for an error here
});

function GetYTID() {
  var request = document.querySelector('link[itemprop="name"]').getAttribute("content") + "<br>" + document.querySelector('meta[itemprop="channelId"]').getAttribute("content"); 
  return request; 
}
//################################################################

//################################################################
console.log("Lecture du fichier .json pour les sites Web");

const WEBjsonfile = chrome.runtime.getURL('blacklist/WEBblacklist.json');
const blockedSites = [];
chrome.storage.sync.set({'repeldata2': ''});

fetch(WEBjsonfile).then(response => {
	return response.json();
}).then(data => {
	for (const element of data.backlist_domains) {
		blockedSites.push(element.domain);
		}
}).catch(err => {
	// Do something for an error here
});
//################################################################

console.log("Repel prêt !");

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

	if(tab.url.includes('youtube.com') && (tab.url.includes('watch?') || tab.url.includes('/channel/') || tab.url.includes('/c/') || tab.url.includes('/user/') || tab.url.includes('/@') ))
		{
		if(!tab.url.includes('#loaded'))
			{
			if(tab.url.includes('&index='))
				{
				chrome.tabs.update(tab.id, {url: tab.url.substring(0, tab.url.lastIndexOf("&")) + '#loaded'});
				}
			else
				{
				chrome.tabs.update(tab.id, {url: tab.url + '#loaded'});
				}
			}
		else if(changeInfo.status === "complete" && tab.url.includes('#loaded'))
			{
			chrome.scripting.executeScript(
				{
				  target: {tabId: tabId, allFrames: true},
				  func: GetYTID,
				},
				(injectionResults) => {
					if(injectionResults[0].result != null && !(YTID.endsWith(injectionResults[0].result)))
						{
						YTID = injectionResults[0].result;
						chrome.storage.sync.set({'repeldata1': '<p>Dernier Nom et ID de la chaîne<br><span class="red">YouTube</span> que vous avez visité :<br><span class="green italic">' + YTID + "</span></p>"});
						if (blockedYTChannels.some(substring=>YTID.includes(substring)))
							{
							YTID = "";
							chrome.tabs.update(tabId, {url: 'chrome-extension://'+chrome.runtime.id+'/blacklist/blacklist.html'});
							}
						}
				});
			}
		}

	if(!(tab.url.includes('chrome://')))
		{
		WEBUrl = tab.url;
		chrome.storage.sync.set({'repeldata2': WEBUrl});
		if (blockedSites.some(substring=>WEBUrl.includes(substring)))
			{
			chrome.tabs.update(tabId, {url: 'chrome-extension://'+chrome.runtime.id+'/blacklist/blacklist.html'});
			}
		}
});



