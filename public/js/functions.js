var generated = false; //will check to see if the table has been generated or not
var deleteRow = 0;

$(document).ready(function () {
    var fileInput = $('#files');
    var uploadButton = $('#sean');

    uploadButton.on('click', function () {
        if (!window.FileReader) {
            alert('Your browser is not supported')
        }
        var input = fileInput.get(0);

        // Create a reader object
        var reader = new FileReader();
        if (input.files.length) {
            var textFile = input.files[0];
            reader.readAsText(textFile);
            $(reader).on('load', processFile);
        } else {
            alert('Please upload a file before continuing')
        }
    });

    function processFile(e) {
        var file = e.target.result,
            results;
        if (file && file.length) {
            results = file;
            $('#name').val(results)
            //$('#name').val(results[1]);
        }
    }
});

// START : Loading username to the dashboard after login 
function getUsername() {
    localStorage.removeItem("username");
    var username = document.getElementById("username").value;
    localStorage.setItem("username", username);

}

function usernameOnLoad() {
    document.getElementById("postUserName").innerHTML = localStorage.getItem("username");
    document.getElementById("username2").value = localStorage.getItem("username");
}
// END 


var studentAccountID = 1000;
/*
function generateTable() {
    var students = document.getElementById("usr").value;//number of accounts to be created
        deleteRow += students;
    var module = document.getElementById("mod").value;í
    alert("You have selected " + students + " student accounts to be created."); //Tells them how many accounts are to be created
    var table = document.getElementById("tableCreateUsers");
    for (var i = 0; i < students; i++) {

        var row = table.insertRow(1);

        var s_surname = row.insertCell(0).append(document.createElement("input"));
        var s_firstname = row.insertCell(1).append(document.createElement("input"));
        var s_number = row.insertCell(2).append(document.createElement("input"));
        var s_tutorgroup = row.insertCell(3).append(document.createElement("input"));
        var s_username = row.insertCell(4);
        var s_password = row.insertCell(5);

        s_password.innerHTML = Math.random().toString(36).slice(-8); 
        s_username.innerHTML = module + studentAccountID++;
    }
    generated = true;

}*/



// START : teachers dashboard functions
function showSDiv() {
    var a = document.getElementById("newStudentsDiv");
    var b = document.getElementById("manageStudentDiv");
    var c = document.getElementById("manageTutorialDiv");
    var d = document.getElementById("manageRepoDiv");
    a.style.display = 'block';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';

}

function showManageDiv() {
    var a = document.getElementById("newStudentsDiv");
    var b = document.getElementById("manageStudentDiv");
    var c = document.getElementById("manageTutorialDiv");
    var d = document.getElementById("manageRepoDiv");
    a.style.display = 'none';
    b.style.display = 'block';
    c.style.display = 'none';
    d.style.display = 'none';

}

function showTutorialDiv() {
    var a = document.getElementById("newStudentsDiv");
    var b = document.getElementById("manageStudentDiv");
    var c = document.getElementById("manageTutorialDiv");
    var d = document.getElementById("manageRepoDiv");
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'block';
    d.style.display = 'none';

}

function showRepoDiv() {
    var a = document.getElementById("newStudentsDiv");
    var b = document.getElementById("manageStudentDiv");
    var c = document.getElementById("manageTutorialDiv");
    var d = document.getElementById("manageRepoDiv");
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'block';

}
// END : teachers dashboard functions

// START : students dashboard functions
function joinClassDiv() {
    var a = document.getElementById("joinClass");
    var b = document.getElementById("viewClass");
    var c = document.getElementById("viewTutorials");
    var d = document.getElementById("viewAssignments");
    a.style.display = 'block';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
}

function viewClassDiv() {
    var a = document.getElementById("joinClass");
    var b = document.getElementById("viewClass");
    var c = document.getElementById("viewTutorials");
    var d = document.getElementById("viewAssignments");
    a.style.display = 'none';
    b.style.display = 'block';
    c.style.display = 'none';
    d.style.display = 'none';
}

function viewTutorialDiv() {
    var a = document.getElementById("joinClass");
    var b = document.getElementById("viewClass");
    var c = document.getElementById("viewTutorials");
    var d = document.getElementById("viewAssignments");
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'block';
    d.style.display = 'none';
}

function viewAssignmentsDiv() {
    var a = document.getElementById("joinClass");
    var b = document.getElementById("viewClass");
    var c = document.getElementById("viewTutorials");
    var d = document.getElementById("viewAssignments");
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'block';
}

function moduleProfName() {
    var profname = document.getElementById('postUserName').innerHTML;
    var formprof = document.getElementById('moduleprofessor');
    formprof.value = profname;
}

function signUp() {
    var profname = document.getElementById('postUserName').innerHTML;
    var formprof = document.getElementById('classForm');
    formprof.value = profname;
}

function showCreateDiv() {
    var a = document.getElementById('create');
    var b = document.getElementById('manageTeach');
    var c = document.getElementById('manageStudents');

    a.style.display = 'block';
    b.style.display = 'none';
    c.style.display = 'none';

}

function manageTeachDiv() {
    var a = document.getElementById('create');
    var b = document.getElementById('manageTeach');
    var c = document.getElementById('manageStudents');

    a.style.display = 'none';
    b.style.display = 'block';
    c.style.display = 'none';

}

function manageStudentDiv() {
    var a = document.getElementById('create');
    var b = document.getElementById('manageTeach');
    var c = document.getElementById('manageStudents');

    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'block';

}

function uploadAssignment() {
    var a = document.getElementById('upload');
    var b = document.getElementById('view');

    a.style.display = 'block';
    b.style.display = 'none';
}

function viewAssignments() {
    var a = document.getElementById('upload');
    var b = document.getElementById('view');

    a.style.display = 'none';
    b.style.display = 'block';
}
