// Step 1: Install Firebase
// Run this command in your terminal
// npm install --save firebase

// Step 2: Import Firebase
import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage'; // If using Firebase storage

// Step 3: Initialize Firebase
var firebaseConfig = {
    apiKey: " AIzaSyC_ulLk9GSl88QiVMMMOLvrVNXV1bK07RA",
    authDomain: "your-auth-domain",
    databaseURL: "your-database-url",
    projectId: "smart-plant-monitoring-a7775",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);