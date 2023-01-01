function updatePopup(){
  chrome.storage.sync.get(['repeldata1','repeldata2'], function(data) {   
    let domain = (new URL(data.repeldata2));
    domain = domain.hostname;
      
	if( (domain.split(".").length -1) > 1)
		domain = domain.substring(domain.indexOf(".") + 1)
	
	document.getElementById("webtext").innerHTML = '<p>Dernier <span class="blue">Domaine Web</span><br>que vous avez visité :<br><span class="green italic">' + domain + '</span><br></p>';
	document.getElementById("youtubetext").innerHTML = data.repeldata1;
	});
}

document.addEventListener('DOMContentLoaded', updatePopup);
