import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestApiResponse } from "../sagas/users";

export interface UserDataState {
  loading: boolean;
  data: TestApiResponse[];
  error: string | null;
}

const initialState: UserDataState = {
  loading: false,
  data: [],
  error: null,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    fetchDataRequest(state: UserDataState) {
      state.loading = true;
    },
    fetchDataSuccess(
      state: UserDataState,
      action: PayloadAction<TestApiResponse[]>,
    ) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state: UserDataState, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } =
  userDataSlice.actions;

export default userDataSlice.reducer;
