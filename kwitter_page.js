var firebaseConfig = {
      apiKey: "AIzaSyCFKxK5cNwCrQEvDhLG3TNszegbDCTALAA",
      authDomain: "kwitter2-1be95.firebaseapp.com",
      databaseURL: "https://kwitter2-1be95-default-rtdb.firebaseio.com",
      projectId: "kwitter2-1be95",
      storageBucket: "kwitter2-1be95.appspot.com",
      messagingSenderId: "439200128619",
      appId: "1:439200128619:web:fe2114fe46a267e9dc5b2e",
      measurementId: "G-8N4XRST3QL"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send ()
{
      msg = documnet.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
      });
      document.getElementById("msg").value = "";
}
function logout( ) {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    } 
   