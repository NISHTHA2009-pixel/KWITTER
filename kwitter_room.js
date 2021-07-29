// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBhxdNTKtwtWlIjMvgUiZ9GAiHb82S9g1Y",
  authDomain: "kwitter-b1b0c.firebaseapp.com",
  databaseURL: "https://kwitter-b1b0c-default-rtdb.firebaseio.com",
  projectId: "kwitter-b1b0c",
  storageBucket: "kwitter-b1b0c.appspot.com",
  messagingSenderId: "11770609095",
  appId: "1:11770609095:web:4061940842640e2fb1ade2",
  measurementId: "G-W9376NTYCV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! ";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();


function  redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {

  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";

}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  
}