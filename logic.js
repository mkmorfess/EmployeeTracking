
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAypX9oN76rocVMGQHYiPj39q7S1jYi_bE",
    authDomain: "employee-project-9a0d7.firebaseapp.com",
    databaseURL: "https://employee-project-9a0d7.firebaseio.com",
    projectId: "employee-project-9a0d7",
    storageBucket: "employee-project-9a0d7.appspot.com",
    messagingSenderId: "1094778755062"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var monthsWorked=0;
  var totalBilled =0;

  var rowNumber=0;

  var input;

$("#submit").on("click",function () {

  var employeeName = $("#name").val().trim();
  var role = $("#role").val().trim();
  var startDate = $("#date").val().trim();
  var monthlyRate = $("#rate").val().trim();

  console.log(employeeName);
  console.log(role);
  console.log(startDate);
  console.log(monthlyRate);

  // Save the new employe info in firebaseebase
    database.ref().push({
      name: employeeName,
      employeeRole: role,
      beginDate: startDate,
      payRate: monthlyRate
    });

  
});

database.ref().on("child_added", function(snapshot) {

  var tableRow = $("<tr>");
  tableRow.attr("id", "row-" + rowNumber);
  $("#main").append(tableRow);


  input = [snapshot.val().name, snapshot.val().employeeRole, snapshot.val().beginDate, snapshot.val().payRate];

  for (var i = 0; i < input.length; i++) {
    var tableData = $("<td>");
    tableData.text(input[i]);
    $("#row-" + rowNumber).append(tableData);
  }

  rowNumber++;

  console.log(rowNumber);

});





//totalBilled calculation
//return monthlyRate*monthsWorked

//monthsWorked calculation
//var currentDate = new Date();
//
