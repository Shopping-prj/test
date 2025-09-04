
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBq9axWOzr4Iw3QaBvfbbWDthHS2ykz2Gk",
  authDomain: "noticetest-e897a.firebaseapp.com",
  projectId: "noticetest-e897a",
  storageBucket: "noticetest-e897a.firebasestorage.app",
  messagingSenderId: "402810367676",
  appId: "1:402810367676:web:aea701fe77e96efb65aab9",
  measurementId: "G-N9W8Y82KW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
export const db = getDatabase(app)