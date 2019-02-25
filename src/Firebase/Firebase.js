import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAph0HN70o9M1A70YiZo1wwJ4YvVmow-3U",
    authDomain: "shtexworld.firebaseapp.com",
    databaseURL: "https://shtexworld.firebaseio.com",
    projectId: "shtexworld",
    storageBucket: "shtexworld.appspot.com",
    messagingSenderId: "456571526360"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base