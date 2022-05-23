import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA-eujQixuQxo40uNNnm51_B0y7Up_Fp3A",
  authDomain: "mvp-666.firebaseapp.com",
  projectId: "mvp-666",
  storageBucket: "mvp-666.appspot.com",
  messagingSenderId: "633510672185",
  appId: "1:633510672185:web:b3129eaa6e6311c877dae8",
  measurementId: "G-3XYEF0S2Q6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function (_, inject) {
  const analytics = getAnalytics(app);
  const log = function (event, payload = {}) {
    logEvent(analytics, event, payload);
  };
  inject("firebase", log);
}
