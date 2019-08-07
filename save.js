function save_file(){
	var textToSave = JSON.stringify(save);
 
	var textToSaveAsBlob = new Blob([textToSave], {type:"application/javascript"});
	var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
	var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value + '.ava';
 
	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	downloadLink.href = textToSaveAsURL;
	downloadLink.onclick = destroyClickedElement;
	downloadLink.style.display = "none";
	document.body.appendChild(downloadLink);
 
	downloadLink.click();
}
 
function destroyClickedElement(event){
	document.body.removeChild(event.target);
}