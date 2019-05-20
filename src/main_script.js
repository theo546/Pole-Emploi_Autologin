var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var isFirefox = typeof InstallTrigger !== 'undefined';

if(isChrome) browser_storage_type = chrome;
if(isFirefox) browser_storage_type = browser;

browser_storage_type.storage.sync.get(null, function(result) {
	var identifiant = atob(result.id);
	var code = atob(result.password);
	var code_postal = atob(result.post_code);

	if(result.ready != 1) throw new Error("Not ready");

	var refreshIntervalId = setInterval(function() {
		var element = document.getElementById("identifiant");
		element.value = identifiant;
	
		document.getElementById("submit").click();
		if(element.disabled == true) {
			var keyboard_group = document.getElementsByClassName("keyboard-btn-group");
			if(keyboard_group.length !== 0) {
				document.body.style.border = "5px solid red";
	
				setTimeout(function() {
					document.getElementById("codepostal").value = code_postal;
	
					first_array = [];
	
					/*
						toucheA = 1
						toucheD = 2
						toucheB = 3
						toucheH = 4
						toucheI = 5
						toucheJ = 6
						toucheF = 7
						toucheG = 8
						toucheC = 9
						toucheE = 0
					*/
					for (var i = 0; i < 10; i++) {
						if(keyboard_group[0].children[i].className == 'toucheA') first_array[i] = '1';
						else if(keyboard_group[0].children[i].className == 'toucheD') first_array[i] = '2';
						else if(keyboard_group[0].children[i].className == 'toucheB') first_array[i] = '3';
						else if(keyboard_group[0].children[i].className == 'toucheH') first_array[i] = '4';
						else if(keyboard_group[0].children[i].className == 'toucheI') first_array[i] = '5';
						else if(keyboard_group[0].children[i].className == 'toucheJ') first_array[i] = '6';
						else if(keyboard_group[0].children[i].className == 'toucheF') first_array[i] = '7';
						else if(keyboard_group[0].children[i].className == 'toucheG') first_array[i] = '8';
						else if(keyboard_group[0].children[i].className == 'toucheC') first_array[i] = '9';
						else if(keyboard_group[0].children[i].className == 'toucheE') first_array[i] = '0';
					}
	
					var password_input = document.getElementById("idTouchesCliques");
	
					for (var i = 0; i < code.length; i++) {
						for (var y = 0; y < 10; y++) {
							if(code[i] == first_array[y]) {
								password_input.value += 'val_cel_' + y;
							}
						}
					}
					document.getElementById("submit").click();
				}, 1500);
				clearInterval(refreshIntervalId);
			}
		}
	}, 100);
});