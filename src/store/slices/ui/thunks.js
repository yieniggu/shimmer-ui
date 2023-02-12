import { toast } from "react-toastify";
import { addNewContact } from "../../../firebase/firestore";
import { getAgentId } from "../../../helpers/session";
import { addContact } from "../contact/contactSlice";
import { fetchContacts } from "../contact/thunks";
import { fetchQuotes } from "../products";
import { setAgentId, setMessageSent, setSendingContact } from "./UISlice";

export const newContact = (contact) => {
  return async (dispatch) => {
    console.log("contact: ", contact);
    dispatch(setSendingContact(true));
    const id = toast.loading("Enviando solicitud de contacto");

    try {
      await addNewContact(contact);
      toast.update(id, {
        render: "Solicitud enviada",
        type: "success",
        isLoading: false,
      });
      dispatch(addContact(contact));
      dispatch(setMessageSent(true));
    } catch (e) {
      console.error(e);
      toast.update(id, {
        render: "Ups! algo salio mal",
        type: "error",
        isLoading: false,
      });
    } finally {
      setTimeout(() => {
        toast.done(id);
      }, 1000);
      dispatch(setSendingContact(false));
    }
  };
};

export const setIdentifier = () => {
  return async (dispatch) => {
    const agentId = getAgentId();

    dispatch(setAgentId(agentId));
    dispatch(fetchQuotes(agentId));
    dispatch(fetchContacts(agentId));
  };
};
