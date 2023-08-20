import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  token?: string | null;
}

const token = localStorage.getItem("token");

const initialState: InitialState = { token };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
      localStorage.setItem("token", state.token);
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export default authSlice;

export const { login, logout } = authSlice.actions;
