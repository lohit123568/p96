const firebaseConfig = {
    apiKey: "AIzaSyBfzPfZVnAL3sYthQUK2-t1sOpZn3Ot36Y",
    authDomain: "funchat-7873e.firebaseapp.com",
    databaseURL: "https://funchat-7873e-default-rtdb.firebaseio.com",
    projectId: "funchat-7873e",
    storageBucket: "funchat-7873e.appspot.com",
    messagingSenderId: "809495874345",
    appId: "1:809495874345:web:65b7dfacd109f288ae8538",
    measurementId: "G-BBBGLXHCPH"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user__name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}
function logout(){
    window.location = "index2.html";
 }