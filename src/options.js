var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var isFirefox = typeof InstallTrigger !== 'undefined';

if(isChrome) browser_storage_type = chrome;
if(isFirefox) browser_storage_type = browser;

document.addEventListener("DOMContentLoaded", function() {
		browser_storage_type.storage.sync.get(null, function(e) {
			document.querySelector("#id").value = atob(e.id) || "";
			document.querySelector("#password").value = atob(e.password) || "";
			document.querySelector("#post_code").value = atob(e.post_code) || "";
		});
	}
);

document.querySelector("form").addEventListener("submit", function(e) {
	e.preventDefault();
	browser_storage_type.storage.sync.set({
		id: btoa(document.querySelector("#id").value),
		password: btoa(document.querySelector("#password").value),
		post_code: btoa(document.querySelector("#post_code").value),
		ready: 1
	});
});