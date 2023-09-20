function openTab(evt, sectionName) {
	// Declare ll variables
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for(i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", " ");
	}

	document.getElementById(sectionName).style.display = "block";
	evt.currentTarget.className += " active";
}	

function openProj(evt, projectName) {
	//Declare all varibles
	var i, proj_tab, projlinks;

	proj_tab = document.getElementsByClassName("proj-tab");
	for (i = 0; i < proj_tab.length; i++) {
		proj_tab[i].style.display = "none";
	}

	projlinks = document.getElementsByClassName("projlinks");
	for(i = 0; i < projlinks.length; i++) {
		projlinks[i].className = projlinks[i].className.replace(" active", " ");
	}

	document.getElementById(projectName).style.display = "block";
	evt.currentTarget.className += " active";
}
