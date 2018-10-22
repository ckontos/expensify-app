import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  
 firebase.initializeApp(config);
 
 const database = firebase.database();
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
 
 export { firebase, googleAuthProvider, database as default };
 
//  firebase.database().ref('expenses').push({
//      description: 'rent',
//      note: 'January',
//      amount: 1000,
//      createdAt: '1/1/2018' 
//  });
 
//  firebase.database().ref().on('value', (snapshot) => {
//      const data = snapshot.val();
//      console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
//  }, (e) => {
//      console.log("Error fetching the data", e);
//  });
 
//  setTimeout(() => {
//       firebase.database().ref().update({
//         'job/company': 'Google'
//       });
// }, 3500);
 
//  firebase.database().ref().set({
//      name: 'Dimitri Kontos',
//      age: 26,
//      stressLevel: 9,
//      job: {
//          title: 'software developer',
//          company: 'google'
//      }
//  }).then(() => {
//      console.log('Data has been saved');
//  }).catch((e) => {
//      console.log('This has failed', e);
//  });

// firebase.database().ref('isSingle').remove()
//     .then(() => {
//         console.log('isSingle was deleted');
//     }).catch(() => {
//         console.log('There was a problem while deleting isSingle');
//     });
 
