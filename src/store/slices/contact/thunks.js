import { getContacts } from "../../../firebase/firestore";
import {
  addContact,
  setContacts,
  setContractsFirstFetch,
  setLoadingContacts,
} from "./contactSlice";

export const fetchContacts = (agentId) => {
  return async (dispatch) => {
    dispatch(setLoadingContacts(true));

    try {
      const snapshot = await getContacts(agentId);
      dispatch(setContacts([]));

      snapshot.forEach((doc) => {
        dispatch(addContact({ id: doc.id, ...doc.data() }));
      });
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(setLoadingContacts(false));
      dispatch(setContractsFirstFetch(false));
    }
  };
};
