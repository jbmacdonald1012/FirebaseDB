const { default: firebase } = require('@firebase/app-compat');
const { initializeApp } = require('firebase-admin/app');
const app = initializeApp(firebaseConfig);

const firebaseConfig = {
    apiKey: "AIzaSyAkx3cLkKcGCCUYPm-hA5tgWig_LM8TUJ4",
    authDomain: "homely-treasures-products.firebaseapp.com",
    projectId: "homely-treasures-products",
    storageBucket: "homely-treasures-products.appspot.com",
    messagingSenderId: "604698973774",
    appId: "1:604698973774:web:722d41bc0b922c9024951f",
    measurementId: "G-KT3WCLQPJ6"
  };

  const db = firebase.firestore();
  
  db.settings({
    timestampsInSnapshots : true
  });