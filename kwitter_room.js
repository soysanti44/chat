
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBeUXBPbS2E87cdhTf88-0XELdmFkMGYTs",
      authDomain: "kwiter-53a0d.firebaseapp.com",
      databaseURL: "https://kwiter-53a0d-default-rtdb.firebaseio.com",
      projectId: "kwiter-53a0d",
      storageBucket: "kwiter-53a0d.appspot.com",
      messagingSenderId: "1038925266502",
      appId: "1:1038925266502:web:5aed58be7c9eb6d17f5447"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

user_name =localStorage.getItem("user_name")
room_name =localStorage.getItem("room_name")
document.getElementById("user_name").innerHTML = "hola" + user_name

function add_room() {
room_name =document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({
      purpose:"añadiendosala"
})
localStorage.setItem("room_name",room_name)
window.location ="kwitter_page.html"
}



function log_out() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
function redireccionando(name) {
     console.log(name);
     localStorage.setItem("room_name",room_name)
      window.location("kwitter_page.html")
}