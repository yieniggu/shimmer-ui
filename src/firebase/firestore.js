import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { uid } from "uid";
import { db } from "./config";

export const getProducts = async () => {
  const productsRef = collection(db, "products");

  const docsSnap = await getDocs(productsRef);

  return docsSnap.docs;
};

export const addNewContact = async (contact) => {
  await setDoc(doc(db, "contact", uid()), {
    ...contact,
  });
};

export const getContacts = async (agentId) => {
  const contactRef = collection(db, "contact");

  console.log("agentId for getting contacts: ", agentId);

  const q = query(contactRef, where("agentId", "==", agentId));

  const querySnapshot = await getDocs(q);
  return querySnapshot;
};

export const addNewQuote = async (cart, contactFields) => {
  await setDoc(doc(db, "quotes", uid()), {
    cart,
    ...contactFields,
  });
};

export const getQuotes = async (agentId) => {
  const quotesRef = collection(db, "quotes");

  console.log("agentId for getting quotes: ", agentId);

  const q = query(quotesRef, where("agentId", "==", agentId));

  const querySnapshot = await getDocs(q);
  return querySnapshot;
};
