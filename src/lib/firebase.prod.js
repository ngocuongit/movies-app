import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { seedDatabase } from '../seed';

const firebaseConfig = {
    apiKey: 'AIzaSyBR0vMQbEtS_5918-86-3ug_haFPOOcQ2w',
    authDomain: 'movie-app-3d760.firebaseapp.com',
    projectId: 'movie-app-3d760',
    storageBucket: 'movie-app-3d760.appspot.com',
    messagingSenderId: '970734636015',
    appId: '1:970734636015:web:bccbff39377f84823a841a',
};
const firebase = Firebase.initializeApp(firebaseConfig);

seedDatabase(firebase);

export { firebase };
