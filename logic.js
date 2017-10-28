<script>
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

  var employeeName=;
  var role=;
  var startDate=;
  var monthlyRate=;

  var monthsWorked=;
  var totalBilled =;

$("button").on("click",function () {
  employeeName = $("#name").val().trim();
  role = $("#role").val().trim();
  startDate = $("#date").val().trim();
  monthlyRate = $("#rate").val().trim();

  console.log(employeeName);
  console.log(role);
  console.log(startDate);

  // Save the new employe info in Firebase
    database.ref().psuh({
      name: employeeName,
      employeeRole: role,
      beginDate: startDate,
      payRate: monthlyRate
    });

  // Store the new high price and bidder name as a local variable (could have also used the Firebase variable)
    //highBidder = bidderName;
    //highPrice = parseInt(bidderPrice);

  // Change the HTML to reflect the new high price and bidder
    var newName = $("#").text(employeeName);
    var newRole = $("#").text(role);
    var newDate = $("#").text(startDate);
    var newRate = $("#").text(monthlyRate);


  //append the value list

  
})

</script>

//totalBilled calculation

//monthsWorked calculation
