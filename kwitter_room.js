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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectoRoomName(this.id)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML+= row;
//End code
      });});}
getData();
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}
function redirectoRoomName(name)
{
  console.log(name);
  localStorage.setITem("room_name", name);
  window.location = "kwitter_page.html";
}
 function logout( ) {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
 } 
 