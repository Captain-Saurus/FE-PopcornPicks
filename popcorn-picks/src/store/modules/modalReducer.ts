import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  modalType: string;
  isOpen: boolean;
}

let initialState: ModalState = {
  modalType: "",
  isOpen: false,
};
const modalReducer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, actions) {
      const modalType = actions.payload;
      state.modalType = modalType;
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalReducer.actions;
export default modalReducer.reducer;
