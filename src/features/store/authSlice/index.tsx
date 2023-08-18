import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  token?: string | null;
}

const initialState: InitialState = { token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
    logout(state) {
      state.token = initialState.token;
    },
  },
});

export default authSlice;

export const { login, logout } = authSlice.actions;
