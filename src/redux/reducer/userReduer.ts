import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserReducerInitialState } from "../../types/reducer-types";
import { User } from "../../types/types";

const initialState: UserReducerInitialState = {
  user: null,
  loading: true,
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    userExit: (state, action:PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload
    },
    userNotExit: (state) => {
        state.loading = false;
        state.user = null;
      },

  },
});

export const {userExit , userNotExit} = userReducer.actions
