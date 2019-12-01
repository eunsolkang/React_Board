import * as firebase from 'firebase'
import App from '../App';
let database;
let userData;
let calData;
let config = {
  apiKey: "AIzaSyABUhwXW8l2TO7iu26i9W2-nDrt0gYbHZc",
  authDomain: "project-70740.firebaseapp.com",
  databaseURL: "https://project-70740.firebaseio.com",
  projectId: "project-70740",
  storageBucket: "project-70740.appspot.com",
  messagingSenderId: "128313019413"
};


export const fire = () => {
  console.log('firebase start!');
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
  database = firebase.database()
  console.log(database);
}

export const getFireDB = () => {
    return database.ref('/').once('value')
}

export const writeUserData = (data, id, name) =>{
  var updates = data;
  updates.push({
    id : id,
    name  : name,
  });
  firebase.database().ref('/information').update(updates, (err)=>{
    if(err){
      console.log('fail');
    }
    else{
      console.log('save');
      // let app = new App();
      // app.handleUpdate(updates);
    }
  });
}
export const writeCalData = (data, id, testName, date) =>{
  var calUpdates = data;
  calUpdates.push({
    id : id,
    testName  : testName,
    date : date
  });
  firebase.database().ref('/calendar').update(calUpdates, (err)=>{
    if(err){
      console.log('fail');
    }
    else{
      console.log('save');
      // let app = new App();
      // app.handleUpdate(updates);
    }
  });
}
export const removeUserData = (data, id) =>{
  userData = data.filter(info => info.id !== id);
  console.log(userData);
  return firebase.database().ref('/information').set(userData);
}
export const removeCalData = (data, id) =>{
  console.log('캘린더 삭제!');
  calData = data.filter(cal => cal.id !== id);
  console.log(calData);
  return firebase.database().ref('/calendar').set(calData);
}
