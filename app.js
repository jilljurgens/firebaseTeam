var config = {
    apiKey: "AIzaSyCA_d1TuN9XNdO6UYtPi2ze7ocrFMfUqO4",
    authDomain: "bootcamp-project-c6321.firebaseapp.com",
    databaseURL: "https://bootcamp-project-c6321.firebaseio.com",
    projectId: "bootcamp-project-c6321",
    storageBucket: "bootcamp-project-c6321.appspot.com",
    messagingSenderId: "1076794239070"
    };
   firebase.initializeApp(config);


// Create a variable to reference the database.
var database = firebase.database();

$(document).ready(function(){
	$("#submit-employee").on("click", function(event){
		event.preventDefault();
		var name = $("#employee-name").val().trim();
		$("#employee-name").val("");
		var role = $("#role").val().trim();
		$("#role").val("");
		var startDate = $("#start-date").val().trim();
		$("#start-date").val("");
		var rate = $("#monthly-rate").val().trim();
		$("#monthly-rate").val("");

		database.ref("/users").push({
			name: name,
			role: role,
			startDate: startDate,
			rate: rate
		})
	})

	var usersRef = firebase.database().ref("/users");
	usersRef.on('child_added', function(data){
		console.log(data.val());
	})
})