import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { isLogedin: false, idToken: "", email: "" };

const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.isLogedin = true;
      state.idToken = action.payload;
      localStorage.setItem("token", JSON.stringify(state.idToken));
    },
    logout(state) {
      state.isLogedin = false;
      state.idToken = "";
      localStorage.removeItem("token");
    },
  },
});

const Store = configureStore({ reducer: AuthSlice.reducer });

export const AuthActions = AuthSlice.actions;

export default Store;
