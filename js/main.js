	// Global Variable: new notes is in a array.
	var storage = []; 
	var noteList = document.getElementById("list");

	//Properties of NoteTaker
	function Note(){
		var Note = {
	    	text: document.getElementById("plusInput").value,
	    	important: colorForm.Importants.value,
	    	time: new Date().toLocaleTimeString(),
	    }
	    return Note;
	}
    var buttonAdd = document.getElementById("plusButton");
	buttonAdd.addEventListener("click", addButtonClick);

	function addButtonClick(){
		var note = Note();
		storage.push(note);
		displayNotes();

	}

	// Action to make a list.
	function displayNotes(){
		document.getElementById("list").innerHTML = "";
		for (var i = 0; i < storage.length; i++){
			document.getElementById("list").innerHTML += "<li style='background-color:"+storage[i].important+"'>"+ storage[i].text + "</li>";
		}
	}

	var not = document.getElementById("deleteButton"); 
		not.addEventListener("click", deleteButtonClick);

	function deleteButtonClick(){
		displayNotes();
		var h = prompt("Wich one you want to delete? Example: 1, 2, 3");
		storage.splice(0,1);
		displayNotes();	
	}
/*
	function dataNotes(){
		for (var i = 0; i < storage.length; i++){
			if (storage[i].important == 'red') {
			document.getElementById("redL").innerHTML += "<li>"+ storage[i].text + "</li>";
			} else if (storage[]){

			}

		var listInfo = document.getElementById("list").innerHTML;
		}
	}
*/

/*
	function checkNotes(){
		var doneNote = storage[i].text;
		for (var i = 0; i < storage.length; i++){
		doneNote.completed = !done.completed;
		displayNotes();
	}

// If the note is repeated say something!
	function sameNote(){
		var text = document.getElementById("plusInput").value;
		for (var i = 0 ; i < noteList.length ; i++){
			if (text === noteList.children[i].innerHTML) {
				noteList = "You have this in your list";
			}else{
				noteList = noteList;
			}
		}
	}
	<input type="button" value="save">
	
*/
