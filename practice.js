
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyB7bBy7MkcrIR1xtRgKF1CTOx0HNLk0gm4",
    authDomain: "project-file-38f23.firebaseapp.com",
    projectId: "project-file-38f23",
    storageBucket: "project-file-38f23.appspot.com",
    messagingSenderId: "41401734210",
    appId: "1:41401734210:web:ef221e93c06096a8af49db"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 

    function addUser()
    {
     user_name = document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
         purpose:"adding user"
     }

     );
    }