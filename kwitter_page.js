var firebaseConfig = {
      apiKey: "AIzaSyCwm0xoj31M7LHwNRgi2BpX-AS1hXKzgUo",
      authDomain: "kwitter-5c55b.firebaseapp.com",
      databaseURL: "https://kwitter-5c55b-default-rtdb.firebaseio.com",
      projectId: "kwitter-5c55b",
      storageBucket: "kwitter-5c55b.appspot.com",
      messagingSenderId: "292026231949",
      appId: "1:292026231949:web:ec54b1f417a9d37e1b86c4"
    };

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");




function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
