import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    componentID: null,
    title: null,
    description: null,
  },
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
    selectComponent(state, action) {
      state.componentID = action.payload.componentID;
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
  },
});

export const {openModal, closeModal, selectComponent} = modalSlice.actions;
export default modalSlice.reducer;