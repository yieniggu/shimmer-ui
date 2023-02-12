import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
  type: null,
  contact: null,
  sendingContact: false,
  messageSent: false,
  sendingQuote: false,
  quoteSent: false,
  agentId: null,
};

export const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.modalOpen = true;
      state.type = payload;
    },
    setSendingContact: (state, { payload }) => {
      state.sendingContact = payload;
    },
    setMessageSent: (state, { payload }) => {
      state.messageSent = payload;
    },
    closeModal: () => initialState,
    setAgentId: (state, { payload }) => {
      state.agentId = payload;
    },
    setSendingQuote: (state, { payload }) => {
      state.sendingQuote = payload;
    },
    setQuoteSent: (state, { payload }) => {
      state.quoteSent = payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  setMessageSent,
  setSendingContact,
  setAgentId,
  setSendingQuote,
  setQuoteSent,
} = UISlice.actions;
