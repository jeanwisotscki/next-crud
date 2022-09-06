import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getClients(db) {
  const clientsCol = collection(db, "clients");
  const clientSnapshot = await getDocs(clientsCol);
  const clientsList = clientSnapshot.docs.map((doc) => doc.data());
  return clientsList;
}

export const lista = async () => await getClients(db);
