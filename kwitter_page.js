//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBu4kfr77jVGWz7nXZmsq2x8Qy5eFEhd28",
      authDomain: "kwitter-13-feb.firebaseapp.com",
      databaseURL: "https://kwitter-13-feb-default-rtdb.firebaseio.com",
      projectId: "kwitter-13-feb",
      storageBucket: "kwitter-13-feb.appspot.com",
      messagingSenderId: "655060313821",
      appId: "1:655060313821:web:0db33cf9621b85631e9d34"
};
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        firebase.database().ref(room_name).push({
                              name:user_name,
                              message:msg,
                              like:0
                        });
                        //End code
                  }
            });
      });
}
getData();

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