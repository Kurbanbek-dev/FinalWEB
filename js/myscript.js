var firebaseConfig = {
    apiKey: "AIzaSyDma8Zvm9eHxaiLIp0YOLyFV_FNSZSU9Uk",
    authDomain: "wheel-of-fortune-dadae.firebaseapp.com",
    projectId: "wheel-of-fortune-dadae",
    storageBucket: "wheel-of-fortune-dadae.appspot.com",
    messagingSenderId: "543821685490",
    appId: "1:543821685490:web:856eddc5feb5c19a35a66b",
    measurementId: "G-8ZXGYSWPP9"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
      
var database = firebase.database();



function myfunction(){
var x = 1024;
var y = 9999;
  var deg = Math.floor(Math.random() * (x - y)) + y;
    
 document.getElementById('box').style.transform = "rotate("+ deg +"deg)";
    
    var element = 
        
      document.getElementById('main');
  
    element.classList.remove('animate');
    setTimeout(function(){
      
        element.classList.add('animate');
    
    }, 3000);
}
    
