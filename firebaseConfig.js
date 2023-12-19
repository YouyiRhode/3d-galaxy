import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDIytDmijsnPjuAlg-wZAX73hbGcehz-fA",
  authDomain: "form-977db.firebaseapp.com",
  databaseURL: "https://form-977db-default-rtdb.firebaseio.com",
  projectId: "form-977db",
  storageBucket: "form-977db.appspot.com",
  messagingSenderId: "256666443241",
  appId: "1:256666443241:web:fc930fa1e760c029367f78"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;