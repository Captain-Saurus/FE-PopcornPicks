import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
}

let initialState: ModalState = {
  isOpen: false,
};
const modalReducer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalReducer.actions;
export default modalReducer.reducer;
