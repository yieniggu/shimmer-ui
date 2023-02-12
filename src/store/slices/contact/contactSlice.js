import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingContacts: true,
  contactsFirstFetch: true,
  contacts: null,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setLoadingContacts: (state, { payload }) => {
      state.loadingContacts = payload;
    },
    setContacts: (state, { payload }) => {
      state.contacts = payload;
    },
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    setContractsFirstFetch: (state, { payload }) => {
      state.contactsFirstFetch = payload;
    },
  },
});

export const {
  setContacts,
  setLoadingContacts,
  addContact,
  setContractsFirstFetch,
} = contactSlice.actions;
