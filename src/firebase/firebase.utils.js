// firebase is a big library, we import only what we need everytime!
// firebase/app is needed so we can get access to firestore and auth
import firebase from 'firebase/app';
// below is for DB
import 'firebase/firestore';
// this is for auth
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyDV5I7gL9XiPtVxXwA07dSBjDz93gC4gOA",
	authDomain: "reactwebstorefirebase.firebaseapp.com",
	projectId: "reactwebstorefirebase",
	storageBucket: "reactwebstorefirebase.appspot.com",
	messagingSenderId: "754887773338",
	appId: "1:754887773338:web:d296265d2cb75f2786e323"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// for google authentication utility from firebase
const provider = new firebase.auth.GoogleAuthProvider();
// whenever we use the google provider we want to trigger the prompt from google
provider.setCustomParameters({ prompt: 'select_account' });
// we get prompt for many different types of popups, but we only need the google one (there is twitter one, etc)
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// now we go to authentication in browser firebase and enable google auth!

export default firebase;