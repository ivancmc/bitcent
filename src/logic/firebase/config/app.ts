import { FirebaseApp, initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const app: FirebaseApp = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
});

const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});

export { app, db };
