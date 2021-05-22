import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "YOUR_DB_URL",
    });
    console.info("firestore connected");
  } catch (error) {
    console.info("Firebase admin initialization error", error.stack);
  }
}
export default admin.firestore();
