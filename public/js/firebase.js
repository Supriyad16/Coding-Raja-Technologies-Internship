let firebaseConfig = {
  apiKey: "AIzaSyCOWAp3q7RKXC-NW7EP3bQKhTGi6lh1t18",
  authDomain: "blogging-website-3da82.firebaseapp.com",
  projectId: "blogging-website-3da82",
  storageBucket: "blogging-website-3da82.appspot.com",
  messagingSenderId: "862297097427",
  appId: "1:862297097427:web:6634fb99e2d56c7f3e0026"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth =  firebase.auth();

const logoutUser = () => {
  auth.signOut();
  location.reload();
}